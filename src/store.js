import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer =(state,action) => {
    if(action.type==="GET_DEPARTAMENTO"){
       // console.log(" devuelto ", action.data)
        return {
            ...state,
            departamento:action.data
        }
    } else if(action.type==="GET_SOLICIITUD"){
      ///  console.log(" devuelto ", action.data)
        return {
            ...state,
            solicitud:action.data
        }
    } else if(action.type==="GET_MODALIDAD"){
     ///   console.log(" devuelto ", action.data)
        return {
            ...state,
            modalidad:action.data
        }
    }
     else if(action.type==="GET_SERVICIO"){
          ///  console.log(" devuelto ", action.data)
            return {
                ...state,
                tipoServicio:action.data
            }
        }
        else if(action.type==="GET_CEDENTE"){
           /// console.log(" devuelto ", action.data)
            return {
                ...state,
                cedente:action.data
            }
        }else if(action.type==="GET_TIPO_DOCUMENTO"){
         ///   console.log(" devuelto ", action.data)
            return {
                ...state,
                tipoDocumento:action.data
            }
        }else if(action.type==="ADD_NUMERACION"){
            console.log(" devuelto nuMERACION ", action.data)
            return {
                ...state,
                numeracion:action.data
             
            }
            
        } else if(action.type==="SET_ERROR"){
               // console.log(" devuelto ", action.data)
                return {
                    ...state,
                    error:action.data
                }

            }else if(action.type==="GET_ERROR"){
                  //  console.log(" devuelto ", action.data)
                    return {
                        ...state,
                        error:  action.data
                    }   


        }else if(action.type==="SET_FORMNUMERACION"){
    
                return {
                    ...state,
                    formNumeracion:action.data
                }
        }else if(action.type==="SET_FORMREGISTRO"){
    
            return {
                ...state,
                formRegistro:action.data
            }
        }else if(action.type==="REMOVE_NUMERACION"){
    
            return {
                ...state,
                numeracion:state.numeracion.filter(numero=>numero.inicioRango!==action.data.inicioRango)
            }
    }

    

    return state;
}

const inicial={
                cedente:[],
                modalidad:[],
                tipoCliente:[],
                departamento:[],
                tipoServicio:[],
                tipoDocumento:[],
                solicitud:[],
                programacion:[],    
                acreditacion:[],
                numeracion:[],
                error:[],
                solicitudId:{},
                programacionId:{},    
                acreditacionId:{},
                formNumeracion:{rangoIni:"",rangoFin:"" ,modalidadCedente:"",modalidadReceptor:""},
                formRegistro:{}
             };


const logger = store => next => action => {
   console.log('dispatching',action);
    let result = next( action ); 
   console.log('next state ',store.getState());
    return result;
};

export default createStore(reducer,inicial,applyMiddleware(logger,thunk));