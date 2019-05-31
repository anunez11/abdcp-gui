import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; .
import variables from "../../variable";
import {Modal,Avatar} from 'antd';


class  DetalleImagen  extends Component{

    static propTypes ={
       
        
        detalle:PropTypes.object.isRequired
    }

    state = {
       
        visible: false,
    }
    

    handleCancel = () => {
       this.setState({ visible: false });
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
    }

    render(){
           const { visible } = this.state;      
           console.log('url',this.props.detalle);        
           return (
              <span>
                  <Avatar src={variables.apiBase+"acreditacion"+this.props.detalle.path} onClick={this.showModal}/>
                  <Modal width={720}
                    visible={visible}             
                    footer={null}
                    onCancel={this.handleCancel}
                   >
                    <img src={variables.apiBase+"acreditacion"+this.props.detalle.path} className="imgFactura" />                    
                  </Modal>
               </span>
           );
      }

 } 

 export  default DetalleImagen;