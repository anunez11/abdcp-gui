import React, { Component } from 'react';
import PropTypes from 'prop-types';
import variables from "../../variable";
import store from '../../store';
import {setReenviarListaAcreditacionEnviado} from "../../action/ActionAcreditacion";
import { Button, Modal,Form, DatePicker, Row,Col,Input,Select,Upload,Icon} from 'antd';


class ReEnviarMensaje  extends Component{

    static propTypes ={
       
        disabled:PropTypes.bool.isRequired,
        itemSeleccionado:PropTypes.array.isRequired
       
    }

    state = {
        loading: false,
        visible: false,
    }

    normFile = e => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    };
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
                     registro.ids=this.props.itemSeleccionado.map(item=>item.idAcreditacionPago);
                     registro.acreditacion={};
                     registro.acreditacion.esEnviado=true;                     
                     registro.acreditacion.entidadPago=this.props.form.getFieldValue("entidadPago");
                     registro.acreditacion.numeroTrasaccion=this.props.form.getFieldValue("numeroTrasaccion");
                     registro.acreditacion.moneda=this.props.form.getFieldValue("moneda");
                     registro.acreditacion.monto=this.props.form.getFieldValue("monto");
                     registro.acreditacion.fechaPago=this.props.form.getFieldValue("fechaPago").format("YYYY-MM-DD HH:mm");
                  

                     store.dispatch(setReenviarListaAcreditacionEnviado(registro));
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

        const header={ids:this.props.itemSeleccionado.map(item=>item.idAcreditacionPago).join(",")}
           return (


            <span>
              <Button type="primary" ghost  disabled={this.props.disabled} icon="mail"  onClick={this.showModal} > Enviar Mensaje
                </Button>
                
            <Modal width={450}
              visible={visible}
              title="ReEnviar Mensaje Acreditacion de Pago de Deuda"
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
                               <Form.Item label="Entidad Bancaria" className="ItemForm" > 
                                {
                                        getFieldDecorator("entidadPago",{rules: [{ required: true, message: "La Entidad es requerida" }] })(

                                          <Input placeholder="Entidad Bancaria" />
                                            
                                        )

                                }
                                </Form.Item>
                     </Col>
                     <Col  span={24}  >
                               <Form.Item label="Nro Transaccion" className="ItemForm" > 
                                {
                                        getFieldDecorator("numeroTrasaccion",{rules: [{ required: true, message: "Nro Transaccion es requerida" }] })(

                                          <Input placeholder="Nro Transaccion" />
                                            
                                        )

                                }
                                </Form.Item>
                     </Col>
                     <Col  span={12}  >
                               <Form.Item label="Moneda" className="ItemForm" > 
                                {
                                        getFieldDecorator("moneda",{rules: [{ required: true, message: "Moneda es requerida" }] })(
                                                     <Select                                                                                 
                                                            placeholder="Moneda"
                                                        >
                                                            <Select.Option  value="01">Soles</Select.Option>
                                                            <Select.Option value="02">Dolares</Select.Option>
                                                        </Select> 
                                                                                
                                        )

                                }
                                </Form.Item>
                     </Col>
                     <Col  span={12}  >
                               <Form.Item label="Monto" className="ItemForm" > 
                                {
                                        getFieldDecorator("monto",{rules: [{ required: true, message: "Monto es requerido" }] })(

                                          <Input placeholder="Monto" type="number" />
                                            
                                        )

                                }
                                </Form.Item>
                     </Col>

                     <Col  span={24}  >
                     <Form.Item label="Factura/Boleta" className="ItemForm" >
                              {getFieldDecorator('upload', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,rules: [{ required: true, message: "Factura/Boleta es requerido" }]
                              })(
                                <Upload name="archivo" action={variables.apiBase+"acreditacion/archivo/foto.jpg"}    listType="picture"   headers={header} >
                                  <Button>
                                    <Icon type="upload" /> Click para Subir archivo
                                  </Button>
                                </Upload>,
                              )}
                            </Form.Item>
                     </Col>



                     <Col  span={24}  >
                               <Form.Item label="Fecha de Pago" className="ItemForm" > 
                                {
                                        getFieldDecorator("fechaPago",{rules: [{ required: true, message: "La Fecha es requerida" }] })(

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

 export  default Form.create({ name: 'form_programacion' })(ReEnviarMensaje);