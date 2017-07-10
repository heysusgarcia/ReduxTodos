export const fetchSteps = todo_id => (
  $.ajax({
    method: 'GET',
    url: `api/todo/${todo_id}/steps`
  })
)

export const createStep = step => (
  $.ajax({
    method: 'POST',
    url: `api/todo/${step.todo_id}/steps`,
    data: step
  })
);
