import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; 
import { Button, Modal} from 'antd';

class  RegistroRetorno extends Component{
   /* static propTypes ={
        registros:PropTypes.object.isRequired
    }*/

    state = {
        loading: false,
        visible: false,
      }
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      }
    
      handleCancel = () => {
        this.setState({ visible: false });
      }
    
    

      render(){
        const { visible, loading } = this.state;
           return (


            <div>
            <Button type="primary"  icon="plus-circle"  onClick={this.showModal}>
                 Agragar
            </Button>
            <Modal
              visible={visible}
              title="Registrar Solicitud de Retorno"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>Return</Button>,
                <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                  Submit
                </Button>,
              ]}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
           );
      }

 } 

 export default RegistroRetorno;