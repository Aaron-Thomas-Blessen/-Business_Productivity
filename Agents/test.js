import { companyKnowledge } from './companyKnowledge.js';
import { generateText as generateTextBase } from './generateText.js';
import { workPlaceOptimization } from './workplaceOptimization.js';
import { generateText as actionText } from './Action.js';
import { generateText as intelligentText } from './Intelligent.js';
import { customerRelations } from './clientRelations.js';

(async () => {
  try {
    const workplaceOptimizationResult = await workPlaceOptimization();
    console.log('Workplace Optimization Result:', workplaceOptimizationResult);
    
    const companyKnowledgeResult = await companyKnowledge();
    console.log('Company Knowledge Result:', companyKnowledgeResult);

    const customerRelationsResult = await customerRelations();
    console.log('Customer Relations Result:', customerRelationsResult);
    
    const textResult = await generateTextBase();
    console.log('Base Text Result:', textResult);
    
    const actionResult = await actionText();
    console.log('Action Items Result:', actionResult);
    
    const intelligentResult = await intelligentText();
    console.log('Intelligent Email Result:', intelligentResult);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
})();