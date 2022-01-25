export default function tokenHeader () {
  const user = JSON.parse(localStorage.getItem('user'))

  if (user && user.token) {
    return 'Bearer ' + user.token
  } else {
    return ''
  }
}
