import { createContext, useState } from "react";
import { food_items } from "../food";
export const dataContext = createContext();
const UserContext=({children})=>{
   const [input,setinput] = useState("");  
   const [cat,setcat] = useState(food_items);  
   const[show,setshow] = useState(false);       
        let data ={
    input,
   setinput,
   cat,
   setcat,
   show,
   setshow
        }  
          return(
 <div>
       <dataContext.Provider value={data}>
       {children}  
          </dataContext.Provider>     
 </div>
          )
}
export default UserContext;