import { withNodeConfig } from './WithNodeConfig.jsx';

const NoteNodeBody = () => <span>Sticky note</span>;

export const NoteNode = withNodeConfig('note')(NoteNodeBody);
