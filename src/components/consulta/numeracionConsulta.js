import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Col,Button,Badge} from 'antd';
import store from "../../store";
import {removeNumeracion} from "../../action/ActionSolicitud";

class  ListadoNumeracion extends Component{

    static propTypes ={
        registros:PropTypes.object.isRequired
      }
   
   
      onClickRemoveNumeracion = (numeracion)=>{
   
        store.dispatch(removeNumeracion(numeracion));     
     }

      
     onClickRemoveAllNumeracion = ()=>{
          const datosNumeracion=store.getState().numeracion;
          datosNumeracion.map(item=> store.dispatch(removeNumeracion(item)) );
      //  store.dispatch(removeNumeracion(numeracion));     
     }

   render(){
       console.log("data recividad",this.props.registros);
       return (<div> 
                 <Row>
                       <Col span={24}>  Cantidad de Numeros a Consultar  <Badge count={this.props.registros.data.length+" Numeros"} />  <Button icon="delete" ghost  type="danger"  htmlType="button" size="small"  onClick= {()=>this.onClickRemoveAllNumeracion() } > Eliminar Todos </Button></Col>
                 </Row>
                 <Row  gutter={8}>
                 {this.props.registros.data.map(item =>                 
                       <Col key={"C"+item.inicioRango} span={6} style={{ marginTop: 8 }} >                        
                               <Button icon="delete" type="danger"  htmlType="button" size="small"  onClick= {()=>this.onClickRemoveNumeracion(item) } /> {item.inicioRango}                         
                       </Col> 
                 )}
                 </Row>
              </div>);
   }



} 
export default ListadoNumeracion;  

