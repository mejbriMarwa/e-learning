import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import ProtectedRouter from "./components/ProtectedRouter";
import ProtectedRouteAdmin from "./components/ProtectedRouteAdmin";
import "./Style.scss";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Planning from "./pages/Planning";
import Cours from "./pages/Cours";
import AllCours from "./pages/AllCours";
import LearnerList from "./pages/LearnerList";
import CoursFrench from "./Cours/CoursFrench";
import CoursEnglish from "./Cours/CoursEnglish";
import CoursGerman from "./Cours/CoursGerman";
import CoursManagement from "./Cours/CoursManagement";
import CoursSC from "./Cours/CoursSC";
import Coursdevelopment from "./Cours/Coursdevelopment";
import ErrPage from "./pages/ErrPage";
import AddCours from "./pages/AddCours";
import ChatPage from "./pages/ChatPage";
import ChatInstructor from "./pages/ChatInstructor";
import MeetingPage from "./pages/MeetingPage";
import AddMeeting from "./pages/AddMeeting";
import AllMeeting from "./pages/AllMeeting";
import Payment from "./pages/Payment";
import Postuler from "./pages/Postuler";
import Candidates from "./pages/Candidates";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* non connectée */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Planning" element={<Planning />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />

        {/* tous connectée */}
        <Route element={<ProtectedRouter />}>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Cours" element={<Cours />} />
          <Route path="/AddCours" element={<AddCours />} />
          <Route path="/AllCours" element={<AllCours />} />
          <Route path="/LearnerList" element={<LearnerList />} />
          <Route path="/ChatPage" element={<ChatPage />} />
          <Route path="/ChatInstructor" element={<ChatInstructor />} />
          <Route path="/meetingPage" element={<MeetingPage />} />
          <Route path="/AllMeeting" element={<AllMeeting />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/CoursFrench" element={<CoursFrench />}></Route>
          <Route path="/CoursEnglish" element={<CoursEnglish />}></Route>
          <Route path="/CoursGerman" element={<CoursGerman />}></Route>
          <Route path="/CoursManagement" element={<CoursManagement />}></Route>
          <Route path="/CoursSC" element={<CoursSC />}></Route>
          <Route
            path="/Coursdevelopment"
            element={<Coursdevelopment />}
          ></Route>
          <Route path="/addMeeting" element={<AddMeeting />} />
        </Route>
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/Candidates" element={<Candidates />} />
        <Route path="/Postuler" element={<Postuler />} />

        {/* admin connectée */}
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
        
        {/* aucune page existe */}
        <Route path="*" element={<ErrPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
