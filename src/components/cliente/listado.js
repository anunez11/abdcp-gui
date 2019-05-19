import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; 
import {Table} from 'antd';
import RegistroCliente from "./registro";

import {setItemSeleccionado} from "../../action/ActionLista";
import store from "../../store";

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      store.dispatch(setItemSeleccionado(selectedRows));
    }
  };
class  ListadoCliente extends Component{
    static propTypes ={
        registros:PropTypes.array.isRequired,
        combos:PropTypes.object.isRequired
      }
   


   render(){
    const columns = [
      {
        title: 'Accion', dataIndex: 'idCliente', key: 'C_0', render: (value, row, index) => <RegistroCliente combos={this.props.combos} cliente={row} icon="edit" titulo="Actualizar Cliente" size="small" btnTxt=""    /> 
      },
      {
        title: 'Numero',
        dataIndex: 'numero',   
        width:100,
        key:"C_1"
       
        
        
      }, {
        title: 'Estado Servico',
        dataIndex: 'estadoServicioDesc',
        width:100,
        key:"C_4"
       
      }, {
        title: 'Fecha Activacion',
        dataIndex: 'fechaActivacion',
        width:100,
        key:"C_5"
        
      }, {
        title: 'Documento',
        dataIndex: 'docIdentidad',
        width:100,
        key:"C_6"
       
      }, {
        title: 'Cliente',
        dataIndex: 'cliente',
        width:300,
        key:"C_7"
       
      }, {
        title: 'Factura',
        dataIndex: 'factura',
        width:100,
        key:"C_8"
        
      }, {
        title: 'Fecha Emision',
        dataIndex: 'fechaEmisionFactura',
        width:100,
        key:"C_9"
       
      }, {
        title: 'Fecha Vencimiento',
        dataIndex: 'fechaVencimientoUltimaFactura',
        width:100,
        key:"C_10"
      }, {
        title: 'Importe',
        dataIndex: 'montoDeuda',
        width:100,
        key:"C_12"
      }, {
        title: 'Esatado Factura',
        dataIndex: 'estadoFacturaDesc',
        width:100,
        key:"C_13"
      }
    
    ]; 
       
  
     const datos=this.props.registros;
    //   console.log("resultado de solicitudes ",datos);
       return (
         
            
                  <Table   rowKey={record => record.idCliente}  rowSelection={rowSelection} columns={columns} dataSource={datos}  size="small"  />    
             
       );
   }

       
};

export default ListadoCliente;