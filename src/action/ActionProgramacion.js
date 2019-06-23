
import axios from "axios";
import variables from "../variable";
import { message } from 'antd';

const getListaProgramacion = (request={}) => {

    return dispactch=>{   
             
        dispactch( {
            type:"GET_PROGRAMACION",
            data:[]
        })
       
          axios.post(variables.apiBase+"programacion/lista",request).then(response=>{
                    dispactch( {
                        type:"GET_PROGRAMACION",
                        data:response.data
                    })
           } , error=>message.error(error.message));


    };
};

const getListaProgramacionEnviado = (request={}) => {

    return dispactch=>{   
             
        dispactch( {
            type:"GET_PROGRAMACION_ENVIADO",
            data:[]
        });
       
          axios.post(variables.apiBase+"programacion/lista",request).then(response=>{
                    console.log(response.data);
                    dispactch( {
                        type:"GET_PROGRAMACION_ENVIADO",
                        data:response.data
                    })
           } , error=>message.error(error.message));


    };
};

const setListaProgramacionEnviado = (request={}) => {

    return dispactch=>{   
             

       
          axios.put(variables.apiBase+"programacion",request).then(response=>{
                
               
                    for(let i=0;i< response.data.data.length ;i++){
                        dispactch( {
                            type:"ADD_PROGRAMACION_ENVIADO",
                            data:response.data.data[i]
                        })

                        dispactch( {
                            type:"DELETE_PROGRAMACION",
                            data:response.data.data[i]
                        })

                    }   
                    message.success(response.data.message)   ;

           } , error=>message.error(error.message));


    };
};

const setReenviarListaProgramacionEnviado = (request={}) => {

    return dispactch=>{   
             

       
          axios.put(variables.apiBase+"programacion",request).then(response=>{
                
               
                    for(let i=0;i< response.data.data.length ;i++){
                        dispactch( {
                            type:"UPDATE_PROGRAMACION_ENVIADO",
                            data:response.data.data[i]
                        })

                    }   
                    message.success(response.data.message)   ;

           } , error=>message.error(error.message));


    };
};


export {getListaProgramacion,getListaProgramacionEnviado,setListaProgramacionEnviado,setReenviarListaProgramacionEnviado};