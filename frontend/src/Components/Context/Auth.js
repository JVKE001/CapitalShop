import {
  useState,
  useEffect,
  useContext,
  createContext,
  children,
} from "react";
import axios from "axios";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  //Default Axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseDate = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseDate.user,
        token: parseDate.token,
      });
    }

    //Eslint-Disble-New Line
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

//Custom Hooks
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
