import Template from "../../components/Templates/PageTemplate";
import "./PageError.css";

function PageError() {

  return (
    <Template>
      <main className="main-error">
        <p>OUPS</p> <br /> 
        <p>La page que vous recherchez n'existe pas</p>
      </main>
    </Template>
  );
}

export default PageError;