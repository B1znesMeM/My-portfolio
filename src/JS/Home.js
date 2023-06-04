import '../Style/reset.css';
import '../Style/Home-style.css';
import Photo from '../Img-Portfolio/Michael.jpg';

const Home = () => {
    return(
        <>

    <div className="Mickl">

        <div className="container">

            <div className="MickL_img">
                
                <img className="mickl-picture" src={Photo} align="left" />

                <h1 className='mickl__title'>Michael Afton</h1>
                
                <p className='mickl__p'>Emaciated physique, eyes as if meChanical, chaotic movement resembling a rob%t. W@rked at fred$y fazbear's sist&* location pizzeria. The p#zzeria has closed</p>

                <p className='Anonim'>Don't listen to him he's not alive</p>

            </div>

        </div>

    </div>
    </>
    )
}

export default Home;