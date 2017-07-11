export const fetchSteps = todo_id => (
  $.ajax({
    method: 'GET',
    url: `api/todos/${todo_id}/steps`
  })
)

export const createStep = step => (
  $.ajax({
    method: 'POST',
    url: `api/todos/${step.todo_id}/steps`,
    data: step
  })
);
