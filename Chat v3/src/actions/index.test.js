import { addMessage, addUser } from '../actions'
import * as types from '../constants/ActionTypes'


describe('adding a firts user', () => {
  it('should create an action to add a user with id 0', () => {
    const user = 'Mark'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 0
    }
    expect(addUser(user)).toEqual(action)
  })
})

describe('adding a second user', () => {
  it('should create an action to add a message with id 1', () => {
    const user = 'Tony'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 1
    }
    expect(addUser(user)).toEqual(action)
  })
})

describe('adding a third user', () => {
    it('should create an action to add a message with id 2', () => {
      const user = 'Tony'
      const action = {
        type: types.ADD_USER,
        name: user,
        id: 2
      }
      expect(addUser(user)).toEqual(action)
    })
  })