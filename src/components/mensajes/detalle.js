import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
//import {Link} from "react-router-dom"; .
import {connect} from "react-redux";
import { Button, Modal,Collapse,Badge,Row,Col,Tooltip} from 'antd';
const Panel = Collapse.Panel;

class  DetalleMensaje  extends Component{



     

    static propTypes ={
       
        
        detalle:PropTypes.object.isRequired
    }

    state = {
       
        visible: false,
    }
    

   


    showModal = () => {
        this.setState({
          visible: true,
        });
      
      
    }
    
    handleOk = () => {
        this.setState({ loading: true });
      
    }
    
    handleCancel = () => {
        this.setState({ visible: false });
    }
    

     detalleMsg = (valuesArray,sizelabel=5,sizeValue=19) =>{
             // console.log(" array "+Object.keys(valuesArray));
          //  if(Object.keys(valuesArray).length>0) return (<div></div>);

            return Object.keys(valuesArray).map((item, i)=>{
                      if(valuesArray[item]!==null) {   
    
                        let data;
                         const obj=valuesArray[item];
                         if(obj !== null && typeof obj === 'object'){
                         
                           data=this.detalleMsg(obj,sizelabel,sizeValue);



                           return (
                            <Row key={item} gutter={16} >
                              <Col offset ={1}  sm={23} className="textoLineal ItemMsg"> <Tooltip   title={item}>{item}</Tooltip>  </Col>
                              <Col  offset ={1} sm={23} >  <Row key={item} gutter={16} >
                                                                  <Col  offset ={1} sm={23} >{data}</Col>
                                                           </Row>  
                              </Col>
                            </Row>)
                         }else{
                           
                           // revisamo si es  CausaRechazo CausaNoIntegridad
                           if(item==="CausaRechazo" || item==="CausaNoIntegridad" ){
                             console.log("errores",this.props.errores)
                             console.log("errores data",this.props.errores[obj])
                             console.log("data",obj)
                                data=obj+"  "+this.props.errores[obj];
                           }                          
                           else data=obj;
                           return (
                            <Row key={item} gutter={16} >
                              <Col sm={sizelabel} className="textoLineal ItemMsg"> <Tooltip   title={item}>{item}</Tooltip>  </Col>
                              <Col sm={sizeValue} > {data}  </Col>
                            </Row>)
                         }
                         
                      }else return (<div></div>)

            })


        
           
     }
       



      render(){
        const { visible } = this.state;
      

        
           return (


            <span>
              <Button type="primary" ghost size="small" icon="mail"  onClick={this.showModal}>
                      {this.props.btnTxt}
              </Button>
            <Modal width={1020}
              visible={visible}
              title=  {"Mensaje  :"+this.props.detalle.categoriaMensaje+"( "+this.props.detalle.direccionMensaje+" )"}
              onOk={this.handleSubmit}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>Cerrar</Button>,
              
              ]}
            ><Collapse defaultActiveKey={['1','2','3']} >
            <Panel header="Cabecera" key="1">
              
            {this.detalleMsg(this.props.detalle.request.CabeceraMensaje) }          
                 
              
            </Panel>
            <Panel header="Cuerpo" key="2">

           {this.detalleMsg(this.props.detalle.request.CuerpoMensaje)} 
         
            </Panel>
            <Panel header="Response" key="3">
                  { 
                    this.props.detalle.response==="ACK" ? 
                  <Badge count={this.props.detalle.response} style={{ backgroundColor: '#52c41a' }} /> :  
                 <div><Badge count={this.props.detalle.response} />  <span> {this.props.detalle.responseMsg} </span> </div> }
                  
            </Panel>
          </Collapse> 
            </Modal>
          </span>
           );
      }

 } 

 

 const mapStateToProps = state => {
  return {
    
   
    errores:state.error 
  }
} 
export default  connect(    mapStateToProps  )(DetalleMensaje);
