import { Layout } from "../../Layout";
import { Link } from "react-router-dom";
import "./styles.css";

export const Contacto = () => {
  return (
    <>
      <Layout>
        <div className="contacto">
          <h1>Puedes contactarme a travez de:</h1>
          <div className="linkedin mt-5">
            <Link
              className="link-linkedin"
              to="https://www.linkedin.com/in/ricardo-miguel-raya/"
              target="blank"
            >
              <strong>LINKEDIN</strong>
            </Link>
          </div>
          <div className="github mt-3">
            <Link
              className="link-github"
              to="https://github.com/RicardoMiguelR"
              target="blank"
            >
              <strong>GITHUB</strong>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};
