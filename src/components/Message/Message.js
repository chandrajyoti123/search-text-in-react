import './Message.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark,faPen } from "@fortawesome/free-solid-svg-icons";
const Message=({text,deletefun,obj,editmessage,index,id})=>{
    const date = new Date();
      const hourse=date.getHours()
      const minute=date.getMinutes()
    return(
        <div className='maincontainerofmessage'>
            <div className='edit'>
                 <span className='editpencont'>
                    <FontAwesomeIcon icon={faPen} className='editpen'  onClick={()=>{
                editmessage(id)
                   }}/>
            </span>
            </div>
        <div className="containerofmessage" id={id}>
            <span><FontAwesomeIcon icon={faXmark} className='delete' onClick={()=>{
                deletefun(obj)
            }}/></span>
           

           <div className='message'>{text}</div>
           <div className='timeofmessage'>{hourse}:{minute}{hourse>12?"pm":"am"}</div>

        </div>
        </div>
    )

}
export default Message;