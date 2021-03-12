import React, { Component } from 'react';
import logo from './myschool.jpg'

class Image extends Component {
    state = {  }
    render() { 
        return ( 
            <img src={logo} alt="School"></img>
         );
    }
}
 
export default Image;