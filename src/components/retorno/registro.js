import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; 
import store from '../../store';
import {registrarSolicitud} from "../../action/ActionSolicitud";
import { Button, Modal,Form, Input, Select,Row,Col,DatePicker} from 'antd';
const Option = Select.Option;
const { TextArea } = Input;
class  RegistroRetorno extends Component{
   static propTypes ={
        combos:PropTypes.object.isRequired
    }

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
    
      handleSubmit = (e) => {
      // e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            
                console.log('Received values of form: ', values);
              
                    let registro={};
                    registro.cedente= values.cedente;
                   if(values.correoContacto!=="") registro.correoContacto= values.correoContacto;
                    registro.documento= values.documento;   
                    registro.numero= values.numero;                   
                    if(values.faxContacto!=="") registro.faxContacto= values.faxContacto;
                    if(values.nombreContacto!=="")registro.nombreContacto= values.nombreContacto;
                    registro.observaciones= values.observacion;
                    registro.fechaEjecucionRetorno=values.fechaEjecucionRetorno.format("YYYY-MM-DD HH:mm:ss");
                    if(values.telefonoContacto!=="") registro.telefonoContacto= values.telefonoContacto;                  
                    registro.motivoRetorno=values.motivoRetorno;
                    registro.tipoDocumento= values.tipoDocumento;
                    registro.tipo="02";
                    registro.codigo="SR";
                    registro.esEnviado=true;                 
                   
                    store.dispatch(registrarSolicitud(registro,registro.codigo));
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


            <div>
              <Button type="primary"  icon="plus-circle"  onClick={this.showModal}>
                  Agragar
              </Button>
            <Modal width={720}
              visible={visible}
              title="Registrar Solicitud de Retorno"
              onOk={this.handleSubmit}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>Cancelar</Button>,
                <Button key="submit" icon="save" type="primary" loading={loading} onClick={this.handleSubmit}>
                  Registrar
                </Button>,
              ]}
            >
               <Form onSubmit={this.handleSubmit}  layout="vertical"    >
               <Row  gutter={8}>
                    <Col span={8}>
                        <Form.Item  label="Cedente" className="ItemForm">
                                    {getFieldDecorator('cedente', {
                                    rules: [{ required: true, message: "Cedente es Requerido" },
                                        
                                ],
                                    })(
                                        <Select 
                                            showSearch          
                                            placeholder="Cedente"
                                            optionFilterProp="children"

                                        >  
                                    
                                        {this.props.combos.cedente.map(registro=> <Option key={"C"+registro.codigo} value={registro.codigo}>{registro.codigo+"-"+registro.descripcion} </Option> )}
                                        </Select>
                                    )}
                        </Form.Item>
                    
                    </Col>
                    <Col span={8}>
                        <Form.Item  label="Fecha Retorno" className="ItemForm">
                                    {getFieldDecorator('fechaEjecucionRetorno', {
                                    rules: [{ required: true, message: "La Fecha es Requerido" },
                                        
                                ],
                                    })(
                                      <DatePicker
                                      showTime
                                      placeholder="Fecha Retorno"
                                    
                                    />
                                    )}
                        </Form.Item>
                    
                    </Col>
                    <Col span={8}>
                    
                    <Form.Item  label="Motivo Retorno" className="ItemForm">
                               {getFieldDecorator('motivoRetorno', {
                               rules: [{ required: true, message: "Motivo Retorno es requerido" },],
                               })(
                                   <Select                                              
                                       placeholder="Motivo Retorno"
                                   >                                
                                      {this.props.combos.motivo.map(registro=> <Option key={"MR"+registro.codigo} value={registro.codigo}>{registro.codigo+"-"+registro.descripcion} </Option> )}
                                   </Select>
                               )}
                   </Form.Item>
               </Col>
               <Col span={8}>                    
                    <Form.Item  label="Numero a Retornar" className="ItemForm">
                               {getFieldDecorator('numero', {
                               rules: [{ required: true, message: "Numero a Retorno es requerido" },],
                               })(
                                <Input  type="text" placeholder="Numero a Retornar" />
                               )}
                   </Form.Item>
               </Col>
               <Col span={16}>
                           <Form.Item label="Nombre Contacto"  className="ItemForm">
                                {getFieldDecorator('nombreContacto', {initialValue:""})(
                                    <Input  type="text" placeholder="contacto" />
                                )}
                            </Form.Item>
                    </Col>


                    <Col span={8}>
                           <Form.Item label="Telefono Contacto"  className="ItemForm">
                                {getFieldDecorator('telefonoContacto', {initialValue:""})(
                                    <Input  type="text" placeholder="Telefono Contacto" />
                                )}
                            </Form.Item>
                    </Col>
                    <Col span={8}>
                            <Form.Item label="Correo Contacto"  className="ItemForm">
                                  {getFieldDecorator('correoContacto',  {initialValue:""})(
                                      <Input  type="text" placeholder="Correo Contacto" />
                                  )}
                            </Form.Item>
                    </Col>
                    <Col span={8}>
                            <Form.Item label="Fax Contacto"  className="ItemForm">
                                  {getFieldDecorator('faxContacto',  {initialValue:""})(
                                      <Input  type="text" placeholder="Fax Contacto" />
                                  )}
                            </Form.Item>
                    </Col>
                    <Col span={24}>
                            <Form.Item label="Observaciones"  className="ItemForm">
                                {getFieldDecorator('observacion', {initialValue:""})(
                                    <TextArea  placeholder="Observaciones"  autosize={{ minRows: 2, maxRows: 6 }} />
                                )}
                            </Form.Item>
                    </Col>
                 </Row>   

                  


               </Form>



            </Modal>
          </div>
           );
      }

 } 

 export  default Form.create({ name: 'form_retorno' })(RegistroRetorno);