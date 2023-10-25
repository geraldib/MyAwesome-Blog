import Logo from "../layout/Logo";
import Link from "next/link";
import classes from "./main-navigation.module.css";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <Link href="/" legacyBehavior={false}>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
