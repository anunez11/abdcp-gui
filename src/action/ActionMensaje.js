import axios from "axios";
import variables from "../variable";
import { message } from 'antd';

const getListaMensaje = (request={}) => {

    return dispactch=>{   
             

       
          axios.post(variables.apiBase+"mensajes/lista",request).then(response=>{
                    dispactch( {
                        type:"GET_MENSAJE",
                        data:response.data
                    })
           } , error=>message.error(error.message));


    };
};

export {getListaMensaje} ;