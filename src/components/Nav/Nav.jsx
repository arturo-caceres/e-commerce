import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <NavLink className={styles.Nav__link} to="/">
                Home
            </NavLink>
            <NavLink className={styles.Nav__link} to="/products">
                Products
            </NavLink>
            <NavLink className={styles.Nav__link} to="/cart">
                Cart
            </NavLink>
        </nav>
    );
};

export default Nav;
