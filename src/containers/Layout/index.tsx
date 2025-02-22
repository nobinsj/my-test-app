import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";

const Layout = () => {

  return (
    <div className={styles["layout"]}>
      <header className={styles["layout__header"]}>
        Header
      </header>
      <main className={styles["layout__main"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
