import '../Style/After-style.css';
import YandexPhoto from '../Img-Portfolio/Yandex.jpeg';
import SynergyPhoto from '../Img-Portfolio/synergy.png';

const After = () => {



return(
<div className='after'>

<div className='container'>

    <div className='after__item'>

        <div className='after__list'>

    <div className='after__topTitle'>

        <h1 className='after__title'>
            Arkadiy Korochkin - Web-programmer.
        </h1>

        <p className='after__p'>
            Верстщик сайтов, обучающий в Университете Синергия на факультете программирования.
        </p>

        <h3 className='after__language'>
            Знаю такие языки как - <span className='span__language'>Javascript, HTML, CSS, SASS, ReactJS, Начинаю изучать PHP.</span>
        </h3>

    </div>

    <div className='after__biography'>

        <div className='biography__text'>

            <div className='biography__paragraph'>

                <p className='paragraph'>Свой путь начал в 2022 году на бесплатном курсе Яндекс Практикум, появилась мечта стать разработчиком в Яндекс. После прохождении бесплатного курса. Увидев рекламу Университета Синергия. Решил что нужно подать заявление. После подачи и получения ответа о зачислении. Углубился в изучение программирования. Начал смотреть вебинары и видеоролики по верстке сайтов. Собираюсь изучить такие языки как Python, PHP, Go.</p>

            </div>

        </div>
    
    </div>

    </div>

    <div className='img__after'>

        <div className='Yandex__img'>

            <img className='img-yandex' src={YandexPhoto}/>

        </div>

        <div className='Synergy__img'>

            <img className='img-synergy' src={SynergyPhoto}/>

        </div>

    </div>

    </div>

</div>  

</div>  /* After */
);
}

export default After;