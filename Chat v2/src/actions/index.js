import * as types from './src/constants/ActionTypes'

let nextMessageId = 0
const nextUserId = 0

export const addMessage = (message, author) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId+1,
  message,
  author
})

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId+1,
  message,
  author
})

export const populateUsersList = users => ({
  type: types.USERS_LIST,
  users
})