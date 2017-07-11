export const fetchSteps = todo_id => (
  $.ajax({
    method: 'GET',
    url: `api/todos/${todo_id}/steps`
  })
)

export const createStep = (todoId, step) => (
  $.ajax({
    method: 'POST',
    url: `api/todos/${todoId}/steps`,
    data: step
  })
);
