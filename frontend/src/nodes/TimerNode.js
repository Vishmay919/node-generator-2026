import { withNodeConfig } from './WithNodeConfig.jsx';

const TimerNodeBody = () => <span>Emit on interval</span>;

export const TimerNode = withNodeConfig('timer')(TimerNodeBody);
