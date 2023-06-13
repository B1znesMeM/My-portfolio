import '../Style/reset.css';
import '../Style/Home-style.css';


const Home = () => {
    return(
        <>

    <div className="Home">

        <div className="container">

            <ul className='content__list'>

                <li className='content__list-item'>
                    <h2 className='home-h2'>Frontent</h2>
                    <p className='content__item'>
                        HTML, CSS, Javascript, ReactJS, SASS, 
                    </p>
                </li>

                <li className='content__list-item'>
                    <h2 className='home-h2'>Backend</h2>
                    <p className='content__item'>
                        Node.js
                    </p>
                </li>
            </ul>
            

        </div>

    </div>
    </>
    )
}

export default Home;