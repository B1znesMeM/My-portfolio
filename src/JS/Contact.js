import '../Style/reset.css';
import '../Style/Contact-style.css';
import Telegram from "../Icons-portfiolio/telegram.png";
import VK from "../Icons-portfiolio/VK.png";

const Contact = () => {
    return(
    <>

    <div className="Contact">

        <div className="container">

            <div className='contact__inner'>

            <ul className='contact-content'>

                <li className='Number-phone'>

            <h1 className="phone-h1"> My contact: <a className='number' href='#!'>+7 938 137 67 06</a></h1>

            </li>

            <li className='email'>

            <a className='email-a' href='#!'>

            <p className="phone-email">kosmosdrago@hotmail.com</p>

            </a>

            </li>  
            
            <li className='messenger'>

                <h3 className='messenger__title'>
                    Telegram \ VK
                </h3>

                <div className='messenger-icons'>

                    <a className='icon-telegram' href="https://t.me/Cheburek512" target='_blank'>

                    <img className='icon-img' src={Telegram} />

                    </a>

                    <a className='icon-VK' href='https://vk.com/id617417478' target="_blank">

                    <img className='icon-img' src={VK} />

                    </a>
                </div>

            </li>

            </ul>

            </div>

        </div>

    </div>
    
    </>
    )
}

export default Contact;