import "../Templates/Template.css";
import Footer from "../../components/Organisms/Footer/Footer";
// import Header from "../../components/Organisms/Header/Header";
import PropTypes from 'prop-types';


const Template = ({ children }) => {
    return (
        <body>
      {/* <Header name="login" /> */}
            <main class="main bg-dark">
                {children}
            </main>
            <Footer />
        </body>
    )
}

Template.propTypes = {
    children: PropTypes.node 
}

export default Template;