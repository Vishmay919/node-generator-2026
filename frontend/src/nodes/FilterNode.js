import { withNodeConfig } from './WithNodeConfig.jsx';

const FilterNodeBody = () => <span>Filter items by condition</span>;

export const FilterNode = withNodeConfig('filter')(FilterNodeBody);
