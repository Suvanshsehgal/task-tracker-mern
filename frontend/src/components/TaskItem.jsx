export default function TaskItem({ task, onEdit, onDelete, onToggleStatus }) {
  return (
    <div className={`task-item ${task.status === 'completed' ? 'completed' : ''}`}>
      <div className="task-content">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
        <span className={`status-badge ${task.status}`}>{task.status}</span>
        <small className="task-date">
          {new Date(task.createdAt).toLocaleDateString()}
        </small>
      </div>
      <div className="task-actions">
        <button
          className="btn-toggle"
          onClick={() => onToggleStatus(task._id, task.status)}
          title={task.status === 'pending' ? 'Mark completed' : 'Mark pending'}
        >
          {task.status === 'pending' ? '✓' : '↩'}
        </button>
        <button className="btn-edit" onClick={() => onEdit(task)} title="Edit">
          ✎
        </button>
        <button className="btn-delete" onClick={() => onDelete(task._id)} title="Delete">
          ✕
        </button>
      </div>
    </div>
  );
}
