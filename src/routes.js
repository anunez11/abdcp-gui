import React from "react";
import {Route,Switch } from "react-router-dom";

import Page404 from "./components/page404";
import {Provider} from "react-redux";



const AppRoutes= () => 
                   <Provider store={store}>
                     <App> 
                        <Switch>
                             <Route exact path="/consulta" component={Page404} />                             
                             <Route exact path="/consulta/registrar" component={Page404} />
                             <Route exact path="/consulta/:id/detalle" component={Page404} />                                                      
                            
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