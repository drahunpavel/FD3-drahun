import React from 'react';
import PropTypes from 'prop-types';

//import './src/components-style/style.css';


class App extends React.Component {
    render() {
        return (

            <div id="container">
                
                <section id="main">
                    <section id="messages-list">Messages list</section>
                    <section id="new-message">New message</section>
                </section>
                <aside id="sidebar">Users</aside>
            </div>
        );
    }
};

export default App;