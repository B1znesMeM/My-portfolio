import Project from "../project/project";
import { projects } from "./projectsList";
import '../Style/Project-style.css';


const Projects = () => {

    return(
        <main className="main">
            
            <div className="container">

                <h1 className="project-h1">Projects</h1>

                <ul className="project-content">

                    {projects.map(( project , index) => {

                        return(

                            <Project key={index} title={project.title} img={project.img} index={index} />

                        )

                    })}

                </ul>

            </div>

        </main>
        )
}

export default Projects;