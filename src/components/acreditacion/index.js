import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Layout } from 'antd';  


import {connect} from "react-redux";




const { Header, Content, Footer  } = Layout;
class  Acreditacion extends Component{
    
   

    static propTypes ={
        titulo:PropTypes.string.isRequired
      }
    render(){
        return (
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} >  <h1  className="tituloEncabezado" >{this.props.titulo}</h1> </Header>
              <Content style={{ margin: '0 16px' }}>
               
                <div style={{margin: '16px 0' , padding: 24, background: '#fff', minHeight: 360 }}>
                  
                 
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
      registros: state.solicitud 
      
    }
  } 
export default  connect(    mapStateToProps  )(Acreditacion);
