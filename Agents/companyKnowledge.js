export const companyKnowledge = async () => {
	const url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29";
	const headers = {
		"Accept": "application/json",
		"Content-Type": "application/json",
		"Authorization": "Bearer eyJraWQiOiIyMDI1MDMwMTA4NDQiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02OTcwMDBGNzM0IiwiaWQiOiJJQk1pZC02OTcwMDBGNzM0IiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiNmJiYjFlMjQtY2JmNS00ZDUyLTg2MWItZTc4NWJlMWM5MzQ1IiwiaWRlbnRpZmllciI6IjY5NzAwMEY3MzQiLCJnaXZlbl9uYW1lIjoiRXRoZW4iLCJmYW1pbHlfbmFtZSI6IkJpanUiLCJuYW1lIjoiRXRoZW4gQmlqdSIsImVtYWlsIjoiZXRoZW4uY3NhMjEyNUBzYWludGdpdHMub3JnIiwic3ViIjoiZXRoZW4uY3NhMjEyNUBzYWludGdpdHMub3JnIiwiYXV0aG4iOnsic3ViIjoiZXRoZW4uY3NhMjEyNUBzYWludGdpdHMub3JnIiwiaWFtX2lkIjoiSUJNaWQtNjk3MDAwRjczNCIsIm5hbWUiOiJFdGhlbiBCaWp1IiwiZ2l2ZW5fbmFtZSI6IkV0aGVuIiwiZmFtaWx5X25hbWUiOiJCaWp1IiwiZW1haWwiOiJldGhlbi5jc2EyMTI1QHNhaW50Z2l0cy5vcmcifSwiYWNjb3VudCI6eyJ2YWxpZCI6dHJ1ZSwiYnNzIjoiMmNmZGYwZDRlMGI5NDc0ZmJiYzRkNDk5MWFhZjg5MjgiLCJpbXNfdXNlcl9pZCI6IjEzNDMyNDQ0IiwiZnJvemVuIjp0cnVlLCJpbXMiOiIyOTk2ODM0In0sImlhdCI6MTc0MzM1MjIwNCwiZXhwIjoxNzQzMzU1ODA0LCJpc3MiOiJodHRwczovL2lhbS5jbG91ZC5pYm0uY29tL2lkZW50aXR5IiwiZ3JhbnRfdHlwZSI6InVybjppYm06cGFyYW1zOm9hdXRoOmdyYW50LXR5cGU6YXBpa2V5Iiwic2NvcGUiOiJpYm0gb3BlbmlkIiwiY2xpZW50X2lkIjoiZGVmYXVsdCIsImFjciI6MSwiYW1yIjpbInB3ZCJdfQ.GOwyQQ1HMuyhoQM1AulHtN-s2R1i-7QFRG_gUm5c3aywPZ7ZM20Z1zWtBtTvmRP94WvR4pUOJUIpInp2D67zl01ifSf0S4Hj0QTDUosOlENHY-CungSVu4iKtLrKsVajxhnFieMf7dFpYdgNKFB4iuCDNhR0-Jvxcj10-swfbAcRyD3Z5zYOfPauV-a8HgpzTuFPBqpeUFYCj1EAcyPK7X9yXg5_MSmzSKwE9ZljKCeCASaUVmdeFDEOLp5rOiV7cwsG47Cjjuo9zWXyqyZRdqVJ3U1LpGLmheoMMV-mqi0dNOAjuuigUWvdrN7MJjH32PYs7o76n0ar1vZb2T7hpA"
	};
	const body = {
		input: "Simplify employee access to company knowledge. Provide easy access to company knowledge and resources, enabling employees to find information quickly and efficiently.\n\nInput: Where can I find the latest AML (Anti-Money Laundering) policy documents?\nOutput: You can access the latest AML policy documents in the Compliance Portal under \"Regulatory Policies\" > \"AML Framework\" section. The most recent version (v4.2) was updated on February 12, 2025. For quick access, use document code CP-AML-2025.\n\nInput: I need help finding our company'\''s mortgage interest rate calculation guidelines for first-time homebuyers.\nOutput: The mortgage interest rate calculation guidelines for first-time homebuyers can be found in the Lending Knowledge Base. Navigate to \"Mortgage Products\" > \"First-Time Buyer Programs\" > \"Rate Calculation Standards\". You can also use search code FTB-CALC-2025 for direct access.\n\nInput: How do I access training materials for the new customer verification system?\nOutput: Training materials for the new customer verification system are located in the Learning Management System (LMS). Log in to the LMS portal, select \"Technology Training\" category, and choose \"Customer Verification System 3.0\". All modules, including interactive tutorials and assessment quizzes, are available there. For technical support, contact the Learning Tech team at ext. 4488.\n\nInput: What are the current approval limits for small business loans in the Northeast region?\nOutput: Current approval limits for small business loans in the Northeast region can be found in the Credit Policy Manual. Access the Regional Lending Guidelines section (Section 4.3) through the Risk Management Portal. The most recent update was on January 10, 2025, which adjusted the tier structure. Branch managers can approve up to $250,000, District managers up to $750,000, and Regional directors up to $2.5M.\n\nInput: Where can I find templates for client investment proposals?\nOutput: Client investment proposal templates are stored in the Wealth Management Document Repository. Navigate to \"Client Materials\" > \"Proposals\" where you'\''ll find templates categorized by client segment (Mass Affluent, High Net Worth, Ultra High Net Worth) and investment strategy (Conservative, Balanced, Growth). All templates are pre-approved by Compliance and include the latest disclosure language.\n\nInput: I need to know the escalation process for suspected fraud cases.\nOutput: The escalation process for suspected fraud cases is documented in the Security Operations Manual on the Risk Portal. Go to \"Fraud Prevention\" > \"Detection & Response\" > \"Escalation Procedures\". The document includes a decision tree flowchart, contact information for the Fraud Response Team, and required documentation forms. For urgent cases, the 24/7 Fraud Hotline is available at ext. 1122\n\nInput: Where can I find information about our employee retirement plan options?\nOutput: Information about employee retirement plan options is available on the HR Portal under \"Benefits\" > \"Retirement Plans\". You'\''ll find detailed plan descriptions, comparison charts, contribution calculators, and investment fund fact sheets. For personalized guidance, you can schedule a consultation with our retirement benefits specialist through the same portal page.\n\nInput: How do I access the latest market research reports for the financial services sector?\nOutput: The latest market research reports for the financial services sector are available in the Research & Analytics Portal. Select \"Industry Reports\" > \"Financial Services\" to view all reports, organized by publication date. Premium research from Bloomberg, Moody'\''s, and S&P is also accessible through the \"External Research\" tab. New reports are highlighted on the portal homepage weekly.\n\nInput: give me information about employee retirement plan\nOutput:",
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