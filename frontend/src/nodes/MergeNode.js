import { withNodeConfig } from './WithNodeConfig.jsx';

const MergeNodeBody = () => <span>Merge two inputs</span>;

export const MergeNode = withNodeConfig('merge')(MergeNodeBody);
