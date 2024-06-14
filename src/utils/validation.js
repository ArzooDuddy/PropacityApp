export const validateTask = (task) => {
    if (!task?.title?.trim()) {
      return 'Title is required';
    }
    return null;
  };
  