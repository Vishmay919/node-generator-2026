import { withNodeConfig } from './WithNodeConfig.jsx';

const APINodeBody = () => <span>Call external API</span>;

export const APINode = withNodeConfig('api')(APINodeBody);
