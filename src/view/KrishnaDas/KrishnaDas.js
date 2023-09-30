
import Message from '../../components/Message/Message';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashArrowUp, faMagnifyingGlass, faEllipsisVertical, faVideo, faMicrophone, faPlus, faAngleDown,faPaperPlane,faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFaceGrin } from "@fortawesome/free-regular-svg-icons";
import { ContactData } from '../../contactdata/contactdata';
import ContactComponent from '../../components/ContactComponent/ContactComponent';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
const KrishnaDas = ({dp,name,activity }) => {
    const [contactinfo, setContactinfo] = useState(ContactData)
    const [searchvalue, setSearchvalue] = useState('')
    useEffect(() => {
        const filtercontacts = ContactData.filter((contactdata) => {
            const { img, name, time, messege } = contactdata
            const nameofdata = name.toLowerCase()
            const messegeofdata = messege.toLowerCase()
            const searchedvalue = searchvalue.toString()
            return (nameofdata.includes(searchedvalue)) || (messegeofdata.includes(searchedvalue))
        })
        setContactinfo(filtercontacts)
    }, [searchvalue])


    // ----------------inpute------------
    const [messagecon,setMessagecon]=useState([
        // {text:"this is tara"},
        // { text:"this is harashali"},
        // { text:"this is rani"},
        // { text:"this is chandani"},
        // { text:"this is nandani"},


    ])
    useEffect(()=>{
        const readlocal = JSON.parse(localStorage.getItem("krishnadas"));
        if (readlocal && readlocal.length > 0) {
            setMessagecon(readlocal);
          }

    },[])
    const settolocalstorage = (meesage) => {
        const messagevar = JSON.stringify(meesage);
        localStorage.setItem("krishnadas",messagevar);
      };

   const [messagebund,setMessagebund]=useState(messagecon)
    const [text,setText]=useState("")
    const [id,setId]=useState()
    const [isedit,setIsedit]=useState(false)
   const sendMessage=()=>{
    if(text==""){
        return
    }
    const ranid = Math.floor(Math.random() * 1000);
    setId(ranid)
  const obj={
    id:ranid,
text:text
  }
const arr=[...messagecon,obj]
setMessagecon(arr)
setText("")
settolocalstorage(arr)
}
const deletemessage=(obj)=>{
    const index=messagecon.indexOf(obj)
    const virtuallarr=messagecon
    virtuallarr.splice(index,1)
setMessagecon([...virtuallarr])
settolocalstorage(virtuallarr)
}
const editMessage=(id)=>{
    setIsedit(true)
    setId(id)

  messagecon.forEach((meesage)=>{
    if(meesage.id===id){
        const messagestore=meesage
        setText(messagestore.text)
     }

  })

}
const sendeditedtext=()=>{
    let indexto;
    messagecon.forEach((tasklist, i) => {
     if (tasklist.id == id) {
        indexto = i;
      }
    });
    let temparr = messagecon;
    

    temparr[indexto] = {
     
     text:text
      
    };
    setMessagecon([...temparr]);
    setText('')
    setIsedit(false)
    

}
    
    return (
        <div className='container'>
            <div className="letfsideofhome">
                <div className='searchbarparent'>
                    <div className='searchbarofcotact'>
                        <input type='text'
                          placeholder='Search'
                         className='searchfield'
                         value={searchvalue} onChange={(e) => {
                          setSearchvalue(e.target.value)
                       }} />
                    </div>
                    <div className='searchbaricon'>

                    </div>

                </div>
                {
                    contactinfo.map((contactinfodata, index) => {
                        const { img, name, time, messege } = contactinfodata
                        return (<Link to={`/bar${index}`}><ContactComponent img={img} name={name} time={time} messege={messege} index={index} /></Link>)

                    })
                }
            </div>
            <div className="rightsideofhome">
                <div className='rightsidetop'>
                    <div className='parentofdp'>
                        <div className='dpcontainer'>
                            <img src={ dp} className='dp' />
                        </div>
                    </div>
                    <div className='contactinfo'>
                        <div className='name'>{name}</div>
                        <div className='activity-status'>{activity}</div>

                    </div>
                    <div className='calling'>
                        <span><FontAwesomeIcon icon={faTrashArrowUp} className='icon' /></span>
                        <div className='videocall'>
                            <span><FontAwesomeIcon icon={faVideo} className='icon' /></span>
                            <span><FontAwesomeIcon icon={faAngleDown} className='icon' /></span>
                        </div>

                        <span><FontAwesomeIcon icon={faMagnifyingGlass} className='icon' /></span>
                        <span><FontAwesomeIcon icon={faEllipsisVertical} className='icon' /></span>


                    </div>

                </div>
                <div className='rightsidemiddle'>
                    
             {
                messagecon.map((textmessage,i)=>{
                    const {text,id}=textmessage
                    return   <Message text={text} deletefun={deletemessage} obj={textmessage} editmessage={editMessage} index={i} id={id}/>

                })
             }


                </div>
                <div className='rightsidebottom'>
                    <div className='media'>
                        <span><FontAwesomeIcon icon={faFaceGrin} className='iconofribtm' /></span>
                        <span><FontAwesomeIcon icon={faPlus} className='iconofribtm' /></span>

                    </div>
                    <div className='typemessege'>
                        <input className='typeinpute' type='text' placeholder='Type a message' value={text} onChange={(e)=>{
                             setText(e.target.value)
                        }} />

                    </div>
                    <div className='mic'>
                        <span><FontAwesomeIcon icon={text==""?faMicrophone:faPaperPlane} className='iconofribtm' onClick={isedit?sendeditedtext:sendMessage}/></span>
                       

                    </div>

                </div>

            </div>
        </div>
    )
}
export default KrishnaDas;