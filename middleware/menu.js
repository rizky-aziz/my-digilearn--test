export default function ({ redirect }) {
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user) {
    redirect('/home')
  }
  console.log('middleware')
}
