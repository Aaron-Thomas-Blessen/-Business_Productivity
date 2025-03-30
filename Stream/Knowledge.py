import streamlit as st
import requests
import json
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def company_knowledge(user_query):
    url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29"
    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": f"Bearer {os.getenv('IBM_API_TOKEN')}"
    }
    
    body = {
        "input": f"""Simplify employee access to company knowledge. Provide easy access to company knowledge and resources, enabling employees to find information quickly and efficiently.

Input: Where can I find the latest AML (Anti-Money Laundering) policy documents?
Output: You can access the latest AML policy documents in the Compliance Portal under "Regulatory Policies" > "AML Framework" section. The most recent version (v4.2) was updated on February 12, 2025. For quick access, use document code CP-AML-2025.

Input: {user_query}
Output:""",
        "parameters": {
            "decoding_method": "greedy",
            "max_new_tokens": 200,
            "min_new_tokens": 0,
            "stop_sequences": [],
            "repetition_penalty": 1
        },
        "model_id": "ibm/granite-3-8b-instruct",
        "project_id": "d4c45ea6-cd2e-4c05-b645-ffb438cf058e",
        "moderations": {
            "hap": {
                "input": {
                    "enabled": True,
                    "threshold": 0.5,
                    "mask": {
                        "remove_entity_value": True
                    }
                },
                "output": {
                    "enabled": True,
                    "threshold": 0.5,
                    "mask": {
                        "remove_entity_value": True
                    }
                }
            },
            "pii": {
                "input": {
                    "enabled": True,
                    "threshold": 0.5,
                    "mask": {
                        "remove_entity_value": True
                    }
                },
                "output": {
                    "enabled": True,
                    "threshold": 0.5,
                    "mask": {
                        "remove_entity_value": True
                    }
                }
            }
        }
    }

    try:
        with st.spinner('Searching company knowledge...'):
            response = requests.post(url, headers=headers, json=body)
        
        if response.status_code != 200:
            st.error(f"Error: Non-200 response: {response.status_code}")
            return None
        
        return response.json()
    except Exception as e:
        st.error(f"Error: {str(e)}")
        return None

# Set up the Streamlit app
st.set_page_config(
    page_title="Company Knowledge Assistant",
    page_icon="🏢",
    layout="centered"
)

st.title("🏢 Company Knowledge Assistant")
st.subheader("Find company information quickly and efficiently")

# Create a sidebar with example queries
st.sidebar.title("Example Queries")
st.sidebar.markdown("""
Try asking about:
- How do I access training materials for the new customer verification system?
- What are the current approval limits for small business loans?
- Where can I find templates for client investment proposals?
- What is the escalation process for suspected fraud cases?
""")

# Create a text input for the user query
user_query = st.text_input("What would you like to know about company resources?", 
                           placeholder="E.g., Where can I find the HR policy handbook?")

# Add a search button
search_button = st.button("Search Knowledge Base")

# Initialize session state for chat history if it doesn't exist
if 'chat_history' not in st.session_state:
    st.session_state.chat_history = []

# Process the query when the button is clicked
if search_button and user_query:
    # Add the user query to the chat history
    st.session_state.chat_history.append({"role": "user", "content": user_query})
    
    # Get the response from the API
    response = company_knowledge(user_query)
    
    if response:
        # Extract and display the answer first
        if 'results' in response and len(response['results']) > 0:
            answer = response['results'][0]['generated_text']
            
            # Add the answer to the chat history
            st.session_state.chat_history.append({"role": "assistant", "content": answer})

# Display the chat history prominently
st.subheader("Conversation History")
for message in st.session_state.chat_history:
    if message["role"] == "user":
        st.markdown(f"**You:** {message['content']}")
    else:
        st.markdown("""
        <div style='background-color: #000000; padding: 1rem; border-radius: 0.5rem;'>
            <strong>Assistant:</strong><br>{content}
        </div>
        """.format(content=message['content']), unsafe_allow_html=True)
    st.markdown("---")

# Move API response details to bottom
if search_button and user_query and response:
    st.markdown("### Technical Details")
    with st.expander("View API Response"):
        st.json(response)

# Add footer information
st.markdown("---")
st.markdown("### About This Tool")
st.markdown("""
This Company Knowledge Assistant helps employees quickly find information about company policies, procedures, and resources.

The assistant uses IBM's Granite AI model to provide relevant and accurate information based on your queries.

For technical support, please contact the IT Helpdesk.
""")