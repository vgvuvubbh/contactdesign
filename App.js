import { Routes, Route } from "react-router-dom";
import {Contact} from "./Contact/Contact";

 function App() {
  return (
    <Routes>
      <Route path="/" element={<Contact />} />
    </Routes>
  );
}

 export default App;
