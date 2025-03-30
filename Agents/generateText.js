export const generateText = async () => {
	const url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29";
	const headers = {
		"Accept": "application/json",
		"Content-Type": "application/json",
		"Authorization": "Bearer eyJraWQiOiIyMDI1MDMwMTA4NDQiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02OTcwMDBGNzM0IiwiaWQiOiJJQk1pZC02OTcwMDBGNzM0IiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiNmJiYjFlMjQtY2JmNS00ZDUyLTg2MWItZTc4NWJlMWM5MzQ1IiwiaWRlbnRpZmllciI6IjY5NzAwMEY3MzQiLCJnaXZlbl9uYW1lIjoiRXRoZW4iLCJmYW1pbHlfbmFtZSI6IkJpanUiLCJuYW1lIjoiRXRoZW4gQmlqdSIsImVtYWlsIjoiZXRoZW4uY3NhMjEyNUBzYWludGdpdHMub3JnIiwic3ViIjoiZXRoZW4uY3NhMjEyNUBzYWludGdpdHMub3JnIiwiYXV0aG4iOnsic3ViIjoiZXRoZW4uY3NhMjEyNUBzYWludGdpdHMub3JnIiwiaWFtX2lkIjoiSUJNaWQtNjk3MDAwRjczNCIsIm5hbWUiOiJFdGhlbiBCaWp1IiwiZ2l2ZW5fbmFtZSI6IkV0aGVuIiwiZmFtaWx5X25hbWUiOiJCaWp1IiwiZW1haWwiOiJldGhlbi5jc2EyMTI1QHNhaW50Z2l0cy5vcmcifSwiYWNjb3VudCI6eyJ2YWxpZCI6dHJ1ZSwiYnNzIjoiMmNmZGYwZDRlMGI5NDc0ZmJiYzRkNDk5MWFhZjg5MjgiLCJpbXNfdXNlcl9pZCI6IjEzNDMyNDQ0IiwiZnJvemVuIjp0cnVlLCJpbXMiOiIyOTk2ODM0In0sImlhdCI6MTc0MzM1MjIwNCwiZXhwIjoxNzQzMzU1ODA0LCJpc3MiOiJodHRwczovL2lhbS5jbG91ZC5pYm0uY29tL2lkZW50aXR5IiwiZ3JhbnRfdHlwZSI6InVybjppYm06cGFyYW1zOm9hdXRoOmdyYW50LXR5cGU6YXBpa2V5Iiwic2NvcGUiOiJpYm0gb3BlbmlkIiwiY2xpZW50X2lkIjoiZGVmYXVsdCIsImFjciI6MSwiYW1yIjpbInB3ZCJdfQ.GOwyQQ1HMuyhoQM1AulHtN-s2R1i-7QFRG_gUm5c3aywPZ7ZM20Z1zWtBtTvmRP94WvR4pUOJUIpInp2D67zl01ifSf0S4Hj0QTDUosOlENHY-CungSVu4iKtLrKsVajxhnFieMf7dFpYdgNKFB4iuCDNhR0-Jvxcj10-swfbAcRyD3Z5zYOfPauV-a8HgpzTuFPBqpeUFYCj1EAcyPK7X9yXg5_MSmzSKwE9ZljKCeCASaUVmdeFDEOLp5rOiV7cwsG47Cjjuo9zWXyqyZRdqVJ3U1LpGLmheoMMV-mqi0dNOAjuuigUWvdrN7MJjH32PYs7o76n0ar1vZb2T7hpA"
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
