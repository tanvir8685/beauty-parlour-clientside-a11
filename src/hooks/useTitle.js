import { useEffect } from "react"

const useTitle= title =>{
    useEffect(()=>{
        document.title=`${title} -Rhadik's Parlour`;
    },[title])
};
export default useTitle;