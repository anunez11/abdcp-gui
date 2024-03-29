import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; 
import {Table} from 'antd';


import {setItemSeleccionadoEnviado} from "../../action/ActionLista";
import store from "../../store";

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      store.dispatch(setItemSeleccionadoEnviado(selectedRows));
    }
  };
class  ListadoEnviadoPortabilidad extends Component{
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
       
      },{
        title: 'Id Mensaje',
        dataIndex: 'idMensaje',       
        key:"C_7"
       
      },{
        title: 'Id Proceso',
        dataIndex: 'idProceso',       
        key:"C_8"
       
      }, {
        title: 'Fecha Limite Ejecucion',
        dataIndex: 'fechaLimiteEjecucion',
      
        key:"C_5"
        
      }, {
        title: 'Fecha Limite Envio',
        dataIndex: 'fechaLimiteEnvio',
       
        key:"C_6"
       
      }
    
    ]; 
       
  
     const datos=this.props.registros;
    //   console.log("resultado de solicitudes ",datos);
       return (
         
            
                  <Table   rowKey={record => record.idProgramacionPortabilidad}  rowSelection={rowSelection} columns={columns} dataSource={datos}  size="small"  />    
             
       );
   }

       
};

export default ListadoEnviadoPortabilidad;