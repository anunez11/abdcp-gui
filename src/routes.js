import React from "react";
import {Route,Switch } from "react-router-dom";

import Page404 from "./components/page404";
import Consulta from "./components/consulta";
import Registro from "./components/consulta/registro";
import DetalleConsulta from "./components/consulta/detalle";
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
                            
                             <Route exact path="/programacion" component={Page404} />
                             <Route exact path="/retorno" component={Page404} />
                             <Route exact path="/solicitud" component={Page404} />
                             <Route exact path="/solicitud/registrar" component={Page404} />
                             <Route exact path="/solicitud/:id/detalle" component={Page404} />
                             <Route exact path="/acreditacion" component={Page404} />
                             <Route exact path="/" component={Page404} />
                             <Route component={Page404} />
                         </Switch>
                     </App>
                    </Provider> 
                     ;
export default AppRoutes;                   