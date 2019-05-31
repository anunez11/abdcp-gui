import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Col,Card,Button,Badge,Icon} from 'antd';
import store from "../../store";
import {getSolicitudId} from "../../action/ActionSolicitud";
import DetalleMensaje from "../../components/mensajes/detalle";

class  ListadoNumeracionDetalle extends Component{

    static propTypes ={
        registro:PropTypes.object.isRequired
    }

    onClickActualizar = ()=>{ 
        store.dispatch(getSolicitudId(parseInt(this.props.registro.id)));     
    }


    renderTipoMsg=(codigoMensaje,response)=>{
        console.log("codigoMes",codigoMensaje);
        if(codigoMensaje!==null && codigoMensaje!==undefined){
            if(codigoMensaje.trim()!==""){
                return  response!=="ACK"  ? <Badge count={codigoMensaje+"-"+response} style={{ backgroundColor: '#f5222d' }}   /> :  <Badge count={codigoMensaje+"-"+response} style={{ backgroundColor: '#52c41a' }}   />
            }
        }
          
           
        }

    

    render(){
       console.log("data recividad",this.props);
       return (<div> 
                
       <Card   title="Numeracion"   extra={<Button type="primary" ghost icon="reload" size="small" onClick={this.onClickActualizar}>Refrescar</Button> }>
                    <Row  gutter={8}>
                    {this.props.registro.data.map(item =>
                        <Col key={"C"+item.inicioRango} span={6} style={{ marginTop: 8 }} >                                
                                {item.mensaje!==null ? <DetalleMensaje   detalle={item.mensaje} /> :<span></span> }  
                                <Icon type="phone" />  {item.inicioRango} 
                                  {   this.renderTipoMsg(item.codigoMensaje,item.response)  }                             
                        </Col> 
                    )}
                    </Row>
                 </Card>
              </div>);
   }
} 
export default ListadoNumeracionDetalle;  

