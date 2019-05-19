import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; .
import moment from 'moment';
import store from '../../store';
import {setCrearCliente,setActualizarCliente} from "../../action/ActionCliente";
import { Button, Modal,Form, Input, Select,Row,Col,DatePicker} from 'antd';
const Option = Select.Option;

class  RegistroCliente  extends Component{



     

    static propTypes ={
        combos:PropTypes.object.isRequired,
        icon:PropTypes.string.isRequired,
        size:PropTypes.string.isRequired,
        titulo:PropTypes.string.isRequired,
        btnTxt:PropTypes.string.isRequired,
        cliente:PropTypes.object.isRequired
    }

    state = {
        loading: false,
        visible: false,
    }
    

   


    showModal = () => {
        this.setState({
          visible: true,
        });
        if(!this.props.cliente.hasOwnProperty('idCliente')) this.props.form.resetFields();
      
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
            
                
              
                  let registro=values;  
                   console.log('Received values of form: ', values);
                   if(values.fechaActivacion!==null)    registro.fechaActivacion=values.fechaActivacion.format("YYYY-MM-DD") ;  
                   else  delete registro["fechaActivacion"];    
                   if(values.fechaTerminoContratoEquipo!==null)    registro.fechaTerminoContratoEquipo=values.fechaTerminoContratoEquipo.format("YYYY-MM-DD") ;
                   else delete registro["fechaTerminoContratoEquipo"];
                   if(values.fechaEmisionFactura!==null)    registro.fechaEmisionFactura=values.fechaEmisionFactura.format("YYYY-MM-DD") ;
                   else delete registro["fechaEmisionFactura"];
                   if(values.fechaVencimientoUltimaFactura!==null)    registro.fechaVencimientoUltimaFactura=values.fechaVencimientoUltimaFactura.format("YYYY-MM-DD") ;
                   else delete registro["fechaVencimientoUltimaFactura"];
                   if(!this.props.cliente.hasOwnProperty('idCliente')) {
                     console.log("Crear ",this.props.cliente);
                       store.dispatch(setCrearCliente(registro));
                   }else {
                    console.log("editar ",this.props.cliente);
                    store.dispatch(setActualizarCliente(registro,this.props.cliente.idCliente)); 
                  }
                   
                  
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
              <Button type="primary" ghost size={this.props.size} icon={this.props.icon}  onClick={this.showModal}>
                      {this.props.btnTxt}
              </Button>
            <Modal width={720}
              visible={visible}
              title=  {this.props.titulo}
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
                     <Col  span={10} >
                            <Form.Item label="Nombre Contacto"  className="ItemForm">
                                {getFieldDecorator('cliente', {initialValue:this.props.cliente.cliente,rules: [{ required: true, message: "Cliente es requerido" }]})(
                                    <Input  type="text" placeholder="Cliente" />
                                )}
                            </Form.Item>
                     
                     </Col>
                     <Col  span={7} >
                    
                         <Form.Item label="Tipo Documento" className="ItemForm">
                            {getFieldDecorator('tipoDocumento', {initialValue:this.props.cliente.tipoDocumento,
                            rules: [{ required: true, message: "Tipo Documento es Requerido" },
                                
                        ],
                            })(
                                <Select  placeholder="Tipo Documento" >                            
                                   {this.props.combos.tipoDocumento.map(registro=> <Option  key={"TD"+registro.codigo} value={registro.codigo}>{registro.codigo+"-"+registro.descripcion} </Option> )}
                                </Select>
                            )}
                            </Form.Item>
                    
                     </Col>
                     <Col  span={7} >
                          <Form.Item label="Documento"  className="ItemForm">
                            {getFieldDecorator('docIdentidad', {initialValue:this.props.cliente.docIdentidad, rules: [{ required: true, message: "Documento es Requerido" }],})(
                                <Input  type="text" placeholder="Documento" />
                            )}
                           </Form.Item>
                     </Col>
                     <Col  span={8} >
                           <Form.Item label="Numero"  className="ItemForm">
                            {getFieldDecorator('numero', {initialValue:this.props.cliente.numero, rules: [{ required: true, message: "Nuemero es Requerido" }],})(
                                <Input  type="text" placeholder="numero" />
                            )}
                          </Form.Item>
                     </Col>
                     <Col  span={8} >
                            <Form.Item label="Servicio"  className="ItemForm">
                               {getFieldDecorator('tipoServicio', {initialValue:this.props.cliente.tipoServicio,rules: [{ required: true, message: "Servicio es Requerido" }],})(
                                   <Select  placeholder="Tipo Servicio" >                            
                                   {this.props.combos.tipoServicio.map(registro=> <Option  key={"S"+registro.codigo} value={registro.codigo}>{registro.codigo+"-"+registro.descripcion} </Option> )}
                                </Select>
                            )}
                            </Form.Item>
                     </Col>
                     <Col  span={8} >
                               <Form.Item label="Modalidad" className="ItemForm" >
                                {
                                        getFieldDecorator("modalidad",{ initialValue:this.props.cliente.modalidad})(
                                            <Select placeholder="Modalidad"   >
                                                    {this.props.combos.modalidad.map(item=><Option key={"M"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                                            </Select> 
                                        )

                                }
                                </Form.Item>
                     </Col>
                     <Col  span={8}  >
                               <Form.Item label="Estado Servicio" className="ItemForm" > 
                                {                                        getFieldDecorator("estadoServicio",{  initialValue:this.props.cliente.estadoServicio , rules: [{ required: true, message: "Estado servicio  es Requerido" }]})(
                                            <Select placeholder="Estado Servicio"   >
                                                    {this.props.combos.estadoServicio.map(item=><Option key={"M"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                                            </Select> 
                                        )

                                }
                                </Form.Item>
                     </Col>
                     <Col  span={8}  >
                               <Form.Item label="Fecha Activacion" className="ItemForm" > 
                                {
                                        getFieldDecorator("fechaActivacion", {initialValue: this.props.cliente.fechaActivacion ? moment(this.props.cliente.fechaActivacion) : null,rules: [{ required: true, message: "Fecha de Activacion es Requerido" }],})(
                                            <DatePicker
                                    
                                      placeholder="Fecha Activacion"
                                    
                                    />
                                        )

                                }
                                </Form.Item>
                     </Col>
                     <Col  span={8}  >
                         <Form.Item label="Fecha Termino Equipo" className="ItemForm" > 
                                {
                                        getFieldDecorator("fechaTerminoContratoEquipo", {initialValue:this.props.cliente.fechaTerminoContratoEquipo ? moment(this.props.cliente.fechaTerminoContratoEquipo):null,})(
                                            <DatePicker
                                    
                                      placeholder="Fecha Equipo"
                                    
                                    />
                                        )

                                }
                        </Form.Item>
                     </Col>
                     <Col  span={8} >
                      <Form.Item label="Factura"  className="ItemForm">
                            {getFieldDecorator('nroComprobante', { initialValue:this.props.cliente.factura, rules: [{ required: true, message: "Factura es Requerido" }],})(
                                <Input  type="text" placeholder="Factura" />
                            )}
                      </Form.Item>
                     </Col>
                     <Col  span={8} >
                      <Form.Item label="Importe"  className="ItemForm">
                            {getFieldDecorator('montoDeuda', {initialValue:this.props.cliente.montoDeuda, rules: [{ required: true, message: "Importe es Requerido" }],})(
                                <Input  type="number" placeholder="Importe" />
                            )}
                      </Form.Item>
                     </Col>
                     <Col  span={8} >
                      <Form.Item label="Moneda"  className="ItemForm">
                            {getFieldDecorator('moneda', { initialValue:this.props.cliente.moneda ,rules: [{ required: true, message: "Moneda es Requerido" }],})(
                                  <Select placeholder="Estado Servicio"   >
                                  {this.props.combos.moneda.map(item=><Option key={"MO"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                          </Select> 
                            )}
                      </Form.Item>
                     </Col>
                     <Col  span={8}  >
                               <Form.Item label="Fecha Emision" className="ItemForm" > 
                                {
                                        getFieldDecorator("fechaEmisionFactura", {initialValue:this.props.cliente.fechaEmisionFactura ? moment(this.props.cliente.fechaEmisionFactura) : null,rules: [{ required: true, message: "Fecha de Activacion es Requerido" }],})(
                                            <DatePicker
                                    
                                      placeholder="Fecha Emision"
                                    
                                    />
                                        )

                                }
                                </Form.Item>
                     </Col>
                     <Col  span={8}  >
                               <Form.Item label="Fecha Vencimiento" className="ItemForm" > 
                                {
                                        getFieldDecorator("fechaVencimientoUltimaFactura", {initialValue:this.props.cliente.fechaVencimientoUltimaFactura ? moment(this.props.cliente.fechaVencimientoUltimaFactura):null,rules: [{ required: true, message: "Fecha de Activacion es Requerido" }],})(
                                            <DatePicker
                                    
                                      placeholder="Fecha Emision"
                                    
                                    />
                                        )

                                }
                                </Form.Item>
                     </Col>
                     <Col  span={8} >
                          <Form.Item label="Estado Factura"  className="ItemForm">
                                   {getFieldDecorator('estadoFactura', {initialValue:this.props.cliente.estadoFactura , rules: [{ required: true, message: "Estado Factura es Requerido" }],})(
                                  <Select placeholder="Estado Factura"   >
                                        {this.props.combos.estadoFactura.map(item=><Option key={"EF"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                                  </Select> 
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

 export  default Form.create({ name: 'form_cliente' })(RegistroCliente);