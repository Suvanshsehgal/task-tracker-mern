import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function TaskForm({ addTask, updateTask, editingTask, setEditingTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description || '');
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error('Title is required');
      return;
    }
    if (editingTask) {
      updateTask(editingTask._id, { title: title.trim(), description: description.trim() });
    } else {
      addTask({ title: title.trim(), description: description.trim() });
    }
    setTitle('');
    setDescription('');
    setEditingTask(null);
  };

  const handleCancel = () => {
    setEditingTask(null);
    setTitle('');
    setDescription('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
      <input
        type="text"
        placeholder="Task title *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
      />
      <div className="form-actions">
        <button type="submit">{editingTask ? 'Update' : 'Add'} Task</button>
        {editingTask && (
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
