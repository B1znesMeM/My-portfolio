import Project from "../project/project";
import { projects } from "./projectsList";
import '../Style/Project-style.css';


const Projects = () => {

    return(
        <main className="main">
            
            <div className="container">

                <h1 className="Workes-h1">Works</h1>

                <h2 className="workes__title">Pizzeria Freddy Fazbers sister location</h2>

                <ul className="works">

                    {projects.map(( project , index) => {

                        return(

                            <Project key={index} title={project.title} img={project.img} index={index} />

                        )

                    })}

                </ul>

                <h2 className="workes__title2">Pizzeria freddy fazbers 2</h2>

            </div>

        </main>
        )
}

export default Projects;