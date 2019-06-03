import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Contenido from './global/Contenido';
import MenuLateral from "./global/MenuLateral";
import {Layout} from 'antd';
import "antd/dist/antd.css";
import "../App.css";
import {getListaMotivoErrorRechazo} from "../action/ActionLista"
import store from "../store";
class App extends Component  {
  static propTypes ={
    children:PropTypes.object.isRequired
  }
  constructor(){
    super();
    store.dispatch(getListaMotivoErrorRechazo());
  }
  render() {
    const {children}=this.props;
    return (
      <div className="App">
          <Layout style={{ minHeight: '100vh' }}>
               <MenuLateral/>
               <Contenido body={children}  /> 
          </Layout>
      </div>
    );
  }
  
}

export default App;
