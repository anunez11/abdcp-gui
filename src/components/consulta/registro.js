import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Layout,Row,Col } from 'antd';  


import {connect} from "react-redux";

import FomularioConsulta from "./formulario";
import FomularioNumeracion from "./fomularioNumeracion";
import {getListaCedente,getListaServicio,getListaTipoDocumento,getListaModalidad} from "../../action/ActionLista";
import store from "../../store";


const { Header, Content, Footer  } = Layout;
class  Registro extends Component{
    
    constructor(){
        super();
        
        store.dispatch(getListaCedente());
        store.dispatch(getListaServicio());
        store.dispatch(getListaTipoDocumento());  
        store.dispatch(getListaModalidad());   

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
                <Row  gutter={16}>
                   <Col  key="formConsulta" span={12}  >
                          <FomularioConsulta combos={this.props.combos} />
                    </Col>
                    <Col  key="formNumeracion" span={12}  >
                           <FomularioNumeracion combos={this.props.combos} />
                    </Col>
                </Row>

                   
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
      combos: {cedente:state.cedente,tipoServicio:state.tipoServicio ,tipoDocumento:state.tipoDocumento,modalidad:state.modalidad}      
    }
  } 
export default  connect(    mapStateToProps  )(Registro);
