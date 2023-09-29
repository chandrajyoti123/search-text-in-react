import './Message.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark,faPen } from "@fortawesome/free-solid-svg-icons";
const Message=({text,deletefun,obj,editmessage,index,id})=>{
    const date = new Date();
      const hourse=date.getHours()
      const minute=date.getMinutes()
    return(
        <div className="message" id={id}>
            <span><FontAwesomeIcon icon={faXmark} className='delete' onClick={()=>{
                deletefun(obj)
            }}/></span>
            <span><FontAwesomeIcon icon={faPen} className='edit' onClick={()=>{
                editmessage(index)
            }}/></span>

           {text}
           <div className='timeofmessage'>{`${hourse}:${minute}pm`}</div>

        </div>
    )

}
export default Message;