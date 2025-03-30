import streamlit as st
import requests
import json
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def customer_relations(user_query):
    url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29"
    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": f"Bearer {os.getenv('IBM_API_TOKEN')}"
    }
    body = {
        "input": f"""Manage customer relationships for sales and client engagement.

Input: What's the best approach for handling a dissatisfied premium client?
Output: Here's a structured approach for handling a dissatisfied premium client:
1. Immediate acknowledgment of concerns
2. Schedule face-to-face meeting within 24 hours
3. Prepare detailed account review and solution options
4. Offer specific compensatory actions
5. Establish weekly follow-up protocol

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
        response = requests.post(url, headers=headers, json=body)
        response.raise_for_status()  # Raise exception for non-200 responses
        return response.json()
    except Exception as e:
        st.error(f"Error: {str(e)}")
        return None

def main():
    st.set_page_config(
        page_title="Customer Relations Assistant",
        page_icon="👥",
        layout="wide"
    )

    st.title("Customer Relations Assistant")
    st.markdown("""
    This application provides expert guidance for managing customer relationships, 
    handling client concerns, and improving engagement strategies.
    """)

    # Sidebar with example queries
    st.sidebar.title("Example Queries")
    example_queries = [
        "How should I handle a client who's threatening to leave?",
        "What's the best way to upsell premium services to existing clients?",
        "How can I improve client retention rates?",
        "What strategies work best for re-engaging dormant clients?"
    ]
    
    for i, query in enumerate(example_queries, 1):
        if st.sidebar.button(f"Example {i}", key=f"example_{i}"):
            st.session_state.query = query
            
    # Main input area
    if 'query' not in st.session_state:
        st.session_state.query = ""
        
    query = st.text_area("Enter your customer relations query:", 
                          value=st.session_state.query, 
                          height=100)
    
    col1, col2 = st.columns([1, 5])
    with col1:
        submit_button = st.button("Submit", type="primary")
    with col2:
        clear_button = st.button("Clear")
        
    if clear_button:
        st.session_state.query = ""
        st.experimental_rerun()
        
    # Display results
    if submit_button and query:
        with st.spinner('Analyzing your query...'):
            response = customer_relations(query)
            
        if response and 'results' in response:
            st.success("Analysis Complete")
            
            # Display the response in a nice format
            result_text = response['results'][0]['generated_text'].strip()
            
            st.subheader("Customer Relations Strategy")
            st.markdown(f"""
            **Query:** {query}
            
            **Recommended Approach:**
            {result_text}
            """)
            
            # Optional: Display raw JSON response
            with st.expander("View Raw API Response"):
                st.json(response)
        else:
            st.error("Failed to get a valid response. Please try again.")

if __name__ == "__main__":
    main()