import { createContext, useState } from "react";
import Sample from "./Sample";

export const LoginContext = createContext(); // ✅ EXPORT

function LoginContextProvider({ children }) {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  return (
    <LoginContext.Provider value={{ details, setDetails }}>
      {children}
      <Sample />
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;