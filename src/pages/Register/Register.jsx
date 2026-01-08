import { UserContext } from "../../context/contex";
import Login from "../login/Login";
import Signin from "../signin/Signin";
import Navbar_component from "../../components/Navbar/Navbar_component";
import Dashboard from "../DashBoard/Dashboard";
function Register() {
  const { isLoginPage } = UserContext();

  return (
    <div className="flex  w-full h-full
     justify-start items-center flex-col     gap-36 bg-gray-100 dark:bg-gray-900 transition-colors">
      <Navbar_component />
     <div className="w-full h-full ">
       {isLoginPage ? <Login /> : <Signin />}
       {/* {isLoginPage ? <Dashboard /> : <Signin />} */}

     </div>
    </div>
  );
}

export default Register;
