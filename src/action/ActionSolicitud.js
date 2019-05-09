
import axios from "axios";
import variables from "../variable";

const getListaSolicitud = (request={}) => {

    return dispactch=>{   
             

       
          axios.post(variables.apiBase+"solicitudes/lista",request).then(response=>{
                    dispactch( {
                        type:"GET_SOLICITUD",
                        data:response.data
                    })
           } );


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
                    if(codigo==="CP")window.location.href="/consulta/"+response.data.id+"/detalle" ;
                    if(codigo==="SP")window.location.href="/solicitud/"+response.data.id+"/detalle" ;
           } );

       

    };
};


const getSolicitudId = (id=0) => {

    return dispactch=>{   
             

       
          axios.get(variables.apiBase+"solicitudes/"+id).then(response=>{
                    dispactch( {
                        type:"GET_SOLICITUD_ID",
                        data:response.data
                    })
           } );


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
