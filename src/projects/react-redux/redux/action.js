export const incNumber = (value) => {
    return { 
        type: "INCREMENT" ,
        payload:value
    }
 }
 export const decNumber = () => { 
    return {
        type: "DECREMENT" 
    }
}