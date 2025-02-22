import styles from "./index.module.scss";
import { useNavigate } from "react-router";
import {  Button } from "@mui/material";

const QrHome = () => {
const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/qr/cid/aid/qrId`);
  };

  return (
    <section className={styles["qrHome"]}>
        <Button variant="outlined" onClick={handleNavigate}>go Home</Button>
  
    </section>
  );
};

export default QrHome;
