import React from 'react';

export const NewEventForm: React.FC = () => {
  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setError(ErrorNotification.None);

      if (title.trim() && user) {
        setIsAdding(true);

        try {
          await addTodo({
            userId: user.id,
            title: title.trim(),
            completed: false,
          });

          await loadingTodos();

          setTitle('');
        } catch {
          setError(ErrorNotification.Add);
        } finally {
          setIsAdding(false);
        }
      } else {
        setError(ErrorNotification.Title);
      }
    },
    [title, user]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
        value={title}
        onChange={(event) => onTitleChange(event.target.value)}
        disabled={isAdding}
      />

      <input
        placeholder=""
        value={description} 
      />
      <input 
        value={date} 
      />
    </form>
  );
};
