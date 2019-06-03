import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Layout } from 'antd';  
import Busqueda  from "./busqueda";
import ListadoConsulta from "./listado";

import {connect} from "react-redux";
import moment from 'moment';
import {getListaSolicitud} from "../../action/ActionSolicitud";
import {getListaCedente,getListaServicio} from "../../action/ActionLista";
import store from "../../store";


const { Header, Content, Footer  } = Layout;
class  Solicitud extends Component{
    
    constructor(){
        super();
        
        store.dispatch(getListaCedente());
        store.dispatch(getListaServicio());
        store.dispatch(getListaSolicitud({page:1,limit:10,where:{codigo:"SP",fechaCreacion_betweendate:[moment().startOf('month').format("YYYY-MM-DD"),moment().endOf('month').format("YYYY-MM-DD")]}}));     

      }

    static propTypes ={
        titulo:PropTypes.string.isRequired
      }
    render(){

        console.log("registros index",this.props.registros); 
        return (
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} >  <h1  className="tituloEncabezado" >{this.props.titulo}</h1> </Header>
              <Content style={{ margin: '0 16px' }}>
               
                <div style={{margin: '16px 0' , padding: 24, background: '#fff', minHeight: 360 }}>
                    <Busqueda  datosBusqueda={this.props.busqueda} />   
                    <ListadoConsulta registros={this.props.registros}    />
                 
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
      registros: state.solicitud,
      busqueda: {cedente:state.cedente,tipoServicio:state.tipoServicio }
      
    }
  } 
export default  connect(    mapStateToProps  )(Solicitud);
