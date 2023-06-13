import { NavLink } from "react-router-dom";
import '../Style/Project-style.css';
import '../Style/reset.css';

const Project = ({ title , img , index}) => {
return(
    <NavLink to={`/project/${index}`} className="project__navlink">
        <li className="project">
            <img src={img} alt={title} className="project_img" />
            <br />
            <h3 className="project_title">{title}</h3>
        </li>
    </NavLink>
)
}

export default Project;