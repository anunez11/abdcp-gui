import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; 
import { Row, Col,Card,Pagination,Icon,Tooltip} from 'antd';

class  ListadoRetorno extends Component{
    static propTypes ={
        registros:PropTypes.object.isRequired
      }
   

   render(){

       
  
      const datos=this.props.registros.data;
       console.log("resultado de solicitudes ",datos);
       return (
           <div>
                <Row  gutter={16}>
                {datos.map(item => <Col  key={"C"+item.id} span={6}  style={{ marginTop: 16 }}>
                        <Card key={item.id}   title={item.fecha}  >
                          <Tooltip title= {item.cedente} >  <div className="textoLineal"><b>Cedente :</b>  {item.cedente} </div> </Tooltip>
                          
                          <Tooltip title= {item.nombre} > <div className="textoLineal"><b>Contacto :</b> {item.nombre}  </div> </Tooltip>
                         <div className="textoLineal"><b>Numero :</b> {item.numero} </div> 
                         <div className="textoLineal"><b>Fecha Retorno :</b> {item.fechaEjecucionRetorno} </div> 
                         <div className="textoLineal"><b>Motivo :</b> {item.motivoRetorno} </div> 
                          <Tooltip title= {"Correo :"+ item.correo +" Telefono :"+item.telefono } >  <div className="textoLineal"><b><Icon type="mail" /></b> {item.correo}  <b><Icon type="phone" /></b> {item.telefono}    </div> </Tooltip>                           
                           <div className="textoLineal"><b>Descripcion :</b>{item.descripcion} </div>                             
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

export default ListadoRetorno;