import { useState } from "react";
import "./App.css";
import Login from "./components/login";
import Profile from "./components/profile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState(null);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      {data ? <Profile data={data} /> : <Login setData={setData} />}
    </div>
  );
}

export default App;