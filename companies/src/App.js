import "./App.css";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SignIn from "./screens/SignIn";
import LogIn from "./screens/LogIn";
import EditPage from "./screens/EditPage";
import Add from "./screens/Add";
import AddEmployee from "./screens/AddEmployee";
import AddCompany from "./screens/AddCompany";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/signin" component={SignIn} />

          <Route path="/login" component={LogIn} />

          <Route path="/addcompany" component={AddCompany} />

          <Route path="/editpage/:id" component={EditPage} />

          <Route path="/add/:id" component={Add} />

          <Route path="/addemployee/:id" component={AddEmployee} />

          <Route path="/search/:keyword" component={HomeScreen} />

          <Route path="/" component={HomeScreen} exact />
        </Container>  
      </main>
    </Router>
  );
}

export default App;
