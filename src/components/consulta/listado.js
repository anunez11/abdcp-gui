import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
import {Link} from "react-router-dom"; 
import { Row, Col,Card,Pagination,Badge,Icon,Tooltip} from 'antd';

class  ListadoConsulta extends Component{
    static propTypes ={
        registros:PropTypes.object.isRequired
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

       
  
      const datos=this.props.registros.data;
       console.log("resultado de solicitudes ",datos);
       return (
           <div>
                <Row  gutter={16}>
                {datos.map(item => <Col  key={"C"+item.id} span={6}  style={{ marginTop: 16 }}>
                        <Card key={item.id}   title={item.fecha}         
                                                                         extra={<Badge count={"Numero "+item.servicio+" "+item.cantidadNumero} style={{ backgroundColor: '#52c41a' }} />} >
                          <Tooltip title= {item.cedente} >  <div className="textoLineal"><b>Cedente :</b>  {item.cedente} </div> </Tooltip>
                          
                          <Tooltip title= {item.nombre} > <div className="textoLineal"><b>Contacto :</b> {item.nombre}  </div> </Tooltip>
                         <div className="textoLineal"><b>Documento :</b> {item.documento} </div> 
                          <Tooltip title= {"Correo :"+ item.correo +" Telefono :"+item.telefono } >  <div className="textoLineal"><b><Icon type="mail" /></b> {item.correo}  <b><Icon type="phone" /></b> {item.telefono}    </div> </Tooltip>
                           
                           <div className="textoLineal"><b>Descripcion :</b>{item.descripcion} </div>   
                           <Link  to={"/consulta/"+item.id+"/detalle"}>Ver Detalle <Icon type="plus-circle" /> </Link>
                           { this.renderTipoMsg(item.codigoMensaje,item.response) }   
                        </Card>
                    </Col>  )}
              
                </Row>
                <Row>
                    <Pagination style={{ marginTop: 16 }} size="small" total={datos.length} />
                </Row>
             </div>
       );
   }

       
};

export default ListadoConsulta;