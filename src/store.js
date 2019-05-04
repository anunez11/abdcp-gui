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
                solicitud:{data:[]},
                programacion:{data:[]},    
                acreditacion:{data:[]},
                numeracion:{data:[]}               
             };


const logger = store => next => action => {
  // console.log('dispatching',action);
    let result = next( action ); 
  // console.log('next state ',store.getState());
    return result;
};

export default createStore(reducer,inicial,applyMiddleware(logger,thunk));