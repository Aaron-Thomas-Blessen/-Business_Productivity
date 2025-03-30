
import { companyKnowledge } from './companyKnowledge.js';
import {generateText} from './generateText.js';
import { workPlaceOptimization } from './workplaceOptimization.js';

(async () => {
  try {
    const workplaceOptimizationResult = await workPlaceOptimization();
    console.log(workplaceOptimizationResult);
    const companyKnowledgeResult = await companyKnowledge();
    console.log(companyKnowledgeResult);
    const textResult = await generateText();
    console.log(textResult);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
})();