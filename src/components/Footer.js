import styles from "styles/Footer.module.scss";
import GetIcon from "components/GetIcon";

const Footer = () => {
  return (

    <footer className={styles.footer}>
        <div>
        <GetIcon icon="BsFillHeartFill" size={22} color="#da0037" />
        <p>&copy; 2024 Indian Toy Shop. All rights reserved.</p>

            <a href="#">Facebook</a> | 
            <a href="#">Instagram</a> | 
            <a href="#">Twitter</a>
        </div>
    </footer>
  );
};

export default Footer;

