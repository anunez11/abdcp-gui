import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; 
import { Card, Form, Icon, Input, Button, Checkbox} from 'antd';

class  FomularioConsulta extends Component{
    static propTypes ={
        combos:PropTypes.object.isRequired
      }

      mayorRangoFinal = (rule, value, callback) => {
        const { getFieldValue } = this.props.form;
        const error='El rango Final debe ser mayor igual que el rango inicial';
        if (value!=="" ) { 

            const ini=parseInt(getFieldValue("rangoIni"));
            const fin=parseInt(getFieldValue("rangoFin"));
            if(ini>parseInt(fin)) callback(error);

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

       
    const { getFieldDecorator } = this.props.form
   
       return (
        <Card   title={"Consulta Previa "}          >
            <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
           rules: [{ required: true, message: "Rango Inicial es Requerido" },
            
       ],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
        
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        
        </Form.Item>
      </Form>               
        </Card>
       );
   }

       
};

export default Form.create({ name: 'form_consulta_previa' })(FomularioConsulta);