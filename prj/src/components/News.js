import React from 'react';
import PropTypes from 'prop-types';

//import './ProductsGrid.css';
import Comments from './Comments';

class News extends React.Component {
    render(){
        return(
            <div className="news">
                <Comments/>
            </div>
        );
    }
};


export default News;