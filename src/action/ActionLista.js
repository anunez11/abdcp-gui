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
const getListaMotivoRetorno = () => {


    return dispactch=>{
        axios.get(variables.apiBase+"lista/listaMotivoRetorno").then(response=>{
                 dispactch( {
                     type:"GET_MOTIVO_RETORNO",
                     data:response.data
                 })
        } );
    };

    

};
const getListaMoneda = () => {
    return dispactch=>{
        axios.get(variables.apiBase+"lista/listaMoneda").then(response=>{
                 dispactch( {
                     type:"GET_MONEDA",
                     data:response.data
                 })
        } );
    };

};
const getListaEstadoFactura = () => {
    return dispactch=>{
        axios.get(variables.apiBase+"lista/listaEstadoFactura").then(response=>{
                 dispactch( {
                     type:"GET_ESTADO_FACTURA",
                     data:response.data
                 })
        } );
    };

};

const getListaEstadoServicio = () => {
    return dispactch=>{
        axios.get(variables.apiBase+"lista/listaEstadoServicio").then(response=>{
                 dispactch( {
                     type:"GET_ESTADO_SERVICIO",
                     data:response.data
                 })
        } );
    };

};

const setItemSeleccionado = (items=[]) => {
    return {
        type:"UPDATE_ITEM",
        data:items
      };

};


export {getListaMoneda,setItemSeleccionado,getListaEstadoServicio,getListaEstadoFactura,getListaDepartamento,getListaModalidad,getListaServicio,getListaCedente,getListaTipoDocumento,getListaTipoCliente,getListaMotivoRetorno} ;