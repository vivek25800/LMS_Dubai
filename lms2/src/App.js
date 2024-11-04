import './App.css'
import React, { useState } from 'react';
import AdminDashboard from './Components/AdminDashboard.js';
import AllCourseCategory from './Components/AllCourseCategory.js';
import CreateCategoryList from './Components/CreateCategoryList.js';
import AllSubjectList from './Components/AllSubjectList.js';
import CreateNewSubject from './Components/CreateNewSubject.js';
// import TagCourse from './Components/TagCourse.js';
import LabelCourse from './Components/LabelCourse.js';
import AllCourseList from './Components/AllCourseList.js';
import CreateNewCourse from './Components/CreateNewCourse.js';
import AllNotice from './Components/AllNotice.js';
import AddNotice from './Components/AddNotice.js';
import Register from './Components/Register.js';
import Employeeregister from './Components/EmployeeRegister.js';
// import Rechart from './Components/Rechart/Rechart.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TagCourse from './Components/TagCourse.js';
import LoginForm from './Components/LoginForm.js';
import StudentsRegister from './Components/StudentsRegister.js';
import StudentDashboard from './Components/Student Dashboard/StudentDashboard.js';
import AllEmployeeList from './Components/AllEmployeeList.js';
import AllStudentsList from './Components/AllStudentsList.js';
import TrainingCalenderForm from './Components/TrainingCalenderForm.js';
import EmployeeDashboard from './Components/Employee Dashboard/EmployeeDashboard.js';
import TrainingCalendarDemo from './Components/TrainingCalendarDemo.js';
import ViewTrainingDetails from './Components/ViewTrainingDetails.js';
import Attendence from './Components/Attendence.js';
import Loader from './Components/DemoComponent/Loader.js';
import OnJobTraining from './Components/OnJobTraining.js';
import EmployeeIdsInput from './Components/DemoComponent/EmployeeIdsInput.js';
import OjtOjaIna from './Components/OjtOjaIna.js';
import SearchableSelectBox from './Components/DemoComponent/SearchableSelectBox.js';
import Demo from './Components/DemoComponent/demo.js';
import SidebarTwo from './Components/DemoComponent/SidebarTwo.js';
// import { FileUpload } from '@mui/icons-material';
import FileUpload from './Components/DemoComponent/FileUpload.js';
import BulkForm from './Components/DemoComponent/BulkForm.js';
import AddNomination from './Components/AddNomination.js';
import CourseList from './Components/Courses/CourseList.js';
import InProgressCourse from './Components/Courses/InProgressCourse.js';
import SavedCourse from './Components/Courses/SavedCourse.js';
import MyLibrary from './Components/Courses/MyLibrary.js';
import LearningHistoryCourse from './Components/Courses/LearningHistoryCourse.js';
import MyCareerJourney from './Components/Courses/MyCareerJourney.js';
import StartCourse from './Components/Courses/StartCourse.js';
import Assessment from './Components/Create Assessment/Assessment.js';
import TakeAssessment from './Components/TakeAssessment.js';
import CreateCAT from './Components/Create CAT/CreateCAT.js';
import AddInterviewQuestions from './Components/Create CAT/AddInterviewQuestions.js';
import CreateQuize from './Components/Create Quize/CreateQuize.js';
import ConductCAT from './Components/Conduct CAT/ConductCAT.js';
import CreateTrainingBudget from './Components/Create Training Budget/CreateTrainingBudget.js';
import CourseBanner from './Components/Landing Page/CourseBanner.js';
import LandingPage from './Components/Landing Page/LandingPage.js';
import CreateAssessment from './Components/Create Assessment/CreateAssessment.js';
import AddDifferentSection from './Components/Create Assessment/AddDifferentSection.js';
import TrainingRequestForm from './Components/Training Request Form/TrainingRequestForm.js';
import ViewTrainingRequestList from './Components/Training Request Form/ViewTrainingRequestList.js';
import TRFPendingForApproval from './Components/Training Request Form/TRFPendingForApproval.js';
import ServiceProviderRegister from './Components/ServiceProviderRegister.js';

// import TrainingCalendar from './Components/TrainingCalendar.js';





function App() {  

  // const [events] = useState({
  //   '2024-09-20': ['React Basics', 'JavaScript Mastery'],
  //   '2024-09-25': ['Advanced CSS Techniques', 'UI/UX Design'],
  //   '2024-09-28': ['Backend Development with Node.js'],
  // }); 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/register/studentregister' element={<StudentsRegister/>}></Route>
        <Route path='/register/employeeregister' element={<Employeeregister/>}></Route>
        <Route path='/AdminPage' element={<AdminDashboard/>} />
        <Route path='/AllCourse' element={<AllCourseCategory/>} />
        <Route path='/createCourse' element={<CreateCategoryList/>}></Route>
        <Route path='/AllSubject' element={<AllSubjectList/>}></Route>
        <Route path='/createSubject' element={<CreateNewSubject/>}></Route>
        <Route path='/tagCourse' element={<TagCourse/>}></Route>
        <Route path='/labelCourse' element={<LabelCourse/>}></Route>
        <Route path='/AllCourseList' element={<AllCourseList/>}></Route>
        <Route path='/CreateNewCourse' element={<CreateNewCourse/>}></Route>
        <Route path='/Allnotice' element={<AllNotice/>}></Route>
        <Route path='/addnotice' element={<AddNotice/>}></Route>
        <Route path='/AllEmployeList' element={<AllEmployeeList/>}></Route>
        <Route path='/AllStudentList' element={<AllStudentsList/>}></Route>
        <Route path='/Studentdash' element={<StudentDashboard/>}></Route>
        <Route path='/Employeedash' element={<EmployeeDashboard/>}></Route>
        <Route path='/createtraining' element={<TrainingCalendarDemo />}></Route>
        <Route path='/AddEvent' element={<TrainingCalenderForm/>}></Route>
        <Route path='/viewTraining' element={<ViewTrainingDetails/>}></Route>
        <Route path='/attendence' element={<Attendence/>}></Route>
        <Route path='/jobtraining' element={<OjtOjaIna/>}></Route>
        <Route path='/assessment' element={<Assessment/>}></Route>
        <Route path='/takeAssessment' element={<TakeAssessment/>}></Route>
        <Route path='/createcat' element={<CreateCAT/>}></Route>
        <Route path='/createQuize' element={<CreateQuize/>}></Route>
        <Route path='/conductcat' element={<ConductCAT/>}></Route>
        <Route path='/createTrainingBudget' element={<CreateTrainingBudget/>}></Route>
        <Route path='/landingpage' element={<LandingPage/>}></Route>
        <Route path='/createAssessment' element={<CreateAssessment/>}></Route>
        <Route path='/addsection' element={<AddDifferentSection/>}></Route>
        <Route path='/trainingrequestform' element={<TrainingRequestForm/>}></Route>
        <Route path='/viewtrainingrequest' element={<ViewTrainingRequestList/>}></Route>
        <Route path='/pendingtrf' element={<TRFPendingForApproval/>}></Route>
        <Route path='serviceProverRegistration' element={<ServiceProviderRegister/>}></Route>

        <Route path='/maincourse' element={<CourseList/>}></Route>
        <Route path='/mycareerjourney' element={<MyCareerJourney/>}></Route>
        <Route path='/myLibrary' element={<MyLibrary/>}></Route>
        <Route path='/progreesCourse' element={<InProgressCourse/>}></Route>
        <Route path='/savedCourse' element={<SavedCourse/>}></Route>
        <Route path='/learningHistory' element={<LearningHistoryCourse/>}></Route>
        <Route path='/startCourse' element={<StartCourse/>}></Route>
      </Routes>

      {/* <MatchTheFollowingForm/> */}

      {/* <CourseBanner/> */}
      {/* <LandingPage/> */}

      {/* <RatingQuestion/> */}

      {/* <AddInterviewQuestions/> */}

      {/* <QuestionForm/> */}


      {/* <AddNomination/> */}

      {/* <BulkForm/> */}

      {/* <FileUpload/> */}

      {/* <SidebarTwo/> */}

      {/* <SearchableSelectBox/> */}

      {/* <OnJobTraining/> */}

      {/* <Attendence/> */}
 {/* <Demo/> */}
 {/* <TagCourse/> */}

 {/* <AllSubjectList/> */}

 {/* <AllSubjectList/> */}

 {/* <AllCourseList/> */}

 {/* <CreateNewCourse/> */}

 {/* <Employeeregister/> */}
 {/* <OjtOjaIna/> */}

 {/* <ViewTrainingDetails/> */}

 {/* <AdminDashboard/> */}

 {/* <AllStudentsList/> */}

 {/* <EmployeeIdsInput/> */}

 {/* <AllEmployeeList/> */}

      {/* <BulkRegisterForm/> */}

       {/* <Register/> */}
       {/* <AreaOne/> */}

       {/* <LineOne/> */}

       {/* <Loader/> */}

       {/* <StudentsRegister/> */}

       {/* <StudentDashboard/> */}

       {/* <EmployeeDashboard/> */}

       {/* <TrainingCalendar/> */}

       {/* <TrainingCalendarDemo/> */}

       {/* <LoginForm/> */}

       {/* <Barchartone/> */}
      </BrowserRouter>

      
     

      {/* <GraphReport/> */}

      {/* <Rechart/> */}

      {/* <Barone/> */}

      {/* <Option/> */}

      {/* <Modalexp/> */}

      {/* <Textedit/> */}

      

      {/* <App1/> */}
    </>
  )
}

export default App
