import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import Homepage from "./components/landingPage/homePage/Homepage";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Faqs from "./components/faqs/Faqs";
import ExamBody from "./components/onboarding/ExamBody";
import PracticeTest from "./components/onboarding/PracticeTest";
import TestPanel from "./components/onboarding/TestPanel";
import ExamSubject from "./components/onboarding/ExamSubjects";
import AssessmentBoard from "./components/examBoard/AssessmentBoard";
import SubjectSelection from "./components/examBoard/SubjectSelection";
import QuestionBoard from "./components/examBoard/QuestionBoard";
import {useDispatch} from "react-redux";
import {setAuthorisationToken} from "./APIHandler/APIController";
import {setCurrentUser} from "./reduxController/actions/userActions";
import ResultBoard from "./components/examBoard/ResultBoard";
import UserDashboardLayout from "./components/dashboard/student/UserDashboardLayout";
import ExamDetails from "./components/dashboard/student/ExamDetails";
import StudentProfile from "./components/dashboard/student/StudentProfile";
import ExamTest from "./components/onboarding/ExamTest";
import SponsorSignup from "./components/sponsor/SponsorSignup";
import SponsorDashboardLayout from "./components/dashboard/sponsor/SponsorDashboardLayout";

function App() {
    const dispatch = useDispatch();
//load the user data from local storage to redux
    if (localStorage.getItem('af_tk') && localStorage.getItem('af_tk')!== undefined  && localStorage.getItem('af_tk') !== null && localStorage.getItem('af_tk')!== "undefined" && localStorage.getItem('af_user')  &&
        localStorage.getItem('af_user') !== undefined && localStorage.getItem('af_user') !== "undefined" && localStorage.getItem('af_user') !== null) {
        setAuthorisationToken(localStorage.getItem('af_tk'));
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('af_user'))));
    }

  return (
      <Switch>
        <Route exact path={'/'} component={Homepage}/>
        <Route exact path={'/login'} component={Login}/>
        <Route exact path={'/sponsorship'} component={SponsorSignup}/>
        <Route exact path={'/signup'} component={Signup}/>
        <Route exact path={'/faqs'} component={Faqs}/>
        <Route exact path={'/exams'} component={ExamBody}/>
        <Route exact path={'/exam-test/:id'} component={ExamTest}/>
        <Route exact path={'/practice-exams'} component={PracticeTest}/>
        <Route exact path={'/tests/:id'} component={TestPanel}/>
        <Route exact path={'/subjects/:id'} component={ExamSubject}/>
        <Route exact path={'/assessment/:id'} component={AssessmentBoard}/>
        <Route exact path={'/assessment/subject/:id'} component={SubjectSelection}/>
        <Route exact path={'/assessment/question/:id/:index'} component={QuestionBoard}/>
        <Route exact path={'/result/:id'} component={ResultBoard}/>
        <Route path={'/student'} component={UserDashboardLayout}/>
        <Route path={'/sponsor'} component={SponsorDashboardLayout}/>
        <Route path={'/exam-details'} component={ExamDetails}/>
        <Route path={'/user-profile'} component={StudentProfile}/>
      </Switch>
  );
}

export default App;
