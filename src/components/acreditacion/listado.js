import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; 
import {Table} from 'antd';


import {setItemSeleccionado} from "../../action/ActionLista";
import store from "../../store";

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      store.dispatch(setItemSeleccionado(selectedRows));
    }
  };
class  ListadoAcreditacion extends Component{
    static propTypes ={
        registros:PropTypes.array.isRequired
        
      }
   


   render(){
    const columns = [
    
      {
        title: 'Fecha',
        dataIndex: 'fechaCreacion', 
        key:"C_1"
       
        
        
      }, {
        title: 'Numero',
        dataIndex: 'numero',       
        key:"C_4"
       
      }, {
        title: 'Fecha Limite Envio',
        dataIndex: 'fechaLimiteEnvio',
       
        key:"C_6"
       
      }
    
    ]; 
       
  
     const datos=this.props.registros;
    //   console.log("resultado de solicitudes ",datos);
       return (
         
            
                  <Table   rowKey={record => record.idAcreditacionPago}  rowSelection={rowSelection} columns={columns} dataSource={datos}  size="small"  />    
             
       );
   }

       
};

export default ListadoAcreditacion;