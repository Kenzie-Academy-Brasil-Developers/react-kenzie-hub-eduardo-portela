import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotifyError, NotifySucess } from "../components/Toastify";
import { api } from "../services/axiosApi";

export const AuthLogin = createContext({});

export const LoginProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      const token = JSON.parse(localStorage.getItem("token"));

      if (!token) {
        setLoading(false);

        return navigate("/");
      }

      try {
        setLoading(true);
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(data);
        setUserInfo(data);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

  const loginRequest = async (data) => {
    try {
      const response = await api.post("sessions", data);
      if (response.data.token) {
        NotifySucess("Login Realizado com sucesso");
        localStorage.token = JSON.stringify(response.data.token);
        localStorage.userId = JSON.stringify(response.data.user.id);
        setUserInfo(response.data.user);
        navigate("dashboard");
      }
    } catch (error) {
      NotifyError(`${error.response.data.message}`);
      console.log(error);
      navigate("/");
    }
  };

  return (
    <AuthLogin.Provider value={{ userInfo, loginRequest, loading }}>
      {children}
    </AuthLogin.Provider>
  );
};
