import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
import moment from 'moment';
import {getListaSolicitud} from "../../action/ActionSolicitud";
import RegistroRetorno from "./registro";
import store from "../../store";
import { Row, Col ,Select,Button,DatePicker, Form } from 'antd';
const {  RangePicker } = DatePicker;
const Option = Select.Option;
class  Busqueda extends Component{
   
    static propTypes ={
        datosBusqueda:PropTypes.object.isRequired
      }
   
      handleSubmit = (e) => {
        e.preventDefault();
      const cedente= this.props.form.getFieldValue("cedente");
      const servicio=this.props.form.getFieldValue("servicio");
      const rango=this.props.form.getFieldValue("rango");
      const motivo =this.props.form.getFieldValue("motivoRetorno");
      let where ={codigo:"SR"};
      if(cedente!=="") where.cedente=cedente;
      if(servicio!=="") where.tipoServicio=servicio;
      if(motivo!=="") where.motivoRetorno=motivo;
      if(rango!==undefined){
        if(rango.length>0) {
            where.fechaCreacion_betweendate=[rango[0].format("YYYY-MM-DD"),rango[1].format("YYYY-MM-DD")] ; 
        }
      }
      //{codigo:"CP",fechaCreacion_betweendate:[moment().startOf('month').format("YYYY-MM-DD"),moment().endOf('month').format("YYYY-MM-DD")]}

      store.dispatch(getListaSolicitud({page:1,limit:10,where:where}));     
        
      }


   render(){
      const { getFieldDecorator } = this.props.form;
       return (
           <Form onSubmit={this.handleSubmit} >
             <Row gutter={8}>
                 <Col span={4}>
                 <Form.Item>
                    {getFieldDecorator('cedente', {initialValue:""})(
                        <Select
                        showSearch                     
                        placeholder="Cedente"
                        optionFilterProp="children"
                     
                    >
                        <Option value="">Todos los Cedentes</Option>
                         {this.props.datosBusqueda.cedente.map(item=><Option key={"CD"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                    </Select> 
                    )}

                    
                  </Form.Item>
                   
                          

                 </Col>
                 <Col span={4}>
                 <Form.Item>
                    {getFieldDecorator('motivoRetorno', {initialValue:""})(
                        <Select
                                          
                        placeholder="Motivo Retorno"
                       
                     
                    >
                        <Option value="">Todos los Motivos</Option>
                         {this.props.datosBusqueda.motivo.map(item=><Option key={"MR"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                    </Select> 
                    )}

                    
                  </Form.Item>
                   
                          

                 </Col>
                 <Col span={4}>
                 <Form.Item>
                     { getFieldDecorator('servicio', {initialValue:""})(
                        <Select
                            placeholder="Servicio"
                            style={{ width: 200 }}
                        >
                                <Option value="">Todos los Servicios</Option>
                            {this.props.datosBusqueda.tipoServicio.map(item=><Option key={"TS"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                        </Select>
                     )}

                       </Form.Item> 

                 </Col>
                 <Col span={6}>
                 { getFieldDecorator('rango', {initialValue:[ moment().startOf('month'),moment().endOf('month')]})(
                      <RangePicker format="YYYY-MM-DD"  style={{marginTop:5}} /> )}
                 </Col>
                 <Col span={2}>
                 <Form.Item>
                         <Button ghost icon="search" htmlType="submit" type="primary">Buscar</Button>
                 </Form.Item>
                 </Col>
                 <Col span={2}>
                 <Form.Item>
                        <RegistroRetorno  combos={this.props.datosBusqueda} />
                 </Form.Item>
                 </Col>
             </Row>
             </Form>
       );
   }

       
}
export default  Form.create({ name: 'horizontal_busqueda' })(Busqueda);