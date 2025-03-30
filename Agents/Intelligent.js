import readline from 'readline';

export const generateText = async (userEmail) => {
    const url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29";
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJraWQiOiIyMDI1MDMwMTA4NDQiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwiaWQiOiJJQk1pZC02NjEwMDU0SUIxIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiMTA3M2Q3ZDgtNzg5Ny00ZTJiLWE2ZGMtNmU1MDI1YjQ0NmQ3IiwiaWRlbnRpZmllciI6IjY2MTAwNTRJQjEiLCJnaXZlbl9uYW1lIjoiQWFyb24gVGhvbWFzIiwiZmFtaWx5X25hbWUiOiJCbGVzc2VuIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZW1haWwiOiJhYXJvbnQuY3NhMjEyNUBzYWludGdpdHMub3JnIiwic3ViIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyIsImF1dGhuIjp7InN1YiI6ImFhcm9udC5jc2EyMTI1QHNhaW50Z2l0cy5vcmciLCJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZ2l2ZW5fbmFtZSI6IkFhcm9uIFRob21hcyIsImZhbWlseV9uYW1lIjoiQmxlc3NlbiIsImVtYWlsIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyJ9LCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiIyY2ZkZjBkNGUwYjk0NzRmYmJjNGQ0OTkxYWFmODkyOCIsImltc191c2VyX2lkIjoiMTM0MzI0MzgiLCJmcm96ZW4iOnRydWUsImltcyI6IjI5OTY4MzQifSwiaWF0IjoxNzQzMzY3NDQxLCJleHAiOjE3NDMzNzEwNDEsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.fhBxYUwHNkLgiZn6gEi6etUXijK8iKUodlggxMCHjNDpljIvXS_x59CwkxcgUq464D7B9J1IAHqWuVKI3wM-vqGeOYMV5zT_3Pkqjf8tURws7D6iAx9JEX8A9-PELlQBPez8az4SMWs6Y-tc9N2dRvctWO6mHQtRPUTQpurd89lm7odXHllg3dJrFVKlKZWEbJgXZOVHyeHX6ZQUi5EKlByf5n99vbNK5TOKkE9JjgPOYrnWrkOqjY6CgZHOGoKnQWQhDoUl7QbVMGmhRs3fVuEC4tik7h423cTU2MgoEFmeK8Vzd1O0Ssc5MQxvrUeUPD6PRZ3KQLtmdMVdcey3_g"
    };
    
    const body = {
        input: `You are an AI email assistant designed to intelligently manage email overload. Your responsibilities include:

1️⃣ **Prioritization** - Determine urgency based on sender, subject, and content.  
2️⃣ **Summarization** - Condense long email threads into key points.  
3️⃣ **Response Suggestions** - Generate professional replies based on context.  
4️⃣ **Automation** - Assist in scheduling, approvals, and follow-ups.

Input: ${userEmail}
Output:`,
        parameters: {
            decoding_method: "greedy",
            max_new_tokens: 200,
            min_new_tokens: 0,
            stop_sequences: [],
            repetition_penalty: 1
        },
        model_id: "ibm/granite-13b-instruct-v2",
        project_id: "d4c45ea6-cd2e-4c05-b645-ffb438cf058e"
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

console.log("\nExample emails you can try:");
console.log("\n1. Urgent meeting request:");
console.log(`From: Manager manager@company.com
Subject: Emergency Team Meeting
Body: We need to discuss an urgent client issue. Please join a call in 30 minutes.`);

console.log("\n2. Project update thread:");
console.log(`[Tom]: Project status update - we're on track for delivery
[Sarah]: Great progress! Few concerns about the testing phase
[Tom]: We can extend testing by 2 days if needed
[Sarah]: Agreed, let's update the timeline`);

console.log("\n3. Client feedback email:");
console.log(`From: Client client@company.com
Subject: Product Feedback
Body: The recent updates are good but we noticed some performance issues.
Could we schedule a call to discuss?\n`);

rl.question('Enter your email to analyze: ', async (email) => {
    try {
        const response = await generateText(email);
        console.log('\nAnalysis:', JSON.stringify(response, null, 2));
    } catch (error) {
        console.error('Error:', error);
    } finally {
        rl.close();
    }
});
