import axios from "axios";
import variables from "../variable";
import { message } from 'antd';

const getListaCliente = (request={}) => {

    return dispactch=>{   
             
        dispactch( {
            type:"GET_CLIENTE",
            data:[]
        })
       
          axios.post(variables.apiBase+"cliente/lista",request).then(response=>{
                    dispactch( {
                        type:"GET_CLIENTE",
                        data:response.data
                    })
           } , error=>message.error(error.message));


    };
};

const setActualizarCliente = (request={},id) => {

    return dispactch=>{   
             

       
          axios.put(variables.apiBase+"cliente/"+id,request).then(response=>{
                    dispactch( {
                        type:"UPDATE_CLIENTE",
                        data:response.data.data
                    })
                  //  console.log(" Actualizar respueta ",response.data.message)
                    message.success(response.data.message)   ;
           }, error=>message.error(error.message)  );


    };
};
const setActualizarEstadoCliente = (request={}) => {

    return dispactch=>{   
             

       
          axios.put(variables.apiBase+"cliente",request).then(response=>{
                   for(let i=0;i< response.data.data.length ;i++){
                            dispactch( {
                                type:"UPDATE_CLIENTE",
                                data:response.data.data[i]
                            })

                   }
                  // console.log(" Actualizar respueta ",response)
                   message.success(response.data.message)   ;
           } );


    };
};
const eliminarCliente = (request=[]) => {
   
       

    return dispactch=>{ 
          axios.delete(variables.apiBase+"cliente", { data: request.map(item=>item.idCliente) } ).then(response=>{
              for(let i=0;i<request.length ;i++){
                dispactch( {
                    type:"DELETE_CLIENTE",
                    data:request[i]
                })
              }
              message.success(response.data.message)   ;
           } );


    };
};


const setCrearCliente = (request={}) => {

    return dispactch=>{   
             

       
          axios.post(variables.apiBase+"cliente",request).then(response=>{
                    dispactch( {
                        type:"ADD_CLIENTE",
                        data:response.data.data
                    });
                    message.success(response.data.message)   ;
           } );


    };
};

const getClientedId = (id=0) => {

    return dispactch=>{   
             

       
          axios.get(variables.apiBase+"cliente/"+id).then(response=>{
                    dispactch( {
                        type:"GET_CLIENTE_ID",
                        data:response.data
                    })
           } );


    };
};

export  {getListaCliente,setActualizarEstadoCliente,eliminarCliente,getClientedId,setCrearCliente,setActualizarCliente} ;