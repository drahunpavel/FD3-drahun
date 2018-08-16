// Все экшены мы будем запускать по нажатию кнопок, кроме события SOCKETS_MESSAGE_RECEIVING, 
// который мы будем синтетически вызывать вслед за отправкой сообщения. Это делается, 
// чтобы в процессе разработки эмулировать недостающие в настоящий момент (или на конкретном этапе)
//  функционал серверной части приложения.


export const SOCKETS_CONNECTING = 'SOCKETS_CONNECTING';
export const SOCKETS_DISCONNECTING = 'SOCKETS_DISCONNECTING';
export const SOCKETS_MESSAGE_SENDING = 'SOCKETS_MESSAGE_SENDING';
export const SOCKETS_MESSAGE_RECEIVING = 'SOCKETS_MESSAGE_RECEIVING';

//Это будет первое состояние, которое мы будем иметь в нашем сторе на момент загрузки страницы, 
//ну точнее страница будет загружаться уже с этим первоначальным состоянием.
const initialState = {
    loaded: false,
    message: 'Just created',
    connected: false,
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {

        case SOCKETS_CONNECTING:
            return Object.assign({}, state, {
                loaded: true,
                message: 'Connecting...',
                connected: false
            });

        case SOCKETS_DISCONNECTING:
            return Object.assign({}, state, {
                loaded: true,
                message: 'Disconnecting...',
                connected: true
            });

        case SOCKETS_MESSAGE_SENDING:
            return Object.assign({}, state, {
                loaded: true,
                message: 'Send message',
                connected: true
            });

        case SOCKETS_MESSAGE_RECEIVING:
            return Object.assign({}, state, {
                loaded: true,
                message: 'Message receive',
                connected: true
            });

        default:
            return state;
    }
}

// Теперь продолжим с нашими экшенами и на этом завершим этот модуль. 
// Мы должны описать, как они будут изменять состояние reducer'a.
export function socketsConnecting() {
    return {type: SOCKETS_CONNECTING};
  }
  export function socketsDisconnecting() {
    return {type: SOCKETS_DISCONNECTING};
  }
  export function socketsMessageSending() {
    return {type: SOCKETS_MESSAGE_SENDING};
  }
  export function socketsMessageReceiving() {
    return {type: SOCKETS_MESSAGE_RECEIVING};
  }