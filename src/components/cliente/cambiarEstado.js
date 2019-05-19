import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; 
import store from '../../store';
import {setActualizarEstadoCliente} from "../../action/ActionCliente";
import { Button, Modal,Form,  Select,Row,Col} from 'antd';
const Option = Select.Option;

class  CambiarEstado  extends Component{

    static propTypes ={
        data:PropTypes.object.isRequired,
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
            
              //  console.log('Received values of form: ', values);
                     let registro={};
                     registro.ids=this.props.itemSeleccionado.map(item=>item.idCliente);
                     registro.cliente={};
                     if(values.estadoServicio!=="")  registro.cliente.estadoServicio=values.estadoServicio;
                     if(values.estadoFactura!=="")   registro.cliente.estadoFactura=values.estadoFactura;
                    store.dispatch(setActualizarEstadoCliente(registro));
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
              <Button type="primary" ghost  disabled={this.props.disabled} icon="setting"  onClick={this.showModal} />
                
            <Modal width={520}
              visible={visible}
              title="Cambiar Estado del Cliente"
              onOk={this.handleSubmit}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>Cancelar</Button>,
                <Button key="submit" icon="save" type="primary" loading={loading} onClick={this.handleSubmit}>
                  Registrar
                </Button>,
              ]}
            >
               <Form onSubmit={this.handleSubmit}   layout="vertical"    >
                 <Row  gutter={8}>
                   
                     
                   
                     <Col  span={24}  >
                               <Form.Item label="Estado Servicio" className="ItemForm" > 
                                {
                                        getFieldDecorator("estadoServicio",{ initialValue:""})(
                                            <Select placeholder="Estado Servicio"   >
                                                    <Option value=""> Sin Cambios </Option>
                                                    {this.props.data.estadoServicio.map(item=><Option key={"M"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                                            </Select> 
                                        )

                                }
                                </Form.Item>
                     </Col>
                    
                     
                     <Col  span={24} >
                          <Form.Item label="Estado Factura"  className="ItemForm">
                                   {getFieldDecorator('estadoFactura', { initialValue:""})(
                                  <Select placeholder="Estado Factura"   >
                                    <Option value=""> Sin Cambios </Option>
                                        {this.props.data.estadoFactura.map(item=><Option key={"EF"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                                  </Select> 
                            )}
                            </Form.Item>
                     </Col>                     
                 </Row>
                </Form>
            </Modal>
          </span>
           );
      }

 } 

 export  default Form.create({ name: 'form_cliente_estado' })(CambiarEstado);