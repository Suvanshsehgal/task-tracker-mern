export default function TaskFilter({ filter, setFilter }) {
  const options = ['all', 'pending', 'completed'];
  return (
    <div className="task-filter">
      {options.map((opt) => (
        <button
          key={opt}
          className={filter === opt ? 'active' : ''}
          onClick={() => setFilter(opt)}
        >
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </button>
      ))}
    </div>
  );
}
