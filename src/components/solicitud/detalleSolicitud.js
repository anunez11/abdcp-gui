import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; 
import { Card,Badge,Icon,Tooltip} from 'antd';

class  DetalleSolicitudPortabilidad extends Component{
    static propTypes ={
        registro:PropTypes.array.isRequired
      }
   

   render(){
       const registros =this.props.registro;
       return (
           
                   <div>
                      {registros.map(item =><Card key={item.id}   title={item.fecha}         
                                 extra={<Badge count={"Numero "+item.servicio+" "+item.cantidadNumero} style={{ backgroundColor: '#52c41a' }} />} >
                          <Tooltip title= {item.cedente} >  <div className="textoLineal"><b>Cedente :</b>  {item.cedente} </div> </Tooltip>
                          
                          <Tooltip title= {item.nombre} > <div className="textoLineal"><b>Contacto :</b> {item.nombre}  </div> </Tooltip>
                         <div className="textoLineal"><b>Documento :</b> {item.documento} </div> 
                          <Tooltip title= {"Correo :"+ item.correo +" Telefono :"+item.telefono+" Fax : "+item.fax } >  <div className="textoLineal"><b><Icon type="mail" /></b> {item.correo}  <b><Icon type="phone" /></b> {item.telefono}   <b>Fax :</b> {item.fax}    </div> </Tooltip>
                           
                           <div className="textoLineal"><b>Descripcion :</b>{item.descripcion} </div>   
                           
                        </Card>)} 
                        
                   </div>
             )}
};


export default DetalleSolicitudPortabilidad;
