export const generateText = async () => {
	const url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29";
	const headers = {
		"Accept": "application/json",
		"Content-Type": "application/json",
		"Authorization": "Bearer eyJraWQiOiIyMDI1MDMwMTA4NDQiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwiaWQiOiJJQk1pZC02NjEwMDU0SUIxIiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiNDc5MDIzN2EtMmMyNC00MmFlLTk3M2UtNGU5ZmVmM2MxZDQ5IiwiaWRlbnRpZmllciI6IjY2MTAwNTRJQjEiLCJnaXZlbl9uYW1lIjoiQWFyb24gVGhvbWFzIiwiZmFtaWx5X25hbWUiOiJCbGVzc2VuIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZW1haWwiOiJhYXJvbnQuY3NhMjEyNUBzYWludGdpdHMub3JnIiwic3ViIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyIsImF1dGhuIjp7InN1YiI6ImFhcm9udC5jc2EyMTI1QHNhaW50Z2l0cy5vcmciLCJpYW1faWQiOiJJQk1pZC02NjEwMDU0SUIxIiwibmFtZSI6IkFhcm9uIFRob21hcyBCbGVzc2VuIiwiZ2l2ZW5fbmFtZSI6IkFhcm9uIFRob21hcyIsImZhbWlseV9uYW1lIjoiQmxlc3NlbiIsImVtYWlsIjoiYWFyb250LmNzYTIxMjVAc2FpbnRnaXRzLm9yZyJ9LCJhY2NvdW50Ijp7InZhbGlkIjp0cnVlLCJic3MiOiIyY2ZkZjBkNGUwYjk0NzRmYmJjNGQ0OTkxYWFmODkyOCIsImltc191c2VyX2lkIjoiMTM0MzI0MzgiLCJmcm96ZW4iOnRydWUsImltcyI6IjI5OTY4MzQifSwiaWF0IjoxNzQzMjg1MTQ3LCJleHAiOjE3NDMyODg3NDcsImlzcyI6Imh0dHBzOi8vaWFtLmNsb3VkLmlibS5jb20vaWRlbnRpdHkiLCJncmFudF90eXBlIjoidXJuOmlibTpwYXJhbXM6b2F1dGg6Z3JhbnQtdHlwZTphcGlrZXkiLCJzY29wZSI6ImlibSBvcGVuaWQiLCJjbGllbnRfaWQiOiJkZWZhdWx0IiwiYWNyIjoxLCJhbXIiOlsicHdkIl19.GX6DmW0gjFu0Tm1nkZwbUIASricz8ssD5GeSEoAJA2f6X-Q6J-muUjLGJOa8xVcfZOHGOi-2gsDmIuTue8NFAy4tMaDQgOOmfQIXlf6xMUfMcMZ-odJmvf4-uw-RtCeUu9OZ6jeYGsOn0M7EPjqD6UWaqTtRLmbEaDwka650NupZOG80igHtQsgYDrNElWsTQxXI2Fpv3lhRSth-zQomRpTomp_BrjE8OUOppiDKpL8yyHKraEWSpR_Tq4_8f4KOk3tT5BD81oV6AHknb2RjEISMfAqE9YkRIQloyWoNUKkH2ScgwuiPVUq2DMOnhHoeD4fe8NUUy-EjrWVB0ZxWEA"
	};
	const body = {
		input: "You are an AI meeting summarizer. Summarize the key points from the following meeting transcript in a concise and structured manner. Focus on important discussions, decisions, and next steps.\n\nInput: Meeting Transcript:\n[Sarah]: Good afternoon, everyone. Today, we need to discuss the budget allocation for the upcoming quarter.  \n[Michael]: Yes, our primary concern is increasing the R&D budget while keeping marketing costs under control.  \n[Lisa]: I agree. We need at least a 10% increase in R&D for new product development.  \n[David]: But if we cut too much from marketing, sales might drop. Can we optimize other areas instead?  \n[Sarah]: Let’s analyze the impact and make a decision by Friday.  \n\nOutput: **Meeting Summary:**  \n- **Topic:** Budget allocation for the next quarter  \n- **Key Points:**  \n  - R&D requires a 10% budget increase for new product development.  \n  - Concerns raised about reducing marketing expenses, as it might affect sales.  \n  - Alternative cost optimizations to be explored instead of cutting marketing directly.  \n- **Next Steps:**  \n  - Finance team to analyze budget impact by **Friday**.  \n  - Decision to be finalized in the next meeting.  \n\n\nInput: Meeting Transcript:\n[John]: Good morning, team. Let'\''s begin the meeting. Our main agenda today is finalizing the product launch timeline.\n[Alice]: Yes, I reviewed the milestones, and we are on track. However, marketing needs an extra two weeks for the campaign.\n[David]: That might push our launch date. Can we adjust the engineering schedule?\n[John]: Let'\''s evaluate the trade-offs and confirm by the end of the day.\n\nOutput:",
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

generateText()
    .then(response => console.log(response))
    .catch(error => console.error("Error:", error));
