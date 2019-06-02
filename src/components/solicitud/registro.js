import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Layout,Row,Col,Button } from 'antd';  


import {connect} from "react-redux";

import FomularioSolicitud from "./formulario";
import FomularioNumeracion from "./fomularioNumeracion";
import {getListaCedente,getListaServicio,getListaTipoDocumento,getListaModalidad,getListaDepartamento} from "../../action/ActionLista";
import store from "../../store";
import {Link} from "react-router-dom"; 

const { Header, Content, Footer  } = Layout;
class  RegistroSolicitud extends Component{
    
    constructor(){
        super();
        
        store.dispatch(getListaCedente());
        store.dispatch(getListaServicio());
        store.dispatch(getListaTipoDocumento());  
        store.dispatch(getListaModalidad());   
        store.dispatch(getListaDepartamento());   

      }

    static propTypes ={
        titulo:PropTypes.string.isRequired
      }
    render(){
        return (
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} >  
              <Row>
                    <Col span={1}  style={{textAlign:"center"}} >
                      <Link to="/solicitud">
                          <Button icon="arrow-left"  type="primary" ghost className="backEncabezado"  shape="circle"    />  
                      </Link>
                        
                    </Col>
                    <Col span={23}>
                       <h1  style={{fontSize:30}} >     {this.props.titulo}  </h1> 
                    </Col>
              </Row>
              </Header>
              <Content style={{ margin: '0 16px' }}>               
                <div style={{margin: '16px 0' , padding: 24, background: '#fff', minHeight: 360 }}>
                <Row  gutter={16}>
                   <Col  key="formConsulta" span={12}  >
                          <FomularioSolicitud combos={this.props.combos} />
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
      combos: {cedente:state.cedente,tipoServicio:state.tipoServicio ,tipoDocumento:state.tipoDocumento,modalidad:state.modalidad,departamento:state.departamento,cantidadNumeracion:state.numeracion.length}      
    }
  } 
export default  connect(    mapStateToProps  )(RegistroSolicitud);
