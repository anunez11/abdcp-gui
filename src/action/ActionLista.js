import axios from "axios";
import variables from "../variable";
const getListaDepartamento = () => {

    return dispactch=>{
           axios.get(variables.apiBase+"lista/listaDepartamento").then(response=>{
                    dispactch( {
                        type:"GET_DEPARTAMENTO",
                        data:response.data
                    })
           } );
    };
};


const getListaModalidad= () => {
    
    return dispactch=>{
        axios.get(variables.apiBase+"lista/listaModalidad").then(response=>{
                 dispactch( {
                     type:"GET_MODALIDAD",
                     data:response.data
                 })
        } );
    };

};

const getListaServicio = () => {
    return dispactch=>{
        axios.get(variables.apiBase+"lista/listaTipoServicio").then(response=>{
                 dispactch( {
                     type:"GET_SERVICIO",
                     data:response.data
                 })
        } );
    };

};

const getListaCedente = () => {


    return dispactch=>{
        axios.get(variables.apiBase+"lista/listaParticipante").then(response=>{
                 dispactch( {
                     type:"GET_CEDENTE",
                     data:response.data
                 })
        } );
    };

    
};
const getListaTipoDocumento = () => {


    return dispactch=>{
        axios.get(variables.apiBase+"lista/listaTipoDocumento").then(response=>{
                 dispactch( {
                     type:"GET_TIPO_DOCUMENTO",
                     data:response.data
                 })
        } );
    };


};
const getListaTipoCliente = () => {


    return dispactch=>{
        axios.get(variables.apiBase+"lista/listaTipoCliente").then(response=>{
                 dispactch( {
                     type:"GET_TIPO_CLIENTE",
                     data:response.data
                 })
        } );
    };

    

};

export {getListaDepartamento,getListaModalidad,getListaServicio,getListaCedente,getListaTipoDocumento,getListaTipoCliente} ;