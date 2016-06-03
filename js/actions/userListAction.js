
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
  return {
    type: FetchUser,
    payload: mockHelper(20)
  }
}