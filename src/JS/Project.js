import { useParams } from 'react-router-dom';
import { projects } from './projectsList';
import Footer from '../JS/Footer';


const Project = () => {

    const {id} = useParams();

    const project = projects[id];



    return(
        <>
    <main className="main">

        <div className="container">

            <div className="project_detailes">

                <h1 className="big-title">{project.title}</h1>

                <img src={project.img} className="big_img" />

                <div>
                    <p className="big__p"><span className="big__span">Skills: </span>{project.skills}</p>
                </div>

            </div>
            
        </div>

    </main>
    </>
    )
}


export default Project;