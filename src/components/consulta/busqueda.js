import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
import moment from 'moment';
import {getListaSolicitud} from "../../action/ActionSolicitud";
import store from "../../store";
import {Link} from "react-router-dom"; 
import { Row, Col ,Select,Button,DatePicker, Form,Input } from 'antd';

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
      const rangoNumero=this.props.form.getFieldValue("numero");

      
      let where ={codigo:"CP"};
      if(cedente!=="") where.cedente=cedente;
      if(servicio!=="") where.tipoServicio=servicio;

      if(rangoNumero!=="") {
        let numeros=rangoNumero.split("-");
        console.log(numeros);
         if(numeros.length>1) where.inicioRango_between=[numeros[0],numeros[1]]; 
         else where.inicioRango=numeros[0];
      }

      if(rango!==undefined){
        if(rango.length>0) {
            where.fechaCreacion_betweendate=[rango[0].format("YYYY-MM-DD"),rango[1].format("YYYY-MM-DD")] ; 
        }
      }

         store.dispatch(getListaSolicitud({page:1,limit:10,where:where}));     
        
      }


   render(){
      const { getFieldDecorator } = this.props.form;
       return (
           <Form onSubmit={this.handleSubmit} >
             <Row gutter={8}>
                 <Col span={5}>
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
                     { getFieldDecorator('numero', {initialValue:""})(
                       <Input placeholder="Rango Ini - Rango Fin" />
                     )}

                       </Form.Item> 

                 </Col>
                 <Col span={4}>
                 <Form.Item>
                     { getFieldDecorator('servicio', {initialValue:""})(
                        <Select
                            placeholder="Servicio"
                           
                        >
                                <Option value="">Todos los Servicios</Option>
                            {this.props.datosBusqueda.tipoServicio.map(item=><Option key={"TS"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                        </Select>
                     )}

                       </Form.Item> 

                 </Col>
                 <Col span={7}>
                 { getFieldDecorator('rango', {initialValue:[ moment().startOf('month'),moment().endOf('month')]})(
                      <RangePicker format="YYYY-MM-DD"   style={{marginTop:5}}/> )}
                 </Col>
                 <Col span={4}>
                 <Form.Item>
                        <Button.Group>
                        <Button ghost icon="search" htmlType="submit" type="primary">Buscar</Button>
                        <Link to="/consulta/registrar">
                        <Button type="primary"  icon="plus-circle"  >Agregar</Button>
                        </Link>
                        
                        </Button.Group>
                        
                 </Form.Item>
                 </Col>
                
             </Row>
             </Form>
       );
   }

       
}
export default  Form.create({ name: 'horizontal_busqueda' })(Busqueda);