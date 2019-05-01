const validarForm =(tipo,error=[],nombreCampo,value)=>{
    console.log(" value de validar ",value);
   
    let resutaldo=[...new Set(error)];
    
    switch(tipo){
      
        case "NO_NULL" :  
                           if(value.trim()==="") {
                                error.push("El campo "+nombreCampo+" es requerido ");
                               /// console.log("resultado ERROR ",error)
                                resutaldo=[...new Set(error)];
                               // console.log("resultado NOT NULL ",resutaldo)
                           }
        break ;
        case "MAX_100" :  
        if(value >100) {
            error.push("El maximo numeros permitido es de 100  ");
             resutaldo=[...new Set(error)];
           ///  console.log("resultado MAX_100 ",resutaldo)
        }
        break;
        case "MIN_1" :  
        if(value <=0) {
             error.push("El rango final debe ser mayor al inicial  ");
             resutaldo=[...new Set(error)];
            /// console.log("resultado MIN_1 ",resutaldo)
        }
        break;
        case "MAX_1" :  
                if(value <=0) {
                    error.push("No hay numeros registrados  ");
                    resutaldo=[...new Set(error)];
                    /// console.log("resultado MIN_1 ",resutaldo)
                }
        break ;
        
        default :resutaldo=[...new Set(error)];
                // console.log("resultado  ",resutaldo);
    } 
  
  return resutaldo;

}