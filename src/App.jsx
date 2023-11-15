import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tagsinput/react-tagsinput.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Index';
import ScrollToTop from './ScrollToTop';
import Provider from './Pages/Provider';
import Patient from './Pages/Patient';
import Chat from './Pages/chat';
import Login from './Pages/Login';
import CreateAccount from './Pages/SignuP/CreatemainAccount.jsx';
import SignUp from './Pages/SignuP/SignUp';
import Forget from './Pages/Forget.jsx/Forget';
import ConfrimPassword from './Pages/Forget.jsx/ConfrimPassword';
import LabTest from './Pages/Patient/Lab Test';
import LabRequest from './Pages/Patient/Lab Test/LabRequest';
import Condition from './Pages/Patient/Condition-Disease';
import Prescription from './Pages/Patient/Prescription';
import RequestPrescription from './Pages/Patient/Prescription/Request Prescription';
import RequestMedication from './Pages/Patient/Prescription/Medications/RequestMedication.jsx';
import Medications from './Pages/Patient/Prescription/Medications/MedicationsForm.jsx';

import ConditionForm from './Pages/Patient/Condition-Disease/ConditionForm';
import MyCharts from './Pages/Patient/MyCharts';
import Payment from './Pages/Payment';
import RequestedPrescription from './Pages/Patient/MyCharts/RequestedPrescription/INDEX.JSX';
import RxRequest from './Pages/Provider/NewRxRequests';
import RecentActivitypage from './Pages/Provider/NewRxRequests/RecentActivity.jsx';
import CollaguesPage from './Pages/Provider/NewRxRequests/Collagues.jsx';
import PaitentDetail from './Pages/Provider/NewRxRequests/PaitentDetail';
import Invite from './Pages/Provider/NewRxRequests/InvitePatients.jsx';
import MessagePatients from './Pages/Provider/NewRxRequests/MessagePatients.jsx';
import Practicestates from './Pages/Provider/NewRxRequests/PracticeStates.jsx';

import RequestedRxForm from './Pages/Provider/NewRxRequests/RequestedRxForm';
import ReviewPrescribePage from './Pages/Provider/NewRxRequests/ReviewPrescribePage';
import ProviderChart from './Pages/Provider/My Chart';
import OrdermySelf from'./Pages/Provider/NewRxRequests/FormOrdermySelf.jsx';
import Profile from './Pages/chat/profile.jsx';

// import LabRequest from "./Pages/Lab Test/LabRequest";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Provider' element={<Provider />} />
          <Route path='/Patient' element={<Patient />} />
          <Route path='/Chat' element={<Chat />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/CreateAccount' element={<CreateAccount />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Forget' element={<Forget />} />
          <Route path='/ConfrimPassword' element={<ConfrimPassword />} />
          <Route path='/LabTest' element={<LabTest />} />
          <Route path='/Prescription' element={<Prescription />} />
          <Route path='/Condition' element={<Condition />} />
          <Route path='/LabRequest' element={<LabRequest />} />
          <Route path='/Practicestates' element={<Practicestates />} />
          <Route
            path='/RequestPrescription'
            element={<RequestPrescription />}
          />
          <Route path='/RequestMedication' element={<RequestMedication />} />
          <Route path='/ConditionForm' element={<ConditionForm />} />
          <Route path='/myCharts' element={<MyCharts />} />
          <Route path='/Payment' element={<Payment />} />
          <Route
            path='/RequestedPrescription'
            element={<RequestedPrescription />}
          />
          <Route path='/Medications' element={<Medications />} />
          <Route path='/RxRequest' element={<RxRequest />} />
          <Route path='/RecentActivitypage' element={<RecentActivitypage />} />
          <Route path='/CollaguesPage' element={<CollaguesPage />} />
          <Route path='/PaitentDetail' element={<PaitentDetail />} />
          <Route path='/Invite' element={<Invite />} />
          <Route path='/MessagePatients' element={<MessagePatients />} />
          <Route path='/RequestedRxForm' element={<RequestedRxForm />} />
          <Route
            path='/ReviewPrescribePage'
            element={<ReviewPrescribePage />}
          />
          <Route path='/ProviderChart' element={<ProviderChart />} />
          <Route path='/OrdermySelf' element={<OrdermySelf />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
