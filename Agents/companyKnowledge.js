import readline from 'readline';

export const companyKnowledge = async (userQuery) => {
    const url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29";
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJraWQiOiIyMDI1MDMwMTA4NDQiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwiaWQiOiJJQk1pZC02NjEwMDU0SUIxIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiOTA4NWM5NGUtNjc2YS00NmYwLWE5OTAtNTcyOTA1ZTJhNTlhIiwiaWRlbnRpZmllciI6IjY2MTAwNTRJQjEiLCJnaXZlbl9uYW1lIjoiQWFyb24gVGhvbWFzIiwiZmFtaWx5X25hbWUiOiJCbGVzc2VuIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZW1haWwiOiJhYXJvbnQuY3NhMjEyNUBzYWludGdpdHMub3JnIiwic3ViIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyIsImF1dGhuIjp7InN1YiI6ImFhcm9udC5jc2EyMTI1QHNhaW50Z2l0cy5vcmciLCJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZ2l2ZW5fbmFtZSI6IkFhcm9uIFRob21hcyIsImZhbWlseV9uYW1lIjoiQmxlc3NlbiIsImVtYWlsIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyJ9LCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiIyY2ZkZjBkNGUwYjk0NzRmYmJjNGQ0OTkxYWFmODkyOCIsImltc191c2VyX2lkIjoiMTM0MzI0MzgiLCJmcm96ZW4iOnRydWUsImltcyI6IjI5OTY4MzQifSwiaWF0IjoxNzQzMzYzMjgzLCJleHAiOjE3NDMzNjY4ODMsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.bROV6r_gv0DeA7XUDZIoxInhSKfxYWXFhr7vr9eZK-TgSO3ExfmdKF1ChTSN7PChFm5vEeSH0YiJ1ANTlt9nCAa7FVyXeamqYINj4ztZ9V9Jq5QDddU__CblCfNeoMvi5Bnh6O5TEabXTlIoxNt6imtar23I2wvQuOUSjCdlMWjZ1AUqTT6gOe_vZ2jRAqvNQTtg4sxba8WnB7WGN_qGCnRj2nQfHrIdhm5R1YLufe3uSgTfvJtc8bGt-ZuAqiJue_XPinxFlKpGjPtfrlXlQSEutnz4L_TknoJ6jNkc4ELHbOUs_ekLFQ0vcyXK9IveyU9Cy-fyvdfurk6v3ozERg"
    };
    const body = {
        input: `Simplify employee access to company knowledge. Provide easy access to company knowledge and resources, enabling employees to find information quickly and efficiently.

Input: Where can I find the latest AML (Anti-Money Laundering) policy documents?
Output: You can access the latest AML policy documents in the Compliance Portal under "Regulatory Policies" > "AML Framework" section. The most recent version (v4.2) was updated on February 12, 2025. For quick access, use document code CP-AML-2025.

Input: ${userQuery}
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

    try {
        const response = await fetch(url, {
            headers,
            method: "POST",
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error("Non-200 response");
        }

        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

// Add interactive command line input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Example queries you can try:");
console.log("1. How do I access training materials for the new customer verification system?");
console.log("2. What are the current approval limits for small business loans?");
console.log("3. Where can I find templates for client investment proposals?");
console.log("4. What is the escalation process for suspected fraud cases?\n");

rl.question('Enter your company knowledge query: ', async (query) => {
    try {
        const response = await companyKnowledge(query);
        console.log('\nResponse:', JSON.stringify(response, null, 2));
    } catch (error) {
        console.error('Error:', error);
    } finally {
        rl.close();
    }
});
