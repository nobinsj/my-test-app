import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import styles from "./index.module.scss";

const NoMatchRoute = () => {
  const navigate = useNavigate();
  return (
    <Box className={styles["pageNotFound"]}>
      <Box className={styles["pageNotFound__container"]}>
        <h1 className={styles["pageNotFound__container__title"]}>
          no page
        </h1>
        <Button variant="outlined" onClick={() => navigate("/")}>
          go back 
        </Button>
      </Box>
    </Box>
  );
};

export default NoMatchRoute;
