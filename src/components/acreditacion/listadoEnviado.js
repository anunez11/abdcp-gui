import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; 
import {Table} from 'antd';
import DetalleImagen from "./detalleImagen";


import {setItemSeleccionadoEnviado} from "../../action/ActionLista";
import store from "../../store";
//import variables from "../../variable";
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      store.dispatch(setItemSeleccionadoEnviado(selectedRows));
    }
  };
class  ListadoEnviadoAcreditacion extends Component{
    static propTypes ={
        registros:PropTypes.array.isRequired
        
      }
   


   render(){
    const columns = [
    
      {
        title: 'Fecha Envio',
        dataIndex: 'fechaEnvio', 
        key:"C_1"
       
        
        
      }, {
        title: 'Numero',
        dataIndex: 'numero',       
        key:"C_4"
       
      }, {
        title: 'Fecha Limite Envio',
        dataIndex: 'fechaLimiteEnvio',
       
        key:"C_6"
       
      },{
        title: 'Id Mensaje',
        dataIndex: 'idMensaje',       
        key:"C_7"
       
      },{
        title: 'Id Proceso',
        dataIndex: 'idProceso',       
        key:"C_8"
       
      },{
        title: 'Entidad',
        dataIndex: 'entidadPago',       
        key:"C_9"
       
      },{
        title: 'Fecha Pago',
        dataIndex: 'fechaPago',       
        key:"C_10"
       
      },{
        title: 'Monto S/.',
        dataIndex: 'monto',       
        key:"C_11"
       
      },{
        title: 'Nro Transaccion',
        dataIndex: 'numeroTrasaccion',       
        key:"C_12"
       
      },{
        title: 'Imagen',        
        key:"C_13",
        render: (value, row, index) => <DetalleImagen detalle={row}  />
      }
    
    ]; 
       
  
     const datos=this.props.registros;
    //   console.log("resultado de solicitudes ",datos);
       return (
         
            
                  <Table   rowKey={record => record.idAcreditacionPago}  rowSelection={rowSelection} columns={columns} dataSource={datos}  size="small"  />    
             
       );
   }

       
};

export default ListadoEnviadoAcreditacion;