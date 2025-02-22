import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css";

const App = () => {
  return (
      <RouterProvider
        router={routes}
        future={{
          v7_startTransition: true,
        }}
      />
  );
};

export default App;
