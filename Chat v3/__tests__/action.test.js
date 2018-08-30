import { addMessage, addUser } from './src/actions/index';
import * as types from './src/constants/ActionTypes';


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
});

describe('adding a second user', () => {
  it('should create an action to add a user with id 1', () => {
    const user = 'Tony'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 1
    }
    expect(addUser(user)).toEqual(action)
  })
});

describe('adding a third user', () => {
    it('should create an action to add a user with id 2', () => {
      const user = 'Kevin'
      const action = {
        type: types.ADD_USER,
        name: user,
        id: 2
      }
      expect(addUser(user)).toEqual(action)
    })
  });

  describe('adding a message', () => {
    it('should create an action to add a message with id 0', () => {
      const message = 'Something'
        const author="Mark"
      const action = {
        type: types.ADD_MESSAGE,
        message,
        author,
        id: 0
      }
      expect(addMessage(message, author)).toEqual(action)
    })
  });

  describe('adding a message', () => {
    it('should create an action to add a message with id 1', () => {
      const message = 'Something'
        const author="Tony"
      const action = {
        type: types.ADD_MESSAGE,
        message,
        author,
        id: 1
      }
      expect(addMessage(message, author)).toEqual(action)
    })
  });

  describe('adding a message', () => {
    it('should create an action to add a message with id 2', () => {
      const message = 'Something'
        const author="Kevin"
      const action = {
        type: types.ADD_MESSAGE,
        message,
        author,
        id: 2
      }
      expect(addMessage(message, author)).toEqual(action)
    })
  });