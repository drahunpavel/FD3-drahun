import messages from './messages';
import users from './users';
import * as types from '../constants/ActionTypes';

describe('Messages reducer', () => {

  it('should handle ADD_MESSAGE and store every message', () => {
    expect(
      messages([], {
        type: types.ADD_MESSAGE,
        message: 'Hey',
        author: 'Me'
      })
    ).toEqual([
      {
        message: 'Hey',
        author: 'Me'
      }
    ])

    expect(
      messages(
        [
          {
            message: 'Hey',
            author: 'Me'
          }
        ],
        {
          type: types.ADD_MESSAGE,
          message: 'Hey again',
          author: 'Me again'
        }
      )
    ).toEqual([
      {
        message: 'Hey',
        author: 'Me'
      },
      {
          message: 'Hey again',
          author: 'Me again'
      }
    ])
  })

  it('should handle ADD_USER and store every user', () => {
    expect(
      users([], {
        type: types.ADD_USER,
          name: 'Tony'
      })
    ).toEqual([
      {
          name: 'Tony'
      }
    ])

    expect(
      users(
        [
          {
            name: 'Mark',
          }
        ],
        {
          type: types.ADD_USER,
          name: 'Tony'
        }
      )
    ).toEqual([
      {
        name: 'Mark',
      },
      {
        name: 'Tony'
      }
    ])
  })
})