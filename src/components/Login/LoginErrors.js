import React from "react";

const LoginErrors = ({ errors }) =>
  errors &&
  Object.keys(errors).length > 0 && (
    <div className="uk-alert-danger" uk-alert="true">
      {errors.login && (
        <>
          Le login est obligatoire
          <br />
        </>
      )}
      {errors.password && (
        <>
          Le mot de passe est obligatoire
          <br />
        </>
      )}
      {errors.apiServer && (
        <>
          {errors.apiServer.message}
          <br />
        </>
      )}
    </div>
  );

  export default LoginErrors;