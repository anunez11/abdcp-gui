import React, { Component } from 'react';
import {
    Layout, Menu,  Icon
  } from 'antd';
  




  const {Sider} = Layout;
  const SubMenu = Menu.SubMenu;

class   MenuLateral extends Component{
    state = {
        collapsed: false,
      };
    
      onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
      }
    
      render() {
        return (
        
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline">
             
                <SubMenu  defaultSelectedKeys={['1']}
                  key="sub1"
                  title={<span><Icon type="setting" /><span>Procesos</span></span>}
                >
                  <Menu.Item key="1">Consulta</Menu.Item>
                  <Menu.Item key="2">Solicitud</Menu.Item>
                  <Menu.Item key="3">Retorno</Menu.Item>
                  <Menu.Item key="4">Acreditacion</Menu.Item>
                  <Menu.Item key="5">Programacion</Menu.Item>                  
                </SubMenu>
                
                <Menu.Item key="6">
                  <Icon type="file" />
                  <span>Mensajes</span>
                </Menu.Item>
                <Menu.Item key="7">
                  <Icon type="user" />
                  <span>Cliente</span>
                </Menu.Item>
              </Menu>
            </Sider>
           
        );
      }

}
export default MenuLateral;
