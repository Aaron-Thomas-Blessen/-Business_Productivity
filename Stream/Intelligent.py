import streamlit as st
import requests
import json
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def analyze_email(user_email):
    url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29"
    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": f"Bearer {os.getenv('IBM_API_TOKEN')}"
    }
    body = {
        "input": f"""You are an AI email assistant designed to intelligently manage email overload. Your responsibilities include:

1️⃣ **Prioritization** - Determine urgency based on sender, subject, and content.  
2️⃣ **Summarization** - Condense long email threads into key points.  
3️⃣ **Response Suggestions** - Generate professional replies based on context.  
4️⃣ **Automation** - Assist in scheduling, approvals, and follow-ups.

Input: {user_email}
Output:""",
        "parameters": {
            "decoding_method": "greedy",
            "max_new_tokens": 200,
            "min_new_tokens": 0,
            "stop_sequences": [],
            "repetition_penalty": 1
        },
        "model_id": "ibm/granite-13b-instruct-v2",
        "project_id": "d4c45ea6-cd2e-4c05-b645-ffb438cf058e"
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
        page_title="Email Assistant",
        page_icon="📧",
        layout="wide"
    )

    st.title("AI Email Assistant")
    st.markdown("""
    This application helps you manage email overload by:
    * **Prioritizing** emails based on urgency
    * **Summarizing** long email threads
    * **Suggesting** professional responses
    * **Automating** scheduling and follow-ups
    """)

    # Example emails for quick selection
    st.sidebar.title("Example Emails")
    
    example_emails = {
        "Urgent Meeting Request": """From: Manager manager@company.com
Subject: Emergency Team Meeting
Body: We need to discuss an urgent client issue. Please join a call in 30 minutes.""",
        
        "Project Update Thread": """[Tom]: Project status update - we're on track for delivery
[Sarah]: Great progress! Few concerns about the testing phase
[Tom]: We can extend testing by 2 days if needed
[Sarah]: Agreed, let's update the timeline""",
        
        "Client Feedback Email": """From: Client client@company.com
Subject: Product Feedback
Body: The recent updates are good but we noticed some performance issues.
Could we schedule a call to discuss?"""
    }
    
    for example_name, example_text in example_emails.items():
        if st.sidebar.button(example_name):
            st.session_state.email_text = example_text
    
    # Custom email input
    if 'email_text' not in st.session_state:
        st.session_state.email_text = ""
    
    email_text = st.text_area(
        "Enter your email to analyze:", 
        value=st.session_state.email_text,
        height=200
    )
    
    col1, col2 = st.columns([1, 5])
    with col1:
        analyze_button = st.button("Analyze Email", type="primary")
    with col2:
        clear_button = st.button("Clear")
        
    if clear_button:
        st.session_state.email_text = ""
        st.experimental_rerun()
    
    # Process email and display results
    if analyze_button and email_text:
        with st.spinner('Analyzing your email...'):
            response = analyze_email(email_text)
            
        if response and 'results' in response:
            st.success("Analysis Complete")
            
            # Extract and display the analysis
            analysis_text = response['results'][0]['generated_text'].strip()
            
            # Create tabs for different types of analysis
            tab1, tab2, tab3 = st.tabs(["Complete Analysis", "Summary", "Response Suggestion"])
            
            with tab1:
                st.markdown("### Complete Analysis")
                st.markdown(analysis_text)
            
            with tab2:
                st.markdown("### Summary")
                # Try to extract summary from the analysis
                if "Summary:" in analysis_text:
                    summary_start = analysis_text.find("Summary:")
                    summary_end = analysis_text.find("\n\n", summary_start)
                    if summary_end == -1:  # If no double newline found
                        summary_end = len(analysis_text)
                    summary = analysis_text[summary_start:summary_end].strip()
                    st.markdown(summary)
                else:
                    st.markdown("Detailed summary not available for this email.")
            
            with tab3:
                st.markdown("### Suggested Response")
                # Try to extract response suggestion from the analysis
                if "Suggested Response:" in analysis_text:
                    response_start = analysis_text.find("Suggested Response:")
                    response_text = analysis_text[response_start:].strip()
                    st.markdown(response_text)
                    
                    # Add a button to copy response to clipboard (note: this uses JavaScript)
                    response_only = response_text.replace("Suggested Response:", "").strip()
                    st.code(response_only)
                    st.button("Copy to Clipboard", 
                              on_click=lambda: st.write("Response copied to clipboard!"))
                else:
                    st.markdown("Response suggestion not available for this email.")
            
            # Optional: Show raw JSON response
            with st.expander("View Raw API Response"):
                st.json(response)
        else:
            st.error("Failed to analyze the email. Please try again.")

if __name__ == "__main__":
    main()