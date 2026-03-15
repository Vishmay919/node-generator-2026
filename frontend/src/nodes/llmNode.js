import { withNodeConfig } from './WithNodeConfig.jsx';

const LLMNodeBody = () => <span>This is a LLM.</span>;

export const LLMNode = withNodeConfig('llm')(LLMNodeBody);
