import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {getListaProgramacionEnviado} from "../../action/ActionProgramacion";
import {setItemSeleccionado} from "../../action/ActionLista";
import store from "../../store";

import EnviarMensajeEnviado from "./enviarProgramacion";

import { Row, Col ,Button, Form, Input,DatePicker } from 'antd';
const {  RangePicker } = DatePicker;

class  BusquedaEnviado extends Component{
   
        constructor(){
            super();
            store.dispatch(setItemSeleccionado());
        }

        static propTypes ={
            datosBusqueda:PropTypes.array.isRequired
        } 
   
        handleSubmit = (e) => {
            e.preventDefault(); 
            const rango=this.props.form.getFieldValue("rango");
            const rangoFecha=this.props.form.getFieldValue("rangoFecha");
            let where ={}; 
            if(rango!=="") {
                let numeros=rango.split("-");
                console.log(numeros);
                if(numeros.length>1) where.numero_between=[numeros[0],numeros[1]]; 
                else where.numero_llike=numeros[0];
            } 
            if(rangoFecha!==undefined){
                if(rangoFecha.length>0) {
                    where.fechaEnvio_betweendate=[rangoFecha[0].format("YYYY-MM-DD"),rangoFecha[1].format("YYYY-MM-DD")] ; 
                }
              }


            store.dispatch(getListaProgramacionEnviado({where:where}));
      }


     render(){
      const { getFieldDecorator } = this.props.form;
      const hablitidado=this.props.datosBusqueda.length>0 ? false :true ;
       return (
           <Form onSubmit={this.handleSubmit} >
             <Row gutter={8}>
             
               <Col span={5} offset={10}>
                 <Form.Item>
                 { getFieldDecorator('rangoFecha', {initialValue:[ moment().startOf('month'),moment().endOf('month')]})(
                      <RangePicker format="YYYY-MM-DD" /> )}
                      </Form.Item> 
                 </Col>
                       



                    <Col span={4} >
                 <Form.Item>
                     { getFieldDecorator('rango', {initialValue:""})(
                       <Input placeholder="Rango Ini - Rango Fin" />
                     )}

                       </Form.Item> 

                 </Col>
               
                 <Col span={5}>
                 <Form.Item>

                    <Button.Group >
                            <Button ghost icon="search" htmlType="submit" type="primary" >Buscar</Button>
                            <EnviarMensajeEnviado itemSeleccionado={this.props.datosBusqueda}    disabled={hablitidado} />
                      </Button.Group>       
                 </Form.Item>
                 </Col>
            
             </Row>
             </Form>
       );
   }

       
}
export default  Form.create({ name: 'horizontal_programacion_enviado' })(BusquedaEnviado);