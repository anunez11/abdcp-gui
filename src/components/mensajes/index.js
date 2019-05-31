import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Layout } from 'antd';  
//import Busqueda  from "./busqueda";
import ListadoMensaje from "./listado";
import moment from "moment";
import {connect} from "react-redux";

import {getListaMensaje} from "../../action/ActionMensaje";
//import {getListaMoneda,getListaTipoDocumento,getListaModalidad,getListaServicio,getListaEstadoServicio,getListaEstadoFactura} from "../../action/ActionLista";
import {getListaTipoMensaje} from "../../action/ActionLista"
import store from "../../store";
import Busqueda from "./busqueda";

const { Header, Content, Footer  } = Layout;
class  Mensaje extends Component{
    
    constructor(){
             super();
         //    store.dispatch(getListaServicio());
        //     store.dispatch(getListaMoneda());
//store.dispatch(getListaTipoDocumento());
         //    store.dispatch(getListaModalidad());
         ///    store.dispatch(getListaEstadoServicio());
      //       store.dispatch(getListaEstadoFactura());
         ///    store.dispatch(getListaModalidad());
         store.dispatch(getListaTipoMensaje());
             store.dispatch(getListaMensaje({where:{fechaEnvio_betweendate:[moment().subtract(3,'year').format("YYYY-MM-DD"),moment().format("YYYY-MM-DD")]}}));     


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
                               
                               <ListadoMensaje  registros={this.props.registros}/>
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
      
      combos: {tipoMensaje:state.tipoMensaje},
      registros:state.mensaje 
    }
  } 
export default  connect(    mapStateToProps  )(Mensaje);
