export const generateText = async () => {
    const url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29";
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJraWQiOiIyMDI1MDMwMTA4NDQiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwiaWQiOiJJQk1pZC02NjEwMDU0SUIxIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiZmZhMTE5MjYtZDE5Ni00NGQ0LTk0NjUtNzJlZDQ0OWE1NjM2IiwiaWRlbnRpZmllciI6IjY2MTAwNTRJQjEiLCJnaXZlbl9uYW1lIjoiQWFyb24gVGhvbWFzIiwiZmFtaWx5X25hbWUiOiJCbGVzc2VuIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZW1haWwiOiJhYXJvbnQuY3NhMjEyNUBzYWludGdpdHMub3JnIiwic3ViIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyIsImF1dGhuIjp7InN1YiI6ImFhcm9udC5jc2EyMTI1QHNhaW50Z2l0cy5vcmciLCJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZ2l2ZW5fbmFtZSI6IkFhcm9uIFRob21hcyIsImZhbWlseV9uYW1lIjoiQmxlc3NlbiIsImVtYWlsIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyJ9LCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiIyY2ZkZjBkNGUwYjk0NzRmYmJjNGQ0OTkxYWFmODkyOCIsImltc191c2VyX2lkIjoiMTM0MzI0MzgiLCJmcm96ZW4iOnRydWUsImltcyI6IjI5OTY4MzQifSwiaWF0IjoxNzQzMzI5OTI3LCJleHAiOjE3NDMzMzM1MjcsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.JNnoQGqxXpVes9GuhQK-XQY6R-1MeosD4eTCEgebg2KSbSEuJ5DQJegTK2U-IqUrxrmILaCpIj_squ_KiA4XeTeDKyXTU9ngARq9cr6tAtZZ7j1sDGC8DwbsZZWiA6T61D4Aq1GzK8TFROTB2fXdGDpLFzqK3Yu4CKVEpY8IefjM5D6YoRSnLG3XQznELkZiucihYhlElRXIw8B-T3zz58aliY_C-ygaZiE0TMGuXLqukAoDFzkvK8tgfz2aLSv-kOqmLglFnbD4MIqtBwRz5v9XoD9rY1g5uRSF9TbCvqh9LEnsv6WtoVqUoyUdJjYEHVWJZsqa53hfwCpSnPIJXQ"
    };
    const body = {
        input: "Extract action items from the following meeting transcript. Each action item should include the responsible person and the deadline.\n\nInput: Meeting Transcript:\n[Chris]: We’re launching the new product next month, so we need a go-to-market strategy finalized within two weeks.  \n[Olivia]: I’ll prepare the product demo video by next Tuesday.  \n[Ryan]: I’ll handle the press release and get it approved by next Friday.  \n[Ethan]: I’ll schedule a customer feedback session before launch.  \nOutput: **Action Items:**  \n1. **Chris** to finalize the go-to-market strategy within **two weeks**.  \n2. **Olivia** to prepare the product demo video by **Tuesday**.  \n3. **Ryan** to write and get approval for the press release by **Friday**.  \n4. **Ethan** to schedule a customer feedback session before launch.\n\nInput: Meeting Transcript:\n[David]: We need to finalize the Q2 marketing strategy by the end of this month.  \n[Lisa]: I’ll draft the email marketing plan and share it by next Monday.  \n[Mark]: I’ll coordinate with the design team for new ad creatives by Thursday.  \n[Emily]: I’ll analyze last quarter’s campaign performance and report the insights by Friday.  \n\nOutput: **Action Items:**  \n1. **Lisa** to draft and share the email marketing plan by **Monday**.  \n2. **Mark** to coordinate with the design team for new ad creatives by **Thursday**.  \n3. **Emily** to analyze last quarter’s campaign performance and report insights by **Friday**.  \n4. **David** to finalize the Q2 marketing strategy by **end of the month**.  \n\n\nInput: Meeting Transcript:\n[Alex]: We need to finalize the UI design by next week so the development team can start implementing it.  \n[Sophia]: I’ll review the latest design drafts by Wednesday and provide feedback.  \n[James]: I’ll work on integrating the authentication module by Friday.  \n[Emma]: Let’s also schedule a testing session for the new API by Monday.  \n\nOutput:",
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

// Add this at the end of the file to execute and show output
generateText()
    .then(response => console.log(response))
    .catch(error => console.error("Error:", error));