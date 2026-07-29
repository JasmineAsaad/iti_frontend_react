import { NavLink, Outlet } from "react-router-dom";

export default function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
      <p className="text-muted">
       Welcome to our online store! We are dedicated to delivering a seamless e-commerce experience that combines high quality, product diversity, and competitive prices. From day one, our mission has been to offer authentic products tailored to your everyday needs, backed by secure payment options and fast delivery straight to your doorstep.
      </p>
      <ul className="nav nav-pills mb-3">
        <li className="nav-item">
          <NavLink className="nav-link" to="/gallery" end>
            MORE
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/gallery/photos">
            PHOTOS
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}