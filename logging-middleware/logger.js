import axios from "axios";
const API_BASE="http://4.224.186.213/evaluation-service";
export const log=async(stack,level,packages,message,aToken)=>{
    try {
    const response=await axios.post(`${API_BASE}/logs`,{
                "stack":stack,
                "level":level,
                "package":packages,
                "message":message
            },{
        headers: {
        Authorization:`Bearer ${aToken}`,
       }
    });
        console.log(response.data);
        } catch (Error) {
            //console.log(Error);
        }
    
}