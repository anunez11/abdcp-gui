import React, { Component } from 'react';
import {Layout, Menu,Icon} from 'antd';
import {Link} from "react-router-dom"; 




  const {Sider} = Layout;
  const SubMenu = Menu.SubMenu;

class   MenuLateral extends Component{
    state = {
        collapsed: true,
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
                  <Menu.Item key="1"><Link to="/consulta">Consulta</Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/solicitud">Solicitud</Link></Menu.Item>
                  <Menu.Item key="3"><Link to="/retorno">Retorno</Link></Menu.Item>
                  <Menu.Item key="4"><Link to="/acreditacion">Acreditacion</Link></Menu.Item>
                  <Menu.Item key="5"><Link to="/programacion">Programacion</Link></Menu.Item>                  
                </SubMenu>
                
                <Menu.Item key="6" >
                  <Icon type="mail"  onClick={()=>window.location.href="/mensaje"}/>
                  <span onClick={()=>window.location.href="/mensaje"}>Mensajes</span>
                </Menu.Item>
                <Menu.Item key="7"   >
                  <Icon type="user" onClick={()=>window.location.href="/cliente"} />
                  <span onClick={()=>window.location.href="/cliente"}>Cliente</span>
                </Menu.Item>
              </Menu>
            </Sider>
           
        );
      }

}
export default MenuLateral;
