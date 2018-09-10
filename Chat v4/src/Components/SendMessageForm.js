import React from 'react';
import ReactDOM from 'react-dom';

import "./SendMessageForm.css";

class SendMessageForm extends React.Component {

    
    render() {
        return (

            <form
               
                className="send-message-form">
                <input

                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}

export default SendMessageForm;