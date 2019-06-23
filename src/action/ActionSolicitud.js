
import axios from "axios";
import variables from "../variable";
import { message } from 'antd';
const getListaSolicitud = (request={}) => {

    return dispactch=>{   
             

        dispactch( {
            type:"GET_SOLICITUD",
            data:[]
        });
          axios.post(variables.apiBase+"solicitudes/lista",request).then(response=>{
                    dispactch( {
                        type:"GET_SOLICITUD",
                        data:response.data
                    })
           } , error=>message.error(error.message) );


    };
};

const registrarSolicitud = (request={},codigo="CP") => {

    return dispactch=>{   
             

       
          axios.post(variables.apiBase+"solicitudes",request).then(response=>{
                    dispactch( {
                        type:"REGISTRAR_SOLICIITUD",
                        data:response.data
                    });
                    console.log(response.data);
                    message.success(response.data.message)   ;
                    if(codigo==="CP")window.location.href=variables.contexto+"consulta/"+response.data.id+"/detalle" ;
                    if(codigo==="SP")window.location.href=variables.contexto+"solicitud/"+response.data.id+"/detalle" ;
                    if(codigo==="SR")window.location.reload();
           } , error=>message.error(error.message) );

       

    };
};


const getSolicitudId = (id=0) => {

    return dispactch=>{   
             
        dispactch( {
            type:"GET_SOLICITUD",
            data:[]
        });
       
          axios.get(variables.apiBase+"solicitudes/"+id).then(response=>{
                    dispactch( {
                        type:"GET_SOLICITUD_ID",
                        data:response.data
                    })
           } , error=>message.error(error.message) );


    };
};
const addNumeracion=numeracion=>{
    
    return {
        type:"ADD_NUMERACION",
        data:numeracion
    };

}

const removeNumeracion=numeracion=>{
    
    return {
        type:"REMOVE_NUMERACION",
        data:numeracion
    };

}

export {getListaSolicitud,getSolicitudId,registrarSolicitud,addNumeracion,removeNumeracion} ;
