import reactLogo from "../../assets/react.svg";
import { Link } from "react-router";
import styles from "./header.module.scss";
const Header = () => {
   const navItemsLink = [
      {
         content: "Home",
         href: "/",
      },
      {
         content: "Users",
         href: "/users",
      },
      {
         content: "Books",
         href: "/books",
      },
      {
         content: "Register",
         href: "/register",
      },
   ];

   return (
      <header className={styles["header"]}>
         <div className={styles["header__inner"]}>
            {/* logo */}
            <div className={styles["header__logo"]}>
               <Link to={"/"}>
                  <img src={reactLogo} alt="" />
               </Link>
            </div>
            {/* nav */}
            <nav className="navbar">
               <ul className={styles["navbar__list"]}>
                  {navItemsLink.map((item) => (
                     <li key={item.content}>
                        <Link
                           className={styles["navbar__items--link"]}
                           to={item.href}
                        >
                           {item.content}
                        </Link>
                     </li>
                  ))}
               </ul>
            </nav>
            {/* Action */}
            <div>
               <a href="#!">Login</a>
            </div>
         </div>
      </header>
   );
};
export default Header;
