import { lazy } from "react";

const QrHome = lazy(() => import("../pages/QrHome"));
const Home = lazy(() => import("../pages/Home"));
const Food = lazy(() => import("../pages/Food"));

export default {
  QrHome,
  Home,
  Food,
};
