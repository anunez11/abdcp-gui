import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {getListaAcreditacion} from "../../action/ActionAcreditacion";
import {setItemSeleccionado} from "../../action/ActionLista";
import store from "../../store";

import EnviarMensaje from "./enviarAcreditacion";

import { Row, Col ,Button, Form, Input } from 'antd';


class  Busqueda extends Component{
   
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
            let where ={}; 
            if(rango!=="") {
                let numeros=rango.split("-");
                console.log(numeros);
                if(numeros.length>1) where.numero_between=[numeros[0],numeros[1]]; 
                else where.numero_llike=numeros[0];
            } 
            store.dispatch(getListaAcreditacion({where:where}));
      }


     render(){
      const { getFieldDecorator } = this.props.form;
      const hablitidado=this.props.datosBusqueda.length>0 ? false :true ;
       return (
           <Form onSubmit={this.handleSubmit} >
             <Row gutter={8}>
             
                 <Col span={4} offset={15}>
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
                            <EnviarMensaje itemSeleccionado={this.props.datosBusqueda}    disabled={hablitidado} />
                      </Button.Group>       
                 </Form.Item>
                 </Col>
            
             </Row>
             </Form>
       );
   }

       
}
export default  Form.create({ name: 'horizontal_programacion' })(Busqueda);