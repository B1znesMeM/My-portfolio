import '../Style/reset.css';
import '../Style/Header-style.css';

const Header = () => {

    
    
    return(
        
    <div className="header">

        <div className="container">

        <div className="header__inner">

            <div className="header__text">

                <h2 className="header__title">Hi, my name is Arkady and I am a <span className="header__span"> Programmer</span></h2>

                <p className="header__p">I will make you a website , you can see my profile:</p>

                    <div className='header__button'>

                        <a className='header__btn' href="#!">Download CV</a>
                    </div>


            </div>

        </div>  {/*header__inner */}

      </div>  {/* container */}

    </div> //header
    );
}

export default Header;