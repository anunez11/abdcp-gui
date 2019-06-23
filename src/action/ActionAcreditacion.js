
import axios from "axios";
import variables from "../variable";
import { message } from 'antd';

const getListaAcreditacion = (request={}) => {

    return dispactch=>{   
        dispactch( {
            type:"GET_ACREDITACION",
            data:[]
        })  

       
          axios.post(variables.apiBase+"acreditacion/lista",request).then(response=>{
                    dispactch( {
                        type:"GET_ACREDITACION",
                        data:response.data
                    })
           } , error=>message.error(error.message));


    };
};

const getListaAcreditacionEnviado = (request={}) => {

    return dispactch=>{   
             
        dispactch( {
            type:"GET_ACREDITACION_ENVIADO",
            data:[]
        })
       
          axios.post(variables.apiBase+"acreditacion/lista",request).then(response=>{
                    console.log(response.data);
                    dispactch( {
                        type:"GET_ACREDITACION_ENVIADO",
                        data:response.data
                    })
           } , error=>message.error(error.message));


    };
};

const setListaAcreditacionEnviado = (request={}) => {

    return dispactch=>{   
             

       
          axios.put(variables.apiBase+"acreditacion",request).then(response=>{
                
               
                    for(let i=0;i< response.data.data.length ;i++){
                        dispactch( {
                            type:"ADD_ACREDITACION_ENVIADO",
                            data:response.data.data[i]
                        })

                        dispactch( {
                            type:"DELETE_ACREDITACION",
                            data:response.data.data[i]
                        })

                    }   
                    message.success(response.data.message)   ;

           } , error=>message.error(error.message));


    };
};

const setReenviarListaAcreditacionEnviado = (request={}) => {

    return dispactch=>{   
             

       
          axios.put(variables.apiBase+"acreditacion",request).then(response=>{
                
               
                    for(let i=0;i< response.data.data.length ;i++){
                        dispactch( {
                            type:"UPDATE_ACREDITACION_ENVIADO",
                            data:response.data.data[i]
                        })

                    }   
                    message.success(response.data.message)   ;

           } , error=>message.error(error.message));


    };
};


export {getListaAcreditacion,getListaAcreditacionEnviado,setListaAcreditacionEnviado,setReenviarListaAcreditacionEnviado};