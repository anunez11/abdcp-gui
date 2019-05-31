import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
import moment from 'moment';
import {getListaMensaje} from "../../action/ActionMensaje";

import store from "../../store";


import { Row, Col ,Select,Button,DatePicker, Form, Input } from 'antd';
const {  RangePicker } = DatePicker;
const Option = Select.Option;
class  Busqueda extends Component{
   

     


    static propTypes ={
        datosBusqueda:PropTypes.object.isRequired
      }
   
      handleSubmit = (e) => {
        e.preventDefault();
   
   
      const codigoMensaje=this.props.form.getFieldValue("codigoMensaje");
      const idMensaje=this.props.form.getFieldValue("idMensaje");
      const idProceso=this.props.form.getFieldValue("idProceso");
      const rango=this.props.form.getFieldValue("numero");
      const fechaCreacion=this.props.form.getFieldValue("fechaCreacion");

      let where ={};
    
      if(codigoMensaje!=="") where.codigoMensaje=codigoMensaje;
      if(idMensaje!=="") where.idMensaje=idMensaje;
      if(idProceso!=="") where.idProceso=idProceso;
      if(rango!=="") {
        let numeros=rango.split("-");
        console.log(numeros);
         if(numeros.length>1) where.numero_between=[numeros[0],numeros[1]]; 
         else where.numero_llike=numeros[0];
      }

      if(fechaCreacion!==undefined){
        if(fechaCreacion.length>0) {
            where.fechaCreacion_betweendate=[fechaCreacion[0].format("YYYY-MM-DD"),fechaCreacion[1].format("YYYY-MM-DD")] ; 

        }
      }      
    
      store.dispatch(getListaMensaje({where:where}));    
        
      }


   render(){
      const { getFieldDecorator } = this.props.form;
   
       return (
           <Form onSubmit={this.handleSubmit} >
             <Row gutter={8}>
                
              
                 <Col span={4}>
                 <Form.Item>
                     { getFieldDecorator('codigoMensaje', {initialValue:""})(
                        <Select
                            placeholder="Tipo mensaje"
                           
                        >
                            <Option value="">Todos los Tipo </Option>    
                            {this.props.datosBusqueda.tipoMensaje.map(item=><Option key={"EF"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                        </Select>
                     )}

                       </Form.Item> 

                 </Col>
                 <Col span={4}>
                 <Form.Item>
                     { getFieldDecorator('idMensaje', {initialValue:""})(
                         <Input placeholder="Id Mensaje" />
                     )}

                       </Form.Item> 

                 </Col>
                 <Col span={4}>
                 <Form.Item>
                     { getFieldDecorator('idProceso', {initialValue:""})(
                       <Input placeholder="Id Proceso" />
                     )}

                       </Form.Item> 

                 </Col>

                 <Col span={3}>
                 <Form.Item>
                     { getFieldDecorator('numero', {initialValue:""})(
                       <Input placeholder="Rango Ini - Rango Fin" />
                     )}

                       </Form.Item> 

                 </Col>
                 <Col span={5}>
                 { getFieldDecorator('fechaCreacion', {initialValue:[moment().subtract(2,'month'),moment()]})(
                      <RangePicker format="YYYY-MM-DD"  style={{marginTop:5}} /> )}
                 </Col>
                 <Col span={2}>
                 <Form.Item>

                    <Button.Group >
                            <Button ghost icon="search" htmlType="submit" type="primary" > Buscar Mensajes </Button>
                      </Button.Group>       
                 </Form.Item>
                 </Col>
                 
             </Row>
             </Form>
       );
   }

       
}
export default  Form.create({ name: 'horizontal_busqueda_cliente' })(Busqueda);