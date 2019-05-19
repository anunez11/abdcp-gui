import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
import moment from 'moment';
import {getListaCliente,eliminarCliente} from "../../action/ActionCliente";
import {setItemSeleccionado} from "../../action/ActionLista";
import store from "../../store";
import RegistroCliente from "./registro";
import CambiarEstado from "./cambiarEstado";

import { Row, Col ,Select,Button,DatePicker, Form, Input,Modal } from 'antd';
const {  RangePicker } = DatePicker;
const Option = Select.Option;
class  Busqueda extends Component{
   
  constructor(){
    super();
    store.dispatch(setItemSeleccionado());
}
     


    static propTypes ={
        datosBusqueda:PropTypes.object.isRequired
      }
   
      handleSubmit = (e) => {
        e.preventDefault();
   
   
      const estadoServicio=this.props.form.getFieldValue("estadoServicio");
      const estadoFactura=this.props.form.getFieldValue("estadoFactura");
      const cliente=this.props.form.getFieldValue("cliente");
      const fechaActivacion=this.props.form.getFieldValue("fechaActivacion");
      const rango=this.props.form.getFieldValue("rango");

      let where ={};
    
      if(estadoServicio!=="") where.estadoServicio=estadoServicio;
      if(estadoFactura!=="") where.estadoFactura=estadoFactura;
      if(cliente!=="") where.cliente_like=cliente;
      if(rango!=="") {
        let numeros=rango.split("-");
        console.log(numeros);
         if(numeros.length>1) where.numero_between=[numeros[0],numeros[1]]; 
         else where.numero_llike=numeros[0];
      }

      if(fechaActivacion!==undefined){
        if(fechaActivacion.length>0) {
            where.fechaActivacion_betweendate=[fechaActivacion[0].format("YYYY-MM-DD"),fechaActivacion[1].format("YYYY-MM-DD")] ; 

        }
      }      
    
      store.dispatch(getListaCliente({where:where}));    
        
      }

      confirm(itemSeleccionado) {
        Modal.confirm({
          title: ' ¿ Desea Eliminar los Registros Seleccionados ?',
          content: '',
          okText: 'Si',
          cancelText: 'No',
          onOk:()=>{
           console.log(itemSeleccionado);
            store.dispatch(eliminarCliente(itemSeleccionado));
          }
        });
      }

   render(){
      const { getFieldDecorator } = this.props.form;
      const hablitidado=this.props.datosBusqueda.itemSeleccionado.length>0 ? false :true ;
       return (
           <Form onSubmit={this.handleSubmit} >
             <Row gutter={8}>
                
              
                 <Col span={4}>
                 <Form.Item>
                     { getFieldDecorator('estadoFactura', {initialValue:""})(
                        <Select
                            placeholder="Estado Factura"
                           
                        >
                            <Option value="">Todos los Estados </Option>    
                            {this.props.datosBusqueda.estadoFactura.map(item=><Option key={"EF"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                        </Select>
                     )}

                       </Form.Item> 

                 </Col>
                 <Col span={4}>
                 <Form.Item>
                     { getFieldDecorator('estadoServicio', {initialValue:""})(
                        <Select
                            placeholder="Estado Servicio"
                         
                        >
                             <Option value="">Todos los Estados </Option>   
                            {this.props.datosBusqueda.estadoServicio.map(item=><Option key={"ES"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                        </Select>
                     )}

                       </Form.Item> 

                 </Col>
                 <Col span={4}>
                 <Form.Item>
                     { getFieldDecorator('cliente', {initialValue:""})(
                       <Input placeholder="Cliente" />
                     )}

                       </Form.Item> 

                 </Col>

                 <Col span={3}>
                 <Form.Item>
                     { getFieldDecorator('rango', {initialValue:""})(
                       <Input placeholder="Rango Ini - Rango Fin" />
                     )}

                       </Form.Item> 

                 </Col>
                 <Col span={5}>
                 { getFieldDecorator('fechaActivacion', {initialValue:[moment().subtract(3,'year'),moment()]})(
                      <RangePicker format="YYYY-MM-DD"  style={{marginTop:5}} /> )}
                 </Col>
                 <Col span={2}>
                 <Form.Item>

                    <Button.Group >
                            <Button ghost icon="search" htmlType="submit" type="primary" />
                            <Button ghost icon="delete" disabled={hablitidado} htmlType="button" type="danger" onClick={()=>this.confirm(this.props.datosBusqueda.itemSeleccionado)} />
                           
                            <CambiarEstado itemSeleccionado={this.props.datosBusqueda.itemSeleccionado} disabled={hablitidado} data={this.props.datosBusqueda} />
                            
                           
                      </Button.Group>       
                 </Form.Item>
                 </Col>
                 <Col span={2}  style={{marginTop:5}} >
                         <RegistroCliente  cliente={{}} combos={this.props.datosBusqueda}  icon="plus-circle" titulo="Registrar Cliente" size="default" btnTxt="Agregar" />
                 </Col>
             </Row>
             </Form>
       );
   }

       
}
export default  Form.create({ name: 'horizontal_busqueda_cliente' })(Busqueda);