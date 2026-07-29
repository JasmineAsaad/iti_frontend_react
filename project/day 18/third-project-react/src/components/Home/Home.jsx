import HomeStyle from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={`text-center py-4 ${HomeStyle.hero}`}>
      <h1>MY E-COMMERCE</h1>
      <p>
       Welcome to our online store! We are dedicated to delivering a seamless e-commerce experience that combines high quality, product diversity, and competitive prices. From day one, our mission has been to offer authentic products tailored to your everyday needs, backed by secure payment options and fast delivery straight to your doorstep. More than just selling products, we strive to build long-term trust with our customers through a dedicated support team ready to assist you every step of the way.
      </p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link to="/gallery" className="btn btn-outline-primary">
           Gallery
        </Link>
        <Link to="/store" className="btn btn-outline-success">
           Store
        </Link>
      </div>
    </div>
  );
}