
import './ContactCard.css'
const ContactCard=({name,mobileno})=>{
    return(
<div className="contactcard">
    <div className="contactname">{name}</div>
    <div className="contactno">{mobileno}</div>
</div>
    )
}
export default ContactCard;