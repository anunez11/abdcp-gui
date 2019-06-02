import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Layout,Button,Row,Col } from 'antd';  
import {Link} from "react-router-dom"; 
import store from "../../store";
import {connect} from "react-redux";
import {getSolicitudId} from "../../action/ActionSolicitud";
import DetalleConsultaPrevia from "./detalleConsulta";
import ListadoNumeracionDetalle from "./numeracionDetalle";

const { Header, Content, Footer  } = Layout;
class  DetalleConsulta extends Component{
    
    constructor(props) {
        super(props);    
        console.log("id===>",props);
        store.dispatch(getSolicitudId(parseInt(props.data.id)));
      }

    static propTypes ={
        data:PropTypes.object.isRequired
      }
    render(){
       /// console.log("props a renderiazar",this.props.registro);

        return (
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} > 
                <Row>
                    <Col span={1}  style={{textAlign:"center"}} >
                    <Link to="/consulta"  ><Button icon="arrow-left"  type="primary" ghost className="backEncabezado" shape="circle"   /></Link>
                        
                    </Col>
                    <Col span={23}>
                         <h1  style={{fontSize:30}} >     {this.props.data.titulo}  </h1> 
                    </Col>
                </Row>

               </Header>
              <Content style={{ margin: '0 16px' }}>
               
                <div style={{margin: '16px 0' , padding: 24, background: '#fff', minHeight: 360 }}>
                     <Row gutter={16}>
                        <Col span={8}> <DetalleConsultaPrevia registro={this.props.registro} /></Col>
                        <Col span={16}><ListadoNumeracionDetalle  registro={ {data:this.props.numeracion,id:this.props.data.id} } /></Col>
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
      registro: state.solicitud,
      numeracion:state.solicitud.data.length>0  ? state.solicitud.data[0].numeracion : [],
    }
  } 
export default  connect(    mapStateToProps  )(DetalleConsulta);
