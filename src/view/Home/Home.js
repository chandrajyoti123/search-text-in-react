import chashni from './chashni.jpg'
import whatsapp from "./whatsapp1.png"
import './Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashArrowUp, faMagnifyingGlass, faEllipsisVertical, faVideo, faMicrophone, faPlus, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faFaceGrin } from "@fortawesome/free-regular-svg-icons";
import { ContactData } from '../../contactdata/contactdata';
import ContactComponent from '../../components/ContactComponent/ContactComponent';
import { useEffect, useState } from 'react';
import logo from './logo.png'
import { Link } from 'react-router-dom';
const Home = ({ name, activity }) => {
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
                        return (<Link to={`/bar${index}`}><ContactComponent img={img} name={name} time={time} messege={messege} /></Link>)

                    })
                }
            </div>
            <div className="rightsideofhome">
                <div className='rightsidetop'>
                    <div className='parentofdp'>
                        <div className='dpcontainer'>
                            <img src={chashni} className='dp' />
                        </div>
                    </div>
                    <div className='contactinfo'>
                        <div className='name'>{name == null ? "chanshni" : name}</div>
                        <div className='activity-status'>{activity == null ? "online" : activity}</div>

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



                </div>
                <div className='rightsidebottom'>
                    <div className='media'>
                        <span><FontAwesomeIcon icon={faFaceGrin} className='iconofribtm' /></span>
                        <span><FontAwesomeIcon icon={faPlus} className='iconofribtm' /></span>

                    </div>
                    <div className='typemessege'>
                        <input className='typeinpute' type='text' placeholder='Type a message' />

                    </div>
                    <div className='mic'>
                        <span><FontAwesomeIcon icon={faMicrophone} className='iconofribtm' /></span>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default Home;