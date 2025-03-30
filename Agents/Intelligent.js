export const generateText = async () => {
	const url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29";
	const headers = {
		"Accept": "application/json",
		"Content-Type": "application/json",
		"Authorization": "Bearer eyJraWQiOiIyMDI1MDMwMTA4NDQiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwiaWQiOiJJQk1pZC02NjEwMDU0SUIxIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiZDY2YzU1ZmUtMzg3ZS00OWY3LWJhMjItM2MxMDNiYzEyMmMzIiwiaWRlbnRpZmllciI6IjY2MTAwNTRJQjEiLCJnaXZlbl9uYW1lIjoiQWFyb24gVGhvbWFzIiwiZmFtaWx5X25hbWUiOiJCbGVzc2VuIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZW1haWwiOiJhYXJvbnQuY3NhMjEyNUBzYWludGdpdHMub3JnIiwic3ViIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyIsImF1dGhuIjp7InN1YiI6ImFhcm9udC5jc2EyMTI1QHNhaW50Z2l0cy5vcmciLCJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZ2l2ZW5fbmFtZSI6IkFhcm9uIFRob21hcyIsImZhbWlseV9uYW1lIjoiQmxlc3NlbiIsImVtYWlsIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyJ9LCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiIyY2ZkZjBkNGUwYjk0NzRmYmJjNGQ0OTkxYWFmODkyOCIsImltc191c2VyX2lkIjoiMTM0MzI0MzgiLCJmcm96ZW4iOnRydWUsImltcyI6IjI5OTY4MzQifSwiaWF0IjoxNzQzMzU1NzMyLCJleHAiOjE3NDMzNTkzMzIsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.GshC_HY84bYC06RDwZF0Zgg6R_qhi1ZAXczPmFnr6YVke162aO2WJLteULYbyFbUfNLZduaz-1KaVY1RTEbISgleZbkmQzo9xa0585uErktuSIt4BBF56CKc5yNZ4D8lmC6n5qtY9yDDXWBq14L_gVdpp3mZWfDoLZSZh2pqbYiUGWJOZ3wLMdebbHSMOuwIKtCb-01AI5H56EHn06Cz6LDxv_tugn6IXm9jMg8Wx-6m2ECk09bOuE6XJQFP5_WyLwXwdGqUiWvmRoNRJrmp9GtSOZLfpOOURQwU0GocK6CzRkOfWq_HxVHOzrMpOUmTRVaQd-w1gPRW4mTRtWvctQ"
	};
	const body = {
		input: "You are an AI email assistant designed to intelligently manage email overload. Your responsibilities include:\n\n1️⃣ **Prioritization** - Determine urgency based on sender, subject, and content.  \n2️⃣ **Summarization** - Condense long email threads into key points.  \n3️⃣ **Response Suggestions** - Generate professional replies based on context.  \n4️⃣ **Automation** - Assist in scheduling, approvals, and follow-ups.\n\n### Instructions:\nAnalyze the provided email(s) and respond appropriately by selecting the most relevant task(s):  \n- **If the email is urgent, determine the Priority Level (High, Medium, Low).**  \n- **If it is a long email thread, summarize it into key points.**  \n- **If a response is needed, draft a professional reply.**  \n- **If the email requires action (e.g., scheduling, approvals), outline the next steps.**\n\n\nInput: **📝 Example 1: Email Prioritization**\n**Input Email:**  \nFrom: CEO ceo@company.com\nSubject: Urgent - Board Meeting Tomorrow\nBody:\nHi Team,\n\nWe need to finalize the agenda for tomorrow’s board meeting. Please send me the latest updates by 5 PM today.\n\nBest,\nCEO\nOutput: Priority Level: High\nReason: Email is from the CEO and requires urgent action before 5 PM today.\n\nInput: ### **📝 Example 2: Summarizing an Email Thread**\n**Input Email Thread:**  \n[Alice]: \"Hey team, let’s finalize the budget by next week.\"\n\n[Bob]: \"Agreed. I will send the financial breakdown tomorrow.\"\n\n[Alice]: \"Thanks, Bob. Once ready, let’s schedule a meeting with finance.\"\n\n[Carol]: \"I will coordinate and find a slot for us by Wednesday.\"\n\n[Bob]: \"Attached the budget doc for review.\"\n\n[Alice]: \"Looks good. Let’s proceed with the final approval process.\"\nOutput: Summary:\n\nThe team is finalizing the budget.\n\nBob provided a financial breakdown.\n\nCarol is scheduling a meeting by Wednesday.\n\nFinal approval process is in progress.\n\nyaml\nCopy\nEdit\n\n\nInput: ### **📝 Example 3: Suggesting a Response**\n**Input Email:**  \nFrom: Client client@company.com\nSubject: Proposal Review Request\nBody:\nHi [Your Name],\n\nWe have reviewed the proposal you sent last week. We would like some clarifications on the pricing model and implementation timeline. Can we set up a call this week?\n\nLooking forward to your response.\n\nBest,\nClient\nOutput: Suggested Response:\nSubject: Re: Proposal Review Request\n\nHi [Client Name],\n\nThank you for reviewing the proposal. I’d be happy to clarify the pricing model and implementation timeline. Could you share your availability for a call this week? I am available on [Provide available time slots].\n\nLooking forward to our discussion.\n\nBest regards,\n[Your Name]\n\nInput: ### **📝 Example 4: Automating Scheduling & Approvals**\n**Input Email:**  \nFrom: HR hr@company.com\nSubject: Leave Request Approval\nBody:\nHi [Manager Name],\n\nEmployee John Doe has submitted a leave request from March 25th to March 30th. Please review and approve if there are no conflicts.\n\nBest,\nHR\nOutput: Actionable Steps:\n\nCheck for conflicts in John Doe’s schedule.\n\nIf no conflicts, send approval response to HR.\n\nIf conflicts exist, propose alternate dates or escalate.\n\nSuggested Response:\nSubject: Re: Leave Request Approval\n\nHi HR,\n\nI have reviewed John Doe’s leave request for March 25th–30th. There are no scheduling conflicts, so I approve the request. Please proceed with the necessary updates.\n\nBest,\n[Manager Name]\n\nInput: From: VP Sales <vp_sales@company.com>  \nSubject: Urgent: Client Demo at 3 PM Today  \nBody:  \nHi Team,  \n\nThe client has requested a last-minute demo at 3 PM today. Please ensure everything is set up.  \n\nThanks,  \nVP Sales\n\nOutput:",
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

generateText()
    .then(response => console.log(response))
    .catch(error => console.error("Error:", error));
