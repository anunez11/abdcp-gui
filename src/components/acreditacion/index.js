import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Layout,Tabs,Divider} from 'antd';  

import Busqueda from "./busqueda";
import BusquedaEnviado from "./busquedaEnviado";
import {connect} from "react-redux";
import {getListaAcreditacion,getListaAcreditacionEnviado} from "../../action/ActionAcreditacion";
//import {getListaMoneda,getListaTipoDocumento,getListaModalidad,getListaServicio,getListaEstadoServicio,getListaEstadoFactura} from "../../action/ActionLista";
import store from "../../store";

import ListadoAcreditacion from "./listado";
import ListadoEnviadoAcreditacion from "./listadoEnviado";


const { Header, Content, Footer   } = Layout;
const TabPane = Tabs.TabPane;


class  Acreditacion extends Component{
    

    constructor(){
        super();

      store.dispatch(getListaAcreditacion({where:{esEnviado:false}}));     
      store.dispatch(getListaAcreditacionEnviado({where:{esEnviado:true}}));    

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
                          <Tabs defaultActiveKey="1t" >
                            <TabPane tab="PENDIENTES" key="1t">
                                 <Busqueda datosBusqueda={this.props.itemSeleccionado} />   
                                 <Divider />
                                 <ListadoAcreditacion registros={this.props.registros} />
                            </TabPane>
                            <TabPane tab="ENVIADOS" key="2t">
                                    <BusquedaEnviado datosBusqueda={this.props.itemSeleccionadoEnviado} /> 
                                   <ListadoEnviadoAcreditacion registros={this.props.registrosEnviado} />
                            </TabPane>
                          
                        </Tabs>
                 
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
      registros: state.acreditacion ,
      registrosEnviado:state.acreditacionEnviado ,
      itemSeleccionado:state.itemSeleccionado ,     
      itemSeleccionadoEnviado:state.itemSeleccionadoEnviado 
      
    }
  } 
export default  connect(    mapStateToProps  )(Acreditacion);
