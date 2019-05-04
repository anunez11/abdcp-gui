import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Layout } from 'antd'; 


class   Contenido extends Component{
    static propTypes ={
        body:PropTypes.object.isRequired
      }
    
      render() {

        const {body}=this.props;
        return (
        
            <Layout>{body}</Layout> 
        
        
        );
      }

}
export default Contenido;
