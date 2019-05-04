import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card,Form,Row,Col, Icon, Input, Button,Select} from 'antd';
const Option = Select.Option;




class  FomularioNumeracion extends Component{
    static propTypes ={
        combos:PropTypes.object.isRequired
      }
   
    
    mayorRangoFinal = (rule, value, callback) => {
                            const { getFieldValue } = this.props.form;
                            const error='El rango Final debe ser mayor igual que el rango inicial';
                            if (value!=="" ) { 

                             //   const ini=parseInt(getFieldValue("rangoIni"));
                             //   const fin=parseInt(getFieldValue("rangoFin"));
                             //   if(ini>parseInt(fin)) callback(error);

                            } else {
                                // clean error ....
                                callback();                                                         
                                return ;

                            }
                        } 

    

                        handleSubmit = (e) => {
                            e.preventDefault();
                            this.props.form.validateFields((err, values) => {
                              if (!err) {
                                console.log('Received values of form: ', values);
                              }
                            });
                          }


   render(){

 
      const {getFieldDecorator} = this.props.form;
      
  
       return (
        <Card   title={"Numeracion "} >
          <Form layout="horizontal"   onSubmit={this.handleSubmit}   >
            <Row gutter={8}>
                <Col span={6}>
                            <Form.Item
                          
                            >
                            {getFieldDecorator('rangoIni', {                               
                                rules: [{ required: true, message: "Rango Inicial es Requerido" },
                                      //  {validator:this.mayorRangoFinal} 
                                    ],
                            })(
                                <Input name="rangoIni" prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} type="number" placeholder="Rango Inicial" />
                            )}
                            </Form.Item>
                
                </Col> 
                <Col span={6}>
                            <Form.Item>
                            {getFieldDecorator('rangoFin', {
                                
                                rules: [ // {validator:this.mayorRangoFinal} ,        
                                    ],
                            })(
                                <Input  name="rangoFin" prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} type="number" placeholder="Rango Final" />
                            )}
                            </Form.Item>
                </Col> 
                <Col span={7}>
                                <Form.Item>
                                {
                                        getFieldDecorator("modalidad",{ initialValue:"02"})(
                                            <Select placeholder="Modalidad"   >
                                                    {this.props.combos.modalidad.map(item=><Option key={"M"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                                            </Select> 
                                        )

                                }
                                </Form.Item>
                </Col> 
                    <Col span={5}>
                        <Form.Item>
                            <Button
                                type="primary"
                                icon="plus-circle" 
                                htmlType="submit"                               
                            >
                            Agregar
                            </Button>                    
                        </Form.Item>
                    </Col>
            
                </Row>
      </Form>              
        </Card>
       );
   }

       
};

export default  Form.create({ name: 'horizontal_login' })(FomularioNumeracion);;
