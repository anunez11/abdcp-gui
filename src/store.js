import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer =(state,action) => {
   
   if(action.type==="GET_DEPARTAMENTO"){
    // console.log(" devuelto ", action.data)
     return {
         ...state,
         departamento:action.data
     }
 } else if(action.type==="GET_SOLICITUD"){
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
     } else if(action.type==="GET_MOTIVO_RETORNO"){
        ///  console.log(" devuelto ", action.data)
          return {
              ...state,
              motivoRetorno:action.data
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
     } else if(action.type==="GET_MONEDA"){
        ///   console.log(" devuelto ", action.data)
           return {
               ...state,
               moneda:action.data
           }
       } else if(action.type==="GET_ESTADO_FACTURA"){
        ///   console.log(" devuelto ", action.data)
           return {
               ...state,
               estadoFactura:action.data
           }
       } else if(action.type==="GET_ESTADO_SERVICIO"){
        ///   console.log(" devuelto ", action.data)
           return {
               ...state,
               estadoServicio:action.data
           }
       }else if(action.type==="GET_SOLICITUD_ID"){
        return {
            ...state,
            solicitud:{data:[action.data]}
        }
     }else if(action.type==="ADD_NUMERACION"){
        ///   console.log(" devuelto ", action.data)
           return {
               ...state,
               numeracion:action.data
           }
       }else if(action.type==="REMOVE_NUMERACION"){
    
        return {
            ...state,
            numeracion:state.numeracion.filter(numero=>numero.inicioRango!==action.data.inicioRango)
        }
      } else if(action.type==="GET_CLIENTE"){
        return {
            ...state,
            cliente:action.data
        }
        
      } else if(action.type==="GET_MENSAJE"){
        return {
            ...state,
            mensaje:action.data
        }
        
      }  else if(action.type==="UPDATE_CLIENTE"){
        return {
            ...state,
            cliente : state.cliente.map(item=>{  if(item.idCliente===action.data.idCliente)  return action.data; else  return item;    }    )
        }
        
      }
      
      
      
      else if(action.type==="GET_CLIENTE_ID"){
        return {
            ...state,
            clienteId:action.data
        }
      } else if(action.type==="ADD_CLIENTE"){
        let lista=[];
        lista.push(action.data);
        return {
            ...state,
            cliente:lista.concat(state.cliente)
             }
      }
      else if(action.type==="UPDATE_ITEM"){
        return {
            ...state,
            itemSeleccionado:action.data
        }
      }
      else if(action.type==="DELETE_CLIENTE"){

        return {
            ...state,
            cliente:state.cliente.filter(item=>item.idCliente!==action.data.idCliente)
        }
      }else if(action.type==="GET_ACREDITACION"){
        return {
            ...state,
            acreditacion:action.data
        }
        
      } else if(action.type==="GET_ACREDITACION_ENVIADO"){
        return {
            ...state,
            acreditacion:action.data
        }
        
      } else if(action.type==="GET_PROGRAMACION"){
        return {
            ...state,
            programacion:action.data
        }
        
      } else if(action.type==="DELETE_PROGRAMACION"){
        return {
            ...state,
            programacion:state.programacion.filter(item=>item.idProgramacionPortabilidad!==action.data.idProgramacionPortabilidad)
        }
        
      } else if(action.type==="GET_PROGRAMACION_ENVIADO"){  
        return {
            ...state,
            programacionEnviado:action.data
        }
        
      } else if(action.type==="ADD_PROGRAMACION_ENVIADO"){
        let lista=[];
        lista.push(action.data);
        return {
            ...state,
            programacionEnviado:lista.concat(state.programacionEnviado)
        }
        
      }  else if(action.type==="UPDATE_PROGRAMACION_ENVIADO"){
        return {
            ...state,
            programacionEnviado:state.programacionEnviado.map(item=>{  if(item.idProgramacionPortabilidad===action.data.idProgramacionPortabilidad)  return action.data; else  return item;    }    )
        }
        
      } 
      
      




return state;


   
}

const inicial={
                cedente:[],
                modalidad:[],
                motivoRetorno:[],
                tipoCliente:[],
                departamento:[],
                tipoServicio:[],
                tipoDocumento:[],
                solicitud:{data:[]},
                cliente:[],
                mensaje:[],
                clienteId:{},
                programacion:[],    
                acreditacion:[],
                programacionEnviado:[],    
                acreditacionEnviado:[],

                numeracion:[],
                moneda:[],
                itemSeleccionado:[],
                estadoServicio:[],
                estadoFactura:[]                     
             };


const logger = store => next => action => {
   console.log('dispatching',action);
    let result = next( action ); 
  console.log('next state ',store.getState());
    return result;
};

export default createStore(reducer,inicial,applyMiddleware(logger,thunk));