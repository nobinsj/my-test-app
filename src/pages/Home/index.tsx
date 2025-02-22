import { useNavigate } from "react-router";
import { Button } from "@mui/material";

import styles from "./index.module.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className={styles["home"]}>
      <div>
        <Button variant="outlined" onClick={() => navigate("food")}>go food</Button>
      </div>
    </section>
  );
};

export default Home;
