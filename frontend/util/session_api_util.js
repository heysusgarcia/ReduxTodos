export const signup = (currentUser) => (
  $.ajax({
    method: 'POST',
    url: '/user',
    data: { currentUser }
  })
)


export const login = (currentUser) => (
  $.ajax({
    method: 'POST',
    url: '/session',
    data: { currentUser }
  })
)

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/session'
  })
)
