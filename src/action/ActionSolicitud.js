
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

const registrarSolicitud = (request={}) => {

    return dispactch=>{   
             

       
          axios.post(variables.apiBase+"solicitudes",request).then(response=>{
                    dispactch( {
                        type:"REGISTRAR_SOLICIITUD",
                        data:response.data
                    });
                    console.log(response.data);
                    window.location.href="/consulta/"+response.data.id+"/detalle" ;
           } );

       

    };
};


const getSolicitudId = (id=0) => {

    return dispactch=>{   
             

       
          axios.get(variables.apiBase+"solicitudes/"+id).then(response=>{
                    dispactch( {
                        type:"GET_SOLICIITUD",
                        data:response.data
                    })
           } );


    };
};

export {getListaSolicitud,getSolicitudId,registrarSolicitud} ;
