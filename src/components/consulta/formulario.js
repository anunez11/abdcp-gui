import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; 
import { Card, Form, Icon, Input, Button, Checkbox,Select} from 'antd';
const Option = Select.Option;

class  FomularioConsulta extends Component{
    static propTypes ={
        combos:PropTypes.object.isRequired
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
          {getFieldDecorator('cedente', {
           rules: [{ required: true, message: "Cedente es Requerido" },
            
       ],
          })(
            <Select 
                showSearch          
                placeholder="Cedente"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >  
           
            {this.props.combos.cedente.map(registro=> <Option key={"CD_"+ registro.codigo} value={registro.codigo}>{registro.codigo+"-"+registro.descripcion} </Option> )}
            </Select>
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