import "../Templates/Template.css";
import Footer from "../../components/Organisms/Footer/Footer";
// import Header from "../../components/Organisms/Header/Header";
import PropTypes from "prop-types";

const Template = ({ children }) => {
  return (
    <div className="body">
      {/* <Header name="login" /> */}
      <main className="main bg-dark">{children}</main>
      <Footer />
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
