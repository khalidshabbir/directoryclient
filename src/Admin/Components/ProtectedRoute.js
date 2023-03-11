import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
    const isAuthenticated = localStorage.getItem("directorytoken");
    
    return (
        <>
        <Route
          {...restOfProps}
          render={(props) =>
            isAuthenticated ? <Component {...props} /> : <Redirect to="/admin/login" />
          }
        />
      </>
  )
}

export default ProtectedRoute