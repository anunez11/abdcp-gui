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
     } else if(action.type==="GET_SOLICITUD_ID"){
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
                programacion:{data:[]},    
                acreditacion:{data:[]},
                numeracion:[]               
             };


const logger = store => next => action => {
   console.log('dispatching',action);
    let result = next( action ); 
  console.log('next state ',store.getState());
    return result;
};

export default createStore(reducer,inicial,applyMiddleware(logger,thunk));