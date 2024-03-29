import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; 
import { Card, Form,  Input, Button, Select,Row,Col} from 'antd';
import store from '../../store';
import {registrarSolicitud} from "../../action/ActionSolicitud";
const Option = Select.Option;
const ButtonGroup = Button.Group;
const { TextArea } = Input;
class  FomularioSolicitud extends Component{
    static propTypes ={
        combos:PropTypes.object.isRequired
      }



      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            
                console.log('Received values of form: ', values);
                if(store.getState().numeracion.length>0){
                    let registro={};
                    registro.cedente= values.cedente;
                   if(values.correoContacto!=="") registro.correoContacto= values.correoContacto;
                    registro.documento= values.documento;
                    registro.departamento= values.departamento;
                    if(values.faxContacto!=="") registro.faxContacto= values.faxContacto;
                    if(values.nombreContacto!=="")registro.nombreContacto= values.nombreContacto;
                    registro.observaciones= values.observacion;
                    registro.tipoServicio= values.tipoServicio;
                    if(values.telefonoContacto!=="") registro.telefonoContacto= values.telefonoContacto;
                    if(values.numeroConsultaPrevia!=="") registro.numeroConsultaPrevia= values.numeroConsultaPrevia;

                    registro.tipoDocumento= values.tipoDocumento;
                    registro.tipo="01";
                    registro.codigo="SP";
                    registro.esEnviado=true;
                    registro.tipoCliente=store.getState().numeracion.length>10 ? "1" :"2";  
                    registro.cantidadNumero=store.getState().numeracion.length
                    registro.numeracion=store.getState().numeracion;
                    store.dispatch(registrarSolicitud(registro,registro.codigo));
                }
               

          }
        });
      }
   render(){

    
    const { getFieldDecorator } = this.props.form
      //  setFieldsValue({cantidadNumero:this.props.combos.cantidadNumeracion})
       return (
        <Card   title={"Solicitud Portabilidad "}          >
            <Form onSubmit={this.handleSubmit}  layout="vertical"    >
              <Row  gutter={8}>
                    <Col span={16}>
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
                    <Col span={8} >
                         <Form.Item label="Documento" className="ItemForm">
                            {getFieldDecorator('tipoDocumento', {
                            rules: [{ required: true, message: "Tipo Documento es Requerido" },
                                
                        ],
                            })(
                                <Select  placeholder="Tipo Documento" >                            
                                   {this.props.combos.tipoDocumento.map(registro=> <Option  key={"TD"+registro.codigo} value={registro.codigo}>{registro.codigo+"-"+registro.descripcion} </Option> )}
                                </Select>
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
                    <Form.Item label="Documento"  className="ItemForm">
                            {getFieldDecorator('documento', { rules: [{ required: true, message: "Documento es Requerido" }],})(
                                <Input  type="text" placeholder="Documento" />
                            )}
                </Form.Item>
                    </Col>
                    <Col span={8}>
                          <Form.Item label="Numero Consulta Previa"  className="ItemForm">
                            {getFieldDecorator('numeroConsultaPrevia', {initialValue:""})(
                                <Input  type="text" placeholder="Numero Consulta Previa" />
                            )}
                            </Form.Item>
                    </Col>
                    <Col span={8}>
                    
                         <Form.Item  label="Departamento" className="ItemForm">
                                    {getFieldDecorator('departamento', {
                                    rules: [{ required: true, message: "Departamento es Requerido" },
                                        
                                ],
                                    })(
                                        <Select 
                                            showSearch          
                                            placeholder="Departamento"
                                            optionFilterProp="children"

                                        >  
                                    
                                        {this.props.combos.departamento.map(registro=> <Option key={"C"+registro.codigo} value={registro.codigo}>{registro.codigo+"-"+registro.descripcion} </Option> )}
                                        </Select>
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
                    <Col span={8}>
                    <Form.Item label="Servicio"  className="ItemForm">
                            {getFieldDecorator('tipoServicio', {rules: [{ required: true, message: "Servicio es Requerido" }],})(
                                   <Select  placeholder="Tipo Servicio" >                            
                                   {this.props.combos.tipoServicio.map(registro=> <Option  key={"S"+registro.codigo} value={registro.codigo}>{registro.codigo+"-"+registro.descripcion} </Option> )}
                                </Select>
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
                    <Col span={24}>
                         
                         { this.props.combos.cantidadNumeracion>0 ? <div></div> :  <p style={{color:"#f5222d"}}>La cantidad de numeros a consultar debe estar entre 1-100</p> }                    </Col>
                    
              </Row>               
                         
                <Form.Item>
                     <ButtonGroup>
                   
                     <Button type="primary" icon="save" htmlType="submit" >
                        Registrar
                        </Button>

                      

                     </ButtonGroup>
                              
                </Form.Item>
            </Form>               
        </Card>
       );
   }

       
};

export default Form.create({ name: 'form_consulta_previa' })(FomularioSolicitud);