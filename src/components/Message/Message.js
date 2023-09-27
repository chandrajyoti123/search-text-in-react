import './Message.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark,faPen } from "@fortawesome/free-solid-svg-icons";
const Message=({text,deletefun,obj,editmessage,index,id})=>{
    return(
        <div className="message" id={id}>
            <span><FontAwesomeIcon icon={faXmark} className='delete' onClick={()=>{
                deletefun(obj)
            }}/></span>
            <span><FontAwesomeIcon icon={faPen} className='edit' onClick={()=>{
                editmessage(index)
            }}/></span>
           {text}

        </div>
    )

}
export default Message;