import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import {Layout } from 'antd';  
import { Row, Col ,Select,Button,DatePicker } from 'antd';
const {  RangePicker } = DatePicker;
const Option = Select.Option;
class  Busqueda extends Component{
   
    static propTypes ={
        datosBusqueda:PropTypes.object.isRequired
      }
   

   render(){
       return (
             <Row>
                 <Col span={8}>
                 <Select
                        showSearch
                        style={{ width: 400 }}
                        placeholder="Cedente"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="">Todos los Cedentes</Option>
                         {this.props.datosBusqueda.cedente.map(item=><Option key={"CD"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                    </Select>                  
                   
                          

                 </Col>
                 <Col span={4}>
                 <Select
                        placeholder="Servicio"
                        style={{ width: 200 }}
                       >
                             <Option value="">Todos los Servicios</Option>
                         {this.props.datosBusqueda.tipoServicio.map(item=><Option key={"TS"+item.codigo} value={item.codigo}>{item.descripcion}</Option>)}
                       </Select>
                      
                 </Col>
                 <Col span={8}>
                 <RangePicker />
                 </Col>
                 <Col span={2}>
                 <Button ghost icon="search" type="primary">Buscar</Button>
          
                 </Col>
                 <Col span={2}>
          
                 <Button type="primary"  icon="plus-circle"  onClick={ ()=>window.location.href="/consulta/registrar" }  >Agregar</Button>
                 </Col>
             </Row>
       );
   }

       
}
export default Busqueda;