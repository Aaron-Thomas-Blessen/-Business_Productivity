import streamlit as st
import requests
import json
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def workplace_optimization(user_query):
    url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29"
    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": f"Bearer {os.getenv('IBM_API_TOKEN')}"
    }
    body = {
        "input": f"""Monitor and optimize workforce productivity.

Input: How can I identify which teams are experiencing productivity bottlenecks this quarter?
Output: Based on productivity analytics, the Loan Processing team shows a 23% decrease in application throughput compared to last quarter. The bottleneck appears in the document verification stage, where processing time has increased from 45 to 72 minutes per application. I recommend scheduling a workflow analysis session and temporarily redistributing 2-3 verification specialists from the Commercial team, which is currently at 82% capacity.

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
        page_title="Workplace Optimization Assistant",
        page_icon="🏢",
        layout="wide",
        initial_sidebar_state="expanded"
    )

    # Custom CSS
    st.markdown("""
        <style>
        .main-header {
            font-size: 2.5rem;
            color: #1E88E5;
            margin-bottom: 1rem;
        }
        .sub-header {
            font-size: 1.2rem;
            color: #424242;
            margin-bottom: 2rem;
        }
        .response-box {
            background-color: #f8f9fa;
            padding: 2rem;
            border-radius: 10px;
            border: 1px solid #e0e0e0;
            margin: 1rem 0;
        }
        .category-header {
            color: #1565C0;
            font-size: 1.1rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }
        </style>
    """, unsafe_allow_html=True)

    # Header
    st.markdown('<p class="main-header">🏢 Workplace Optimization Assistant</p>', unsafe_allow_html=True)
    st.markdown('<p class="sub-header">Enhance workplace productivity with AI-powered insights</p>', unsafe_allow_html=True)

    # Sidebar with organized examples
    st.sidebar.title("📚 Example Queries")
    
    categories = {
        "Productivity": [
            "How can we measure team productivity in a hybrid work setup?",
            "What are the key performance indicators for remote teams?"
        ],
        "Collaboration": [
            "How can we improve cross-department collaboration?",
            "What tools should we implement for better team communication?"
        ],
        "Resource Management": [
            "How should we optimize workload distribution?",
            "What's the best way to handle resource allocation during peak times?"
        ]
    }
    
    for category, queries in categories.items():
        st.sidebar.markdown(f"### {category}")
        for query in queries:
            if st.sidebar.button(query, key=f"btn_{query[:20]}", help=f"Click to use this example"):
                st.session_state.query = query

    # Main input area with better styling
    st.markdown("### 💭 Ask Your Question")
    if 'query' not in st.session_state:
        st.session_state.query = ""
        
    query = st.text_area(
        "Enter your workplace optimization query:",
        value=st.session_state.query,
        height=100,
        placeholder="e.g., How can we improve team productivity?"
    )
    
    col1, col2, col3 = st.columns([1, 1, 4])
    with col1:
        submit_button = st.button("🚀 Analyze", type="primary", use_container_width=True)
    with col2:
        clear_button = st.button("🔄 Clear", use_container_width=True)
        
    if clear_button:
        st.session_state.query = ""
        st.experimental_rerun()
        
    # Display results with enhanced formatting
    if submit_button and query:
        with st.spinner('🔄 Analyzing your query...'):
            response = workplace_optimization(query)
            
        if response and 'results' in response:
            st.success("✅ Analysis Complete")
            
            # Format the response text
            result_text = response['results'][0]['generated_text'].strip()

            # Query section
            st.markdown("**🔍 Query:**")
            st.info(query)
            
            # Recommendation section
            st.markdown("**💡 Insights:**")
            st.markdown(result_text)
            
            st.markdown('</div>', unsafe_allow_html=True)
            
            # Metadata
            col1, col2 = st.columns(2)
            with col1:
                st.caption(f"Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
            with col2:
                st.caption(f"Model: {response.get('model_id', 'IBM Granite')}")
            
            # Technical details in expander
            with st.expander("🔧 Technical Details"):
                st.json(response)
        else:
            st.error("❌ Failed to get a valid response. Please try again.")

    # Add helpful footer
    st.markdown("---")
    st.markdown("""
    ### 💡 Tips for Better Results
    - Be specific in your questions
    - Include context about your team or situation
    - Ask about measurable outcomes
    - Consider both short-term and long-term impacts
    """)

if __name__ == "__main__":
    main()