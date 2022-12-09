import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

const GalleryNavigation = ({ galleries }) => {
  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink activeClassName="active" to="/">
        Back
      </NavLink>
      <ul>
        {galleries.map((record) => (
          <li key={record.id}>
            <NavLink activeClassName="active" to={`/galleries/${record.id}`}>
              {record.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GalleryNavigation;
