import Home from "./src/pages/Home/Home";
import Account from "./src/components/Account/Account";
import AccountD from "./src/components/Doctor/AccountD/AccountD";
import Payments from "./src/components/Payments/Payments";
import Login from "./src/pages/Login/Login";
import Health_history_form from "./src/pages/Health_history_form/Health_history_form";
import Register from "./src/pages/Register/Register";
import Prescription_form from "./src/pages/Prescription_form/Prescription_form";
import Health_history from "./src/pages/HealthHistory/HealthHistory";
import Manage_doctors from "./src/components/Manage_doctors/Manage_doctors";
import Manage_patients from "./src/components/Manage_patients/Manage_patients";
import Add_report from "./src/pages/Add_report/Add_report";
import Appointment from "./src/pages/Appointment/Appointment";
import Current_Prescription from "./src/pages/Doctor/Current_Prescription/Current_Prescription";
import Test_Report from "./src/pages/Doctor/Test_Report/Test_Report";
import Patient_Health_History from "./src/pages/Doctor/Patient_Health_History/Patient_Health_History";
import Patient_Appointment from "./src/pages/Doctor/Patient_Appointment/Patient_Appointment";
import Prescription from "./src/pages/Prescription/Prescription";
import Test from "./src/pages/Test/Test";
import Settings from "./src/pages/Settings/Settings";
import SelectPatient from "./src/pages/Doctor/SelectPatient/SelectPatient";
import VideoRoom from "./src/pages/video_room/video_room";
import SettingsDoctor from "./src/pages/Doctor/SettingsDoctor/SettingsDoctor";
import Checkout from "./src/pages/Checkout/checkout";
import Error404 from "./src/components/Error404/Error404";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "./src/store";
import { doctorLoginSuccess } from "./src/store";

import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Loading from "./src/components/Loading/Loading";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="health_history" element={<Health_history />} />
      <Route path="healthHistoryForm" element={<Health_history_form />} />
      <Route path="prescription_form" element={<Prescription_form />} />
      <Route path="addReports" element={<Add_report />} />
      <Route path="appointment" element={<Appointment />} />
      <Route path="prescription" element={<Prescription />} />
      <Route path="test" element={<Test />} />
      <Route path="Loading" element={<Loading />} />
      <Route path="/video_room" element={<VideoRoom />} />
      <Route path="/checkout" element={<Checkout />} />
      {/* settings */}
      <Route path="settings">
        <Route
          path="account"
          element={
            <Settings>
              <Account />
            </Settings>
          }
        />
        <Route
          path="manage_doctors"
          element={
            <Settings>
              <Manage_doctors />
            </Settings>
          }
        />
        <Route
          path="payment"
          element={
            <Settings>
              <Payments />
            </Settings>
          }
        />
      </Route>
      |{/* doctor routes */}
      <Route path="doctor">
        <Route path="select_patient" element={<SelectPatient />} />
        <Route path="current_prescription" element={<Current_Prescription />} />
        <Route path="test_report" element={<Test_Report />} />
        <Route
          path="patient_health_history"
          element={<Patient_Health_History />}
        />
        <Route path="patient_appointment" element={<Patient_Appointment />} />
        <Route path="settings">
          <Route
            path="account"
            element={
              <SettingsDoctor>
                <AccountD />
              </SettingsDoctor>
            }
          />
          <Route
            path="manage_patients"
            element={
              <SettingsDoctor>
                <Manage_patients />
              </SettingsDoctor>
            }
          />
          <Route
            path="payment"
            element={
              <SettingsDoctor>
                <Payments />
              </SettingsDoctor>
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);

function App() {
  const patient = useSelector((state) => {
    return state.patient;
  });
  const doctor = useSelector((state) => {
    return state.doctor;
  });

  const dispatch = useDispatch();
  const [patientCookies, setPatientCookie, removePatientCookie] = useCookies([
    "patient",
  ]);
  const [doctorCookies, setDoctorCookie, removeDoctorCookie] = useCookies([
    "doctor",
  ]);

  useEffect(() => {
    if (
      patientCookies.patient &&
      patientCookies.patient.id &&
      patientCookies.patient.token &&
      patientCookies.patient.email &&
      patientCookies.patient.photo &&
      patientCookies.patient.role &&
      patientCookies.patient.name &&
      patientCookies.patient.age &&
      patientCookies.patient.gender &&
      patientCookies.patient.height &&
      patientCookies.patient.weight &&
      patientCookies.patient.allergies &&
      patientCookies.patient.otherConditions &&
      patientCookies.patient.medications &&
      patientCookies.patient.overview
    ) {
      dispatch(
        loginSuccess({
          token: patientCookies.patient.token,
          id: patientCookies.patient.id,
          email: patientCookies.patient.email,
          photo: patientCookies.patient.photo,
          role: patientCookies.patient.role,
          name: patientCookies.patient.name,
          age: patientCookies.patient.age,
          gender: patientCookies.patient.gender,
          height: patientCookies.patient.height,
          weight: patientCookies.patient.weight,
          allergies: patientCookies.patient.allergies,
          otherConditions: patientCookies.patient.otherConditions,
          medications: patientCookies.patient.medications,
          overview: patientCookies.patient.overview,
        })
      );
    }

    if (
      doctorCookies.doctor &&
      doctorCookies.doctor.token &&
      doctorCookies.doctor.id &&
      doctorCookies.doctor.email &&
      doctorCookies.doctor.photo &&
      doctorCookies.doctor.role &&
      doctorCookies.doctor.name
    ) {
      dispatch(
        doctorLoginSuccess({
          token: doctorCookies.doctor.token,
          id: doctorCookies.doctor.id,
          email: doctorCookies.doctor.email,
          photo: doctorCookies.doctor.photo,
          role: doctorCookies.doctor.role,
          name: doctorCookies.doctor.name,
        })
      );
    }
  }, [
    patientCookies.patient,
    dispatch,
    patient.isLoggedIn,
    doctorCookies,
    doctor,
  ]);

  return <RouterProvider router={router} />;
}

export default App;
