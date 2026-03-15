export const ConfigStatusBar = ({ errors }) => {
  if (!errors.length) return null;

  const types = errors.map((e) => `"${e.type}"`).join(', ');
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '8px 16px',
        background: '#f59e0b',
        color: '#1f2937',
        fontSize: '14px',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <strong>Config warning:</strong> The following node types have invalid config and are
      unavailable: {types}. Check the console for details.
    </div>
  );
};
