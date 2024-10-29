import User from "../User";
import { getUser } from "../../redux/slice/user_slice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
  const {t} = useTranslation()
  const { user } = useSelector(getUser);
  return user.email ? (
    <User user={user} />
  ) : (
    <div className="flex gap-2 ">
      <Link to="/login">
        <div className="flex text-white hover:bg-main bg-[#FF7518] transition-all  gap-2 md:px-4 px-3 md:py-2 py-1 font-mono font-medium rounded-full shadow-md">
          Login{" "}
        </div>
      </Link> 
      <Link to="/register">
        <div className="hidden lg:flex gap-2 px-4 py-2 hover:bg-[#E0E0E0]  transition-all  font-mono font-medium bg-white rounded-full shadow-md  text-blue">
          Sign Up{" "}
        </div>
      </Link>
    </div>
  );
};

export default Login;
