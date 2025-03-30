export const workPlaceOptimization = async () => {
	const url = "https://us-south.ml.cloud.ibm.com/ml/v1/text/generation?version=2023-05-29";
	const headers = {
		"Accept": "application/json",
		"Content-Type": "application/json",
		"Authorization": "Bearer eyJraWQiOiIyMDI1MDMwMTA4NDQiLCJhbGciOiJSUzI1NiJ9.eyJpYW1faWQiOiJJQk1pZC02OTcwMDBGNzM0IiwiaWQiOiJJQk1pZC02OTcwMDBGNzM0IiwicmVhbG1pZCI6IklCTWlkIiwianRpIjoiNmJiYjFlMjQtY2JmNS00ZDUyLTg2MWItZTc4NWJlMWM5MzQ1IiwiaWRlbnRpZmllciI6IjY5NzAwMEY3MzQiLCJnaXZlbl9uYW1lIjoiRXRoZW4iLCJmYW1pbHlfbmFtZSI6IkJpanUiLCJuYW1lIjoiRXRoZW4gQmlqdSIsImVtYWlsIjoiZXRoZW4uY3NhMjEyNUBzYWludGdpdHMub3JnIiwic3ViIjoiZXRoZW4uY3NhMjEyNUBzYWludGdpdHMub3JnIiwiYXV0aG4iOnsic3ViIjoiZXRoZW4uY3NhMjEyNUBzYWludGdpdHMub3JnIiwiaWFtX2lkIjoiSUJNaWQtNjk3MDAwRjczNCIsIm5hbWUiOiJFdGhlbiBCaWp1IiwiZ2l2ZW5fbmFtZSI6IkV0aGVuIiwiZmFtaWx5X25hbWUiOiJCaWp1IiwiZW1haWwiOiJldGhlbi5jc2EyMTI1QHNhaW50Z2l0cy5vcmcifSwiYWNjb3VudCI6eyJ2YWxpZCI6dHJ1ZSwiYnNzIjoiMmNmZGYwZDRlMGI5NDc0ZmJiYzRkNDk5MWFhZjg5MjgiLCJpbXNfdXNlcl9pZCI6IjEzNDMyNDQ0IiwiZnJvemVuIjp0cnVlLCJpbXMiOiIyOTk2ODM0In0sImlhdCI6MTc0MzM1MjIwNCwiZXhwIjoxNzQzMzU1ODA0LCJpc3MiOiJodHRwczovL2lhbS5jbG91ZC5pYm0uY29tL2lkZW50aXR5IiwiZ3JhbnRfdHlwZSI6InVybjppYm06cGFyYW1zOm9hdXRoOmdyYW50LXR5cGU6YXBpa2V5Iiwic2NvcGUiOiJpYm0gb3BlbmlkIiwiY2xpZW50X2lkIjoiZGVmYXVsdCIsImFjciI6MSwiYW1yIjpbInB3ZCJdfQ.GOwyQQ1HMuyhoQM1AulHtN-s2R1i-7QFRG_gUm5c3aywPZ7ZM20Z1zWtBtTvmRP94WvR4pUOJUIpInp2D67zl01ifSf0S4Hj0QTDUosOlENHY-CungSVu4iKtLrKsVajxhnFieMf7dFpYdgNKFB4iuCDNhR0-Jvxcj10-swfbAcRyD3Z5zYOfPauV-a8HgpzTuFPBqpeUFYCj1EAcyPK7X9yXg5_MSmzSKwE9ZljKCeCASaUVmdeFDEOLp5rOiV7cwsG47Cjjuo9zWXyqyZRdqVJ3U1LpGLmheoMMV-mqi0dNOAjuuigUWvdrN7MJjH32PYs7o76n0ar1vZb2T7hpA"
	};
	const body = {
		input: "Monitor and optimize workforce productivity.\n\nInput: How can I identify which teams are experiencing productivity bottlenecks this quarter?\nOutput: Based on productivity analytics, the Loan Processing team shows a 23% decrease in application throughput compared to last quarter. The bottleneck appears in the document verification stage, where processing time has increased from 45 to 72 minutes per application. I recommend scheduling a workflow analysis session and temporarily redistributing 2-3 verification specialists from the Commercial team, which is currently at 82% capacity.\n\nInput: Show me the productivity trends for the Customer Service department over the past 6 months\nOutput: Customer Service productivity analysis for Jan-June 2025:\n\n- Call resolution time: Improved 12% (from 8.3 to 7.3 minutes)\n- First-call resolution rate: Increased from 67% to 74%\n- Agent utilization: Stable at 78-81% (optimal range)\n- After-hours support: Showing 20% understaffing on Tuesdays and Thursdays\n- Knowledge base usage: Up 34% following the March training\n\nThe department is trending positively overall, but I recommend addressing the Tuesday/Thursday staffing gaps and implementing the successful knowledge base training for new hires.\n\nInput: What are the main factors affecting the Investment Advisory team'\''s reduced output this month?\nOutput: Analysis of the Investment Advisory team'\''s reduced output reveals three primary factors:\n\n- System downtime: The portfolio management software experienced 7.5 hours of unplanned downtime (142% increase over baseline)\n- Meeting overload: Advisors are spending average of 23.4 hours weekly in meetings (up from 16.2 hours in previous months)\n- Training gap: 40% of advisors haven'\''t completed training on the new tax optimization tools\n\nRecommended actions: Schedule system maintenance during off-hours, implement a meeting efficiency protocol limiting sessions to 30 minutes, and prioritize completion of tax optimization training through dedicated time blocks.\n\nInput: Which repetitive tasks across departments should we consider automating to improve productivity?\nOutput: Priority automation opportunities identified across departments:\n\n1. Account verification processes (Operations): Currently consuming 340+ hours monthly with 89% consisting of standardized checks\n\n2. Compliance documentation filing (Legal): 76% of the 120 weekly hours spent on manual PDF processing and categorization.\n\n3. Customer onboarding data entry (Retail Banking): Each branch spending 15-22 hours weekly on duplicative entry across systems.\n\n4.Transaction reconciliation (Accounting): Daily manual reconciliation taking 3.5 hours that matches standard automation patterns.\n\nImplementing automation for these processes could reallocate approximately 720 hours monthly to higher-value activities with an estimated ROI period of 4-6 months.\n\nInput: How does the current work-from-home policy impact team productivity compared to in-office days?\nOutput: Work-from-home vs. in-office productivity analysis:\n\n1. Individual contributor output: 7-12% higher on WFH days for focused tasks (underwriting, analysis, report creation).\n\n2. Collaborative project advancement: 15% faster during in-office days.\n\n3. Meeting efficiency: Virtual meetings average 24% shorter with comparable outcome quality.\n\n4. Response time: Customer inquiry responses 18 minutes slower on average during WFH days\nWork satisfaction metrics: 22% higher on hybrid schedule vs. fully remote or fully in-office\n\nRecommendation: Optimize the hybrid model by designating Tuesdays and Thursdays as collaboration days with team co-location, while maintaining flexibility for focus days. Implement structured virtual communication protocols to improve remote response times.\n\nInput: How should we redistribute workload in the Commercial Lending team with two team members on extended leave?\nOutput: Commercial Lending workload redistribution plan:\n\nCurrent situation:\n\n27 active accounts needing management during extended leave of senior underwriters Johnson and Martinez (12 weeks)\nTeam already at 91% capacity with limited overflow capacity.\n\nOptimal redistribution strategy:\n\n1. Transfer 8 lower-complexity accounts to qualified Retail Lending specialists Patel and Washington (both under 75% capacity).\n\n2. Temporarily reassign Rodriguez from Special Projects to handle 7 mid-tier accounts (project timelines reviewed and adjusted).\n\n3. Distribute remaining 12 accounts among 4 senior team members with capacity-based allocation\nImplement 30-day postponement of non-urgent portfolio reviews (affects 14 accounts with minimal risk).\n\n4.Authorize 5-hour weekly overtime for processing specialists through leave period\n\nThis approach maintains service levels while preventing burnout among remaining team members.\n\nInput: How can we improve collaboration between the Risk Assessment and Loan Origination departments?\nOutput: Collaboration improvement plan for Risk Assessment and Loan Origination:\n\nCurrent pain points identified:\n\n- Document handoff delays averaging 27 hours\n- Duplicate data entry occurring across 68% of applications\n- Conflicting priority frameworks creating workflow bottlenecks\n- Siloed communication channels increasing clarification time by 4.2 hours per case\n\nRecommended optimizations:\n\n1. Implement shared workflow management system with real-time status visibility (projected to reduce handoff time by 76%).\n2. Create unified data entry protocol with automated field population across systems.\n3. Establish joint daily standup meetings (15 min) for priority alignment\n4. Develop integrated Slack channel for instant clarification requests with dedicated response time SLAs.\n5. Co-locate teams two days weekly for complex case reviews.\n\nPerformance indicators to track: handoff time, rework percentage, escalation frequency, and joint productivity index.\n\nInput: What technology investments would have the highest impact on improving our branch operations productivity?\nOutput: High-impact technology investments for branch operations productivity:\n\nDocument capture and processing automation (ROI analysis: 127% first year)\n\n-Reduces processing time by 65% for account opening and loan applications\n- Decreases error rates from 5.7% to 0.8%\n-Frees approximately 12.5 hours per week per branch for customer engagement\n\n\nIntelligent queue management system (ROI analysis: 94% first year)\n\n- Reduces customer wait times by 37%\n- Optimizes staff allocation based on real-time demand\n- Improves customer satisfaction scores projected at +18 points\n\n\nIntegrated customer authentication (ROI analysis: 78% first year)\n\n- Reduces verification time from 4.2 minutes to 45 seconds\n- Increases security compliance by 23%\n- Enables seamless service continuity across channels\n\n\nStaff scheduling optimization platform (ROI analysis: 85% first year)\n\n- Aligns staffing to peak traffic patterns with 92% accuracy\n- Reduces overtime costs by estimated 22%\n- Improves employee satisfaction through preference-based scheduling\n\n\n\nRecommendation: Phase implementation starting with document automation for highest immediate productivity gains.\n\nInput: Tell me how I can improve the collaboration between different departments  working under me\nOutput:",
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