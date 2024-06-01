import { useEffect, useState } from "react"

export default function Typing({texts,typingSpeed = 100,deletingSpeed = 50,duration=100}){
    let [string,setString] = useState('');
    let [isDeleting,setIsDeleting] = useState(false);
    let [index,setIndex] = useState(0);
    useEffect(()=>{
        const handleTyping = () => {
            if(!isDeleting)
            {
                if(string.length<texts[index].length)
                {
                    setString(string+texts[index].charAt(string.length));
                }
                else 
                {
                    setTimeout(()=>setIsDeleting(true),duration);
                }
            }
            else
            {
                if(string.length>0)
                {
                    setString(string.slice(0,-1));
                }
                else
                {
                    setIsDeleting(false);
                    setIndex((index+1)%texts.length);
                }
            }
        };
        const timeout = setTimeout(handleTyping,isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeout);
    },[string,isDeleting,index])
    return(
        <div className="typing-effect">
            {string}
            <span className="carat">|</span>
        </div>
    )
}