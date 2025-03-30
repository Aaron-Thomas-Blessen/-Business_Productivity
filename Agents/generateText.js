export const generateText = async (meetingTranscript) => {
    const url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29";
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJraWQiOiIyMDI1MDMwMTA4NDQiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwiaWQiOiJJQk1pZC02NjEwMDU0SUIxIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiOTA4NWM5NGUtNjc2YS00NmYwLWE5OTAtNTcyOTA1ZTJhNTlhIiwiaWRlbnRpZmllciI6IjY2MTAwNTRJQjEiLCJnaXZlbl9uYW1lIjoiQWFyb24gVGhvbWFzIiwiZmFtaWx5X25hbWUiOiJCbGVzc2VuIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZW1haWwiOiJhYXJvbnQuY3NhMjEyNUBzYWludGdpdHMub3JnIiwic3ViIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyIsImF1dGhuIjp7InN1YiI6ImFhcm9udC5jc2EyMTI1QHNhaW50Z2l0cy5vcmciLCJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZ2l2ZW5fbmFtZSI6IkFhcm9uIFRob21hcyIsImZhbWlseV9uYW1lIjoiQmxlc3NlbiIsImVtYWlsIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyJ9LCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiIyY2ZkZjBkNGUwYjk0NzRmYmJjNGQ0OTkxYWFmODkyOCIsImltc191c2VyX2lkIjoiMTM0MzI0MzgiLCJmcm96ZW4iOnRydWUsImltcyI6IjI5OTY4MzQifSwiaWF0IjoxNzQzMzYzMjgzLCJleHAiOjE3NDMzNjY4ODMsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.bROV6r_gv0DeA7XUDZIoxInhSKfxYWXFhr7vr9eZK-TgSO3ExfmdKF1ChTSN7PChFm5vEeSH0YiJ1ANTlt9nCAa7FVyXeamqYINj4ztZ9V9Jq5QDddU__CblCfNeoMvi5Bnh6O5TEabXTlIoxNt6imtar23I2wvQuOUSjCdlMWjZ1AUqTT6gOe_vZ2jRAqvNQTtg4sxba8WnB7WGN_qGCnRj2nQfHrIdhm5R1YLufe3uSgTfvJtc8bGt-ZuAqiJue_XPinxFlKpGjPtfrlXlQSEutnz4L_TknoJ6jNkc4ELHbOUs_ekLFQ0vcyXK9IveyU9Cy-fyvdfurk6v3ozERg"
    };
    const body = {
        input: `You are an AI meeting summarizer. Summarize the key points from the following meeting transcript in a concise and structured manner. Focus on important discussions, decisions, and next steps.

Input: Meeting Transcript:
${meetingTranscript}

Output:`,
        parameters: {
            decoding_method: "greedy",
            max_new_tokens: 200,
            min_new_tokens: 0,
            stop_sequences: [],
            repetition_penalty: 1
        },
        model_id: "ibm/granite-3-8b-instruct",
        project_id: "d4c45ea6-cd2e-4c05-b645-ffb438cf058e",
        moderations: {
            hap: {
                input: {
                    enabled: true,
                    threshold: 0.5,
                    mask: {
                        remove_entity_value: true
                    }
                },
                output: {
                    enabled: true,
                    threshold: 0.5,
                    mask: {
                        remove_entity_value: true
                    }
                }
            },
            pii: {
                input: {
                    enabled: true,
                    threshold: 0.5,
                    mask: {
                        remove_entity_value: true
                    }
                },
                output: {
                    enabled: true,
                    threshold: 0.5,
                    mask: {
                        remove_entity_value: true
                    }
                }
            }
        }
    };

    const response = await fetch(url, {
        headers,
        method: "POST",
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw new Error("Non-200 response");
    }

    return await response.json();
}

// Example usage with readline for command line input
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt for meeting transcript
rl.question('Please enter the meeting transcript:\n', async (transcript) => {
    try {
        const response = await generateText(transcript);
        console.log('Summary:', response);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        rl.close();
    }
});
```Input: Meeting Transcript:\n[John]: Good morning, team. Let'\''s begin the meeting. Our main agenda today is finalizing the product launch timeline.\n[Alice]: Yes, I reviewed the milestones, and we are on track. However, marketing needs an extra two weeks for the campaign.\n[David]: That might push our launch date. Can we adjust the engineering schedule?\n[John]: Let'\''s evaluate the trade-offs and confirm by the end of the day.```