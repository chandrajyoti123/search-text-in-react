import './ContactComponent.css'
import logo from './logo.png'
import chashni from './chashni.jpg'
const ContactComponent = ({ img, name, time, messege,index }) => {
    const path=window.location.pathname;
  
    return (
        <div id="contact-component-parent" className={path==`/bar${index}`?'active':''} >
            {/* <div className='contact-component-img-body'>
                <img className='contact-component-img' src={img} />
            </div> */}
            <div className='contact-component-img-body'>
                        <div className='dpcontainer'>
                            <img src={img} className='dp' />
                        </div>
                    </div>
            
            <div className='contact-component-body'>
                <div className='contact-component-body1'>
                    <div className='name'>{name}</div>
                    <div className='time '>{time}</div>
                </div>
                <div className='contact-component-body2'>{messege}</div>

            </div>
            

        </div>
    )
}
export default ContactComponent;