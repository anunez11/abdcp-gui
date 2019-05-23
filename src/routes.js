import React from "react";
import {Route,Switch } from "react-router-dom";

import Page404 from "./components/page404";
import Consulta from "./components/consulta";
import Solicitud from "./components/solicitud";
import Cliente from "./components/cliente";
import Retorno from "./components/retorno";
import Registro from "./components/consulta/registro";
import Mensaje from "./components/mensajes";
import RegistroSolicitud from "./components/solicitud/registro";
import Programacion from "./components/programacion";
import Acreditacion from "./components/acreditacion";
import  DetalleSolicitudPortabilidad from "./components/solicitud/detalle";
import  DetalleConsulta from "./components/consulta/detalle";
import {Provider} from "react-redux";
import store from "./store";
import App from "./components/App";


const AppRoutes= () => 
                   <Provider store={store}>
                     <App> 
                        <Switch>
                             <Route exact path="/consulta" component={()=><Consulta titulo="Consulta Previa" />} />                             
                             <Route exact path="/consulta/registrar" component={()=><Registro titulo="Registar Consulta Previa" />} />
                             <Route exact path="/consulta/:id/detalle" component={(props)=><DetalleConsulta data={{titulo:"Detalle Consulta Previa",id:props.match.params.id}} />} />                                                      
                            
                             <Route exact path="/programacion" component={()=><Programacion titulo="Programacion Portabilidad" />} />
                             <Route exact path="/retorno" component={()=><Retorno  titulo="Solicitud de Retorno"   />} />

                             <Route exact path="/mensaje" component={()=><Mensaje  titulo="Mensajes"   />} />

                             <Route exact path="/solicitud" component={()=><Solicitud titulo="Solicitud Portabilidad" />  } />
                             <Route exact path="/solicitud/registrar" component={()=><RegistroSolicitud titulo="Registar Solicitud Portabilidad" />}/>
                             <Route exact path="/solicitud/:id/detalle"  component={(props)=><DetalleSolicitudPortabilidad data={{titulo:"Detalle Solicitud Portabilidad",id:props.match.params.id}} />}  />
                            <Route exact path="/acreditacion" component={()=><Acreditacion titulo="Acretidacion de Pago de Deuda" /> }/>

                             <Route exact path="/cliente" component={()=><Cliente titulo="Clientes" />}/>

                             <Route exact path="/" component={Page404} />
                             <Route component={Page404} />
                         </Switch>
                     </App>
                    </Provider> 
                     ;
export default AppRoutes;                   