import React from 'react';
import PropTypes from 'prop-types';


import Sidebar from "./Sidebar";
import MessagesList from "./MessagesList";
import AddMessage from "./AddMessage";
import AdditionalFunctions from "./AdditionalFunctions";

class App extends React.Component {
    render() {
        return (

            <div id="container">
                <section id="main">
                    <MessagesList/>
                    <AddMessage/>
                    {/* <section id="additional-functions">ghgh</section> */}
                </section>
                
                <Sidebar/>
            </div>
        );
    }
};

export default App;