import readline from 'readline';

export const customerRelations = async (userQuery) => {
    const url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29";
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJraWQiOiIyMDI1MDMwMTA4NDQiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwiaWQiOiJJQk1pZC02NjEwMDU0SUIxIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiMTA3M2Q3ZDgtNzg5Ny00ZTJiLWE2ZGMtNmU1MDI1YjQ0NmQ3IiwiaWRlbnRpZmllciI6IjY2MTAwNTRJQjEiLCJnaXZlbl9uYW1lIjoiQWFyb24gVGhvbWFzIiwiZmFtaWx5X25hbWUiOiJCbGVzc2VuIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZW1haWwiOiJhYXJvbnQuY3NhMjEyNUBzYWludGdpdHMub3JnIiwic3ViIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyIsImF1dGhuIjp7InN1YiI6ImFhcm9udC5jc2EyMTI1QHNhaW50Z2l0cy5vcmciLCJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZ2l2ZW5fbmFtZSI6IkFhcm9uIFRob21hcyIsImZhbWlseV9uYW1lIjoiQmxlc3NlbiIsImVtYWlsIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyJ9LCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiIyY2ZkZjBkNGUwYjk0NzRmYmJjNGQ0OTkxYWFmODkyOCIsImltc191c2VyX2lkIjoiMTM0MzI0MzgiLCJmcm96ZW4iOnRydWUsImltcyI6IjI5OTY4MzQifSwiaWF0IjoxNzQzMzY3NDQxLCJleHAiOjE3NDMzNzEwNDEsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.fhBxYUwHNkLgiZn6gEi6etUXijK8iKUodlggxMCHjNDpljIvXS_x59CwkxcgUq464D7B9J1IAHqWuVKI3wM-vqGeOYMV5zT_3Pkqjf8tURws7D6iAx9JEX8A9-PELlQBPez8az4SMWs6Y-tc9N2dRvctWO6mHQtRPUTQpurd89lm7odXHllg3dJrFVKlKZWEbJgXZOVHyeHX6ZQUi5EKlByf5n99vbNK5TOKkE9JjgPOYrnWrkOqjY6CgZHOGoKnQWQhDoUl7QbVMGmhRs3fVuEC4tik7h423cTU2MgoEFmeK8Vzd1O0Ssc5MQxvrUeUPD6PRZ3KQLtmdMVdcey3_g"
    };
    
    const body = {
        input: `Manage customer relationships for sales and client engagement.

Input: What's the best approach for handling a dissatisfied premium client?
Output: Here's a structured approach for handling a dissatisfied premium client:
1. Immediate acknowledgment of concerns
2. Schedule face-to-face meeting within 24 hours
3. Prepare detailed account review and solution options
4. Offer specific compensatory actions
5. Establish weekly follow-up protocol

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

console.log("\nExample queries you can try:");
console.log("1. How should I handle a client who's threatening to leave?");
console.log("2. What's the best way to upsell premium services to existing clients?");
console.log("3. How can I improve client retention rates?");
console.log("4. What strategies work best for re-engaging dormant clients?\n");

rl.question('Enter your customer relations query: ', async (query) => {
    try {
        const response = await customerRelations(query);
        console.log('\nResponse:', JSON.stringify(response, null, 2));
    } catch (error) {
        console.error('Error:', error);
    } finally {
        rl.close();
    }
});
