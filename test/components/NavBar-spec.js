import React from 'react'
import { Text } from 'react-native'
import { shallow } from 'enzyme'
import NavBar from '../../js/components/NavBar'
import { expect } from 'chai'


describe('Test NavBar', () => {
  it('should render stuff', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find(Text).first().prop('children')).to.equal('ThoughtWorkers')
  })
})
