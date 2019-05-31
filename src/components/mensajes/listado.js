import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; 
import {Table,Badge,Tooltip} from 'antd';
import DetalleMensaje from "./detalle";




class  ListadoMensaje extends Component{
    static propTypes ={
        registros:PropTypes.array.isRequired
      }
   


   render(){
    const columns = [
        {
            title: 'Accion',
            dataIndex: '', 
            key:"C_1",
            render :(value, row, index) => <DetalleMensaje   detalle={row} />
            
            
          },
      {
        title: 'Fecha',
        dataIndex: 'fechaEnvio',   
        
        key:"C_11"
       
        
        
      },   {
        title: 'Id Mensaje',
        dataIndex: 'idMensaje',   
        
        key:"C_12"
       
        
        
      }, {
        title: 'Id Proceso',
        dataIndex: 'idProceso',   
        
        key:"C_13"
       
        
        
      }, {
        title: 'Id Solicitud',
        dataIndex: 'idSolicitud',   
        
        key:"C_14"
       
        
        
      },{
        title: 'Numero',
        dataIndex: 'numero',
       
        key:"C_2"
       
      }, {
        title: 'Proceso',
        dataIndex: 'proceso',
        
        key:"C_5"
        
      }, {
        title: 'Emisor',
        dataIndex: '',
       
        key:"C_6",
        render :(value, row, index) =>  <Tooltip   title={row.emisorDesc}> {row.emisor} </Tooltip>
       
      }, {
        title: 'Destinatario',
        dataIndex: '',
        
        key:"C_7",
        render :(value, row, index) =>  <Tooltip   title={row.destinoDesc}> {row.destino} </Tooltip>
       
      }, {
        title: 'Direccion',
        dataIndex: 'direccionMensaje',
        
        key:"C_8"
        
      }, {
        title: 'Mensaje',
        dataIndex: 'codigoMensaje',
        
        key:"C_9",
        render :(value, row, index) =>  <Tooltip   title={row.categoriaMensaje}> {row.codigoMensaje} </Tooltip>
       
      }
      , {
        title: 'Response',
        dataIndex: '',
        
        key:"C_10",
        render :(value, row, index) =>  row.response==="ACK" ? <Badge count={row.response} style={{ backgroundColor: '#52c41a' }} /> :  <Tooltip   title={row.responseMsg}><Badge count={row.response} /></Tooltip>
      }
    ]; 
       
  
     const datos=this.props.registros;
  
       return (
         
            
                  <Table   rowKey={record => record.id}   columns={columns} dataSource={datos}  size="small"  pagination={{ defaultPageSize: 10, showSizeChanger: true,showTotal:(total,range)=>' Registros  '+total, pageSizeOptions: ['10', '20', '30']}} />    
             
       );
   }

       
};

export default ListadoMensaje;