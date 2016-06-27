import React from 'react'
import { Image } from 'react-native'
import faker from 'faker'
import { shallow } from 'enzyme'
import UserCard from '../../js/components/UserCard'
import { expect } from 'chai'


const user = {
  avatar: faker.image.avatar(),
  name: faker.name.findName(),
  office: faker.random.arrayElement(['成都', '北京', '西安', '武汉', '深圳', '上海', '东京']),
  title: faker.name.jobTitle(),
  project: faker.name.jobArea(),
  email: faker.internet.email()
}

describe('Test UserCard', () => {
  it('should render stuff', () => {
    const wrapper = shallow(<UserCard user={user} />)
    expect(wrapper.find(Image).first().props().source.uri).to.equal(user.avatar)
  })
})
