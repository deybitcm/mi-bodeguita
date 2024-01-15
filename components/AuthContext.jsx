import React from "react";

const AuthContext = React.createContext();

// crear componente AuthProvider
// este componente provee de informacion a los componentes hijos

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
