import axios from 'axios'

export function accountLogin() {
  const localApi = 'http://localhost:4000/'
  return axios.post(localApi + 'sessions',
    {
    method: 'post',
    session: {
      email: `${this.state.email}`,
      password: `${this.state.password}`
    }
  }).then((response) => {
    let jwt = response.data.jwt
    localStorage.setItem(`mcjwt`, jwt)
  }).catch((response) => {
    return response
  });
}
