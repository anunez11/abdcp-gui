import React, { Component } from 'react';
import PropTypes from 'prop-types';

import store from '../../store';
import {setReenviarListaProgramacionEnviado} from "../../action/ActionProgramacion";
import { Button, Modal,Form, DatePicker, Row,Col} from 'antd';


class  EnviarMensajeEnviado  extends Component{

    static propTypes ={
       
        disabled:PropTypes.bool.isRequired,
        itemSeleccionado:PropTypes.array.isRequired
       
    }

    state = {
        loading: false,
        visible: false,
    }
    
    showModal = () => {
        this.setState({
          visible: true,
        });
        this.props.form.resetFields();
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
    
    handleSubmit = (e) => {
      // e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            
             
                     let registro={};
                     registro.ids=this.props.itemSeleccionado.map(item=>item.idProgramacionPortabilidad);
                     registro.progamacion={};
                     registro.progamacion.esEnviado=true
                     registro.progamacion.fechaEjecucion=this.props.form.getFieldValue("fechaProgamadaEjecucion").format("YYYY-MM-DD HH:mm");
                     registro.progamacion.fechaProgamadaEjecucion=this.props.form.getFieldValue("fechaProgamadaEjecucion").format("YYYY-MM-DD HH:mm");
                    store.dispatch(setReenviarListaProgramacionEnviado(registro));
                    this.setState({ loading: true });
                    setTimeout(() => {
                      this.setState({ loading: false, visible: false });
                    }, 3000);
                            

          }
        });
      }

      render(){
        const { visible, loading } = this.state;      
        const { getFieldDecorator } = this.props.form
           return (


            <span>
              <Button type="primary" ghost  disabled={this.props.disabled} icon="mail"  onClick={this.showModal} > Enviar Mensaje
                </Button>
                
            <Modal width={450}
              visible={visible}
              title="Reenviar Mensaje Programacion Portabilidad"
              onOk={this.handleSubmit}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>Cancelar</Button>,
                <Button key="submit" icon="save" type="primary" loading={loading} onClick={this.handleSubmit}>
                  Enviar Mensaje
                </Button>,
              ]}
            >
               <Form onSubmit={this.handleSubmit}   layout="vertical"    >
                 <Row  gutter={8}>
                   
                     
                   
                     <Col  span={24}  >
                               <Form.Item label="Fecha de Ejecucion de Portabilidad" className="ItemForm" > 
                                {
                                        getFieldDecorator("fechaProgamadaEjecucion",{rules: [{ required: true, message: "La Fecha es requerida" }] })(

                                            <DatePicker  style={{width:400}} showTime={{ format: 'HH:mm' }}   format="YYYY-MM-DD HH:mm" />
                                            
                                        )

                                }
                                </Form.Item>
                     </Col>
                    
                                  
                 </Row>
                </Form>
            </Modal>
          </span>
           );
      }

 } 

 export  default Form.create({ name: 'form_programacion' })(EnviarMensajeEnviado);