export const fetchStep = (todo_id) => (
  $.ajax({
    method: 'GET',
    url: `api/todo/${todo_id}/steps`
  })
)
