import axios from "axios";
import variables from "../variable";
import { message } from 'antd';

const getListaMensaje = (request={}) => {

    return dispactch=>{   
             
        dispactch( {
            type:"GET_MENSAJE",
            data:[]
        })
       
          axios.post(variables.apiBase+"mensajes/lista",request).then(response=>{
                    dispactch( {
                        type:"GET_MENSAJE",
                        data:response.data
                    })
           } , error=>message.error(error.message));


    };
};

const getListaMensajeId = (request="0") => {

    return dispactch=>{   
             
        dispactch( {
            type:"GET_MENSAJE_ID",
            data:{}
        })
       
          axios.get(variables.apiBase+"mensajes/"+request).then(response=>{
                    dispactch( {
                        type:"GET_MENSAJE_ID",
                        data:response.data
                    })
           } , error=>message.error(error.message));


    };
};




export {getListaMensaje,getListaMensajeId} ;