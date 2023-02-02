import "./App.css";
import Header from "./Header";
import Employees from "./Employees";
import Nav from "./Nav";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Footer from "./Footer";
import Notfound from "./Notfound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/Context";

export default function App() {
  return (
    <DataProvider>
      <Router>
        <Nav />
        <Header />
        <Routes>
          <Route path="/team-allocating-app" element={<Employees />}></Route>
          <Route
            path="/GroupedTeamMembers"
            element={<GroupedTeamMembers />}
          ></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
}
