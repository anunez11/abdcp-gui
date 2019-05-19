import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Layout } from 'antd';  
import Busqueda  from "./busqueda";
import ListadoCliente from "./listado";
import moment from "moment";
import {connect} from "react-redux";

import {getListaCliente} from "../../action/ActionCliente";
import {getListaMoneda,getListaTipoDocumento,getListaModalidad,getListaServicio,getListaEstadoServicio,getListaEstadoFactura} from "../../action/ActionLista";
import store from "../../store";


const { Header, Content, Footer  } = Layout;
class  Cliente extends Component{
    
    constructor(){
             super();
             store.dispatch(getListaServicio());
             store.dispatch(getListaMoneda());
             store.dispatch(getListaTipoDocumento());
             store.dispatch(getListaModalidad());
             store.dispatch(getListaEstadoServicio());
             store.dispatch(getListaEstadoFactura());
             store.dispatch(getListaModalidad());
             store.dispatch(getListaCliente({where:{fechaActivacion_betweendate:[moment().subtract(3,'year').format("YYYY-MM-DD"),moment().format("YYYY-MM-DD")]}}));     


     }

    static propTypes ={
        titulo:PropTypes.string.isRequired
    }

    render(){

                return (
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} >  <h1  className="tituloEncabezado" >{this.props.titulo}</h1> </Header>
                        <Content style={{ margin: '0 16px' }}>
                        
                            <div style={{margin: '16px 0' , padding: 24, background: '#fff', minHeight: 360 }}>
                                <Busqueda  datosBusqueda={this.props.combos} />   
                                <ListadoCliente registros={this.props.registros}  combos={this.props.combos} />                            
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            GTD Portabilidad ©2019 Created by GTD
                        </Footer>
                    </Layout>
                );
    }

}


const mapStateToProps = state => {
    return {
      
      combos: {moneda:state.moneda,tipoDocumento:state.tipoDocumento,tipoServicio:state.tipoServicio,modalidad:state.modalidad,estadoServicio:state.estadoServicio, estadoFactura:state.estadoFactura,itemSeleccionado:state.itemSeleccionado  },
      registros:state.cliente 
    }
  } 
export default  connect(    mapStateToProps  )(Cliente);
