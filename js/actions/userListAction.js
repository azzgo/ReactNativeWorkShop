
import faker from 'faker/locale/zh_CN'
export const FetchUser = 'FetchUser'


function mockHelper(num) {
  const userList = []
  for (let i = 0; i < num; i++) {
    userList.push({
      avatar: faker.image.avatar(),
      name: faker.name.findName(),
      office: faker.random.arrayElement(['成都', '北京', '西安', '武汉', '深圳', '上海', '东京']),
      title: faker.name.jobTitle(),
      project: faker.name.jobArea(),
      email: faker.internet.email()
    })
  }
  return userList
}

export function fetchUserListAction() {
  // return dispatch => {
  //   fetch('http://facehub.net/api/users', {
  //     headers: {
  //       Cookie: 'token=38dqyWGFnHf6U6C2bYpwet'
  //     }
  //   })
  //   .then(res => {
  //     if (res.ok) {
  //       return res.json()
  //     }
  //     throw res.error()
  //   })
  //   .then(json => dispatch({
  //     type: FetchUser,
  //     payload: json.users
  //   }))
  //   .catch(error => console.log('request error: ', error))
  // }
  return {
    type: FetchUser,
    payload: mockHelper(20)
  }
}