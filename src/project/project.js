import { NavLink } from "react-router-dom";

const Project = ({ title , img , index}) => {
return(
    <NavLink to={`/project/${index}`}>
        <li className="project">
            <img src={img} alt={title} className="project_img" />
            <h3 className="project_title">{title}</h3>
        </li>
    </NavLink>
)
}

export default Project;