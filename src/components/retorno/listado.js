import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; 
import { Table,Icon,Tooltip,Badge} from 'antd';

class  ListadoRetorno extends Component{
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

       
    const columns = [
     
      {
        title: 'Fecha',
        dataIndex: 'fecha',   
        
        key:"C_2"
       
        
        
      },{
        title: 'Request',
        dataIndex: '',   
        
        key:"C_3",
        render :(value, row, index) =>  this.renderTipoMsg(row.codigoMensaje,row.response)
       
        
        
      },   {
        title: 'Cedente',
        dataIndex: 'cedente',   
        
        key:"C_4"
       
        
        
      },   {
        title: 'Id Mensaje',
        dataIndex: 'mensaje',   
        
        key:"C_5"
       
        
        
      }, {
        title: 'Id Proceso',
        dataIndex: 'proceso',   
        
        key:"C_6"
       
        
        
      }, {
        title: 'Motivo',
        dataIndex: 'motivoRetorno',   
        
        key:"C_8"
       
        
        
      },{
        title: 'Numero',
        dataIndex: 'numero',   
        
        key:"C_9"
       
        
        
      }, {
        title: 'Contacto',
        dataIndex: '',   
        
        key:"C_7",
        render :(value, row, index) => <span>{row.nombre} <Tooltip title= {"Correo :"+ row.correo +" Telefono :"+row.telefono } >  <div className="textoLineal"><b><Icon type="mail" /></b> {row.correo}  <b><Icon type="phone" /></b> {row.telefono}    </div> </Tooltip> </span>
       
        
        
      }
    ]; 
       
  
      const datos=this.props.registros;
       console.log("resultado de solicitudes ",this.props);
       return (
            <Table   rowKey={record => record.id}   columns={columns} dataSource={datos}  size="small"  pagination={{ defaultPageSize: 10, showSizeChanger: true,showTotal:(total,range)=>' Registros  '+total, pageSizeOptions: ['10', '20', '30']}} />    
       );
   }

       
};

export default ListadoRetorno;