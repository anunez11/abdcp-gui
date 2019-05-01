import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Layout } from 'antd';  
const { Header, Content, Footer  } = Layout;


class   Contenido extends Component{
    static propTypes ={
        body:PropTypes.object.isRequired
      }
    
      render() {

        const {body}=this.props;
        return (
        
           
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} >  <h1  className="tituloEncabezado" >Consulta Previa</h1> </Header>
              <Content style={{ margin: '0 16px' }}>
               
                <div style={{margin: '16px 0' , padding: 24, background: '#fff', minHeight: 360 }}>
                  {body}
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
               GTD Portabilidad ©2019 Created by GTD
              </Footer>
            </Layout>
        
        );
      }

}
export default Contenido;
