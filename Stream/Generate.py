import streamlit as st
import requests
import json

def generate_text(meeting_transcript):
    url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29"
    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJraWQiOiIyMDI1MDMwMTA4NDQiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwiaWQiOiJJQk1pZC02NjEwMDU0SUIxIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiOTA4NWM5NGUtNjc2YS00NmYwLWE5OTAtNTcyOTA1ZTJhNTlhIiwiaWRlbnRpZmllciI6IjY2MTAwNTRJQjEiLCJnaXZlbl9uYW1lIjoiQWFyb24gVGhvbWFzIiwiZmFtaWx5X25hbWUiOiJCbGVzc2VuIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZW1haWwiOiJhYXJvbnQuY3NhMjEyNUBzYWludGdpdHMub3JnIiwic3ViIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyIsImF1dGhuIjp7InN1YiI6ImFhcm9udC5jc2EyMTI1QHNhaW50Z2l0cy5vcmciLCJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZ2l2ZW5fbmFtZSI6IkFhcm9uIFRob21hcyIsImZhbWlseV9uYW1lIjoiQmxlc3NlbiIsImVtYWlsIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyJ9LCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiIyY2ZkZjBkNGUwYjk0NzRmYmJjNGQ0OTkxYWFmODkyOCIsImltc191c2VyX2lkIjoiMTM0MzI0MzgiLCJmcm96ZW4iOnRydWUsImltcyI6IjI5OTY4MzQifSwiaWF0IjoxNzQzMzYzMjgzLCJleHAiOjE3NDMzNjY4ODMsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.bROV6r_gv0DeA7XUDZIoxInhSKfxYWXFhr7vr9eZK-TgSO3ExfmdKF1ChTSN7PChFm5vEeSH0YiJ1ANTlt9nCAa7FVyXeamqYINj4ztZ9V9Jq5QDddU__CblCfNeoMvi5Bnh6O5TEabXTlIoxNt6imtar23I2wvQuOUSjCdlMWjZ1AUqTT6gOe_vZ2jRAqvNQTtg4sxba8WnB7WGN_qGCnRj2nQfHrIdhm5R1YLufe3uSgTfvJtc8bGt-ZuAqiJue_XPinxFlKpGjPtfrlXlQSEutnz4L_TknoJ6jNkc4ELHbOUs_ekLFQ0vcyXK9IveyU9Cy-fyvdfurk6v3ozERg"
    }
    
    body = {
        "input": f"""You are an AI meeting summarizer. Summarize the key points from the following meeting transcript in a concise and structured manner. Focus on important discussions, decisions, and next steps.

Input: Meeting Transcript:
{meeting_transcript}

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

    with st.spinner('Generating summary...'):
        response = requests.post(url, headers=headers, json=body)
    
    if response.status_code != 200:
        st.error(f"Error: Non-200 response: {response.status_code}")
        return None
    
    return response.json()

# Streamlit UI
st.title('Meeting Transcript Summarizer')
st.write('This app summarizes meeting transcripts using IBM\'s Granite AI model.')

# Sample transcript for demo purposes
sample_transcript = """[John]: Good morning, team. Let's begin the meeting. Our main agenda today is finalizing the product launch timeline.
[Alice]: Yes, I reviewed the milestones, and we are on track. However, marketing needs an extra two weeks for the campaign.
[David]: That might push our launch date. Can we adjust the engineering schedule?
[John]: Let's evaluate the trade-offs and confirm by the end of the day."""

# Create text area for user input with sample text
meeting_transcript = st.text_area('Enter your meeting transcript:', 
                                 value=sample_transcript, 
                                 height=200)

# Add a button to trigger the summarization
if st.button('Generate Summary'):
    if meeting_transcript:
        try:
            result = generate_text(meeting_transcript)
            if result:
                # Extract the actual summary text from the response
                # Note: This might need adjustment based on the actual structure of the API response
                if 'results' in result and len(result['results']) > 0:
                    summary = result['results'][0]['generated_text']
                    st.subheader('Meeting Summary:')
                    st.write(summary)
                    
                    # Option to display full JSON response in an expandable section
                    with st.expander("View full API response"):
                        st.json(result)
                else:
                    st.warning("Couldn't extract summary from the response. Here's the raw response:")
                    st.json(result)
        except Exception as e:
            st.error(f"An error occurred: {str(e)}")
    else:
        st.warning('Please enter a meeting transcript.')

# Add additional information
st.markdown("---")
st.markdown("### About")
st.markdown("""
This app uses IBM's Granite-3-8b-instruct model to generate concise summaries of meeting transcripts.
It identifies key points, decisions, and action items from the conversation.
""")