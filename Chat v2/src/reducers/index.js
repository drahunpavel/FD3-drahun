import { combineReducers } from 'redux';
import messages from './messages';
import users from './users';

const chat = combineReducers({
  messages,
  users
})

export default chat;

// Редьюсеры работают при отправке сообщения:
// отправка сообщения нами - сообщение добавляется в локальный список
// при получении сообщения, обновляется все
// Список пользователей обновляется только при подключении нового пользователя