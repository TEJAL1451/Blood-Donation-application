// import React, { useState } from "react";
// import InputType from "./InputType";
// import { Link } from "react-router-dom";
// import { handleLogin, handleRegister } from "../../../services/authService";

// const Form = ({ formType, submitBtn, formTitle }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("donar");
//   const [name, setName] = useState("");
//   const [organisationName, setOrganisationName] = useState("");
//   const [hospitalName, setHospitalName] = useState("");
//   const [website, setWebsite] = useState("");
//   const [address, setAddress] = useState("");
//   const [phone, setPhone] = useState("");
//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           if (formType === "login")
//             return handleLogin(e, email, password, role);
//           else if (formType === "register")
//             return handleRegister(
//               e,
//               name,
//               role,
//               email,
//               password,
//               phone,
//               organisationName,
//               address,
//               hospitalName,
//               website
//             );
//         }}
//       >
//         <h1 className="text-center">{formTitle}</h1>
//         <hr />
//         <div className="d-flex mb-3">
//           <div className="form-check">
//             <input
//               type="radio"
//               className="form-check-input"
//               name="role"
//               id="donarRadio"
//               value={"donar"}
//               onChange={(e) => setRole(e.target.value)}
//               defaultChecked
//             />
//             <label htmlFor="adminRadio" className="form-check-label">
//               Donar
//             </label>
//           </div>
//           <div className="form-check ms-2">
//             <input
//               type="radio"
//               className="form-check-input"
//               name="role"
//               id="adminRadio"
//               value={"admin"}
//               onChange={(e) => setRole(e.target.value)}
//             />
//             <label htmlFor="adminRadio" className="form-check-label">
//               Admin
//             </label>
//           </div>
//           <div className="form-check ms-2">
//             <input
//               type="radio"
//               className="form-check-input"
//               name="role"
//               id="hospitalRadio"
//               value={"hospital"}
//               onChange={(e) => setRole(e.target.value)}
//             />
//             <label htmlFor="hospitalRadio" className="form-check-label">
//               Hospital
//             </label>
//           </div>
//           <div className="form-check ms-2">
//             <input
//               type="radio"
//               className="form-check-input"
//               name="role"
//               id="organisationRadio"
//               value={"organisation"}
//               onChange={(e) => setRole(e.target.value)}
//             />
//             <label htmlFor="organisationRadio" className="form-check-label">
//               Organisation
//             </label>
//           </div>
//         </div>
//         {/* switch statement */}
//         {(() => {
//           //eslint-disable-next-line
//           switch (true) {
//             case formType === "login": {
//               return (
//                 <>
//                   <InputType
//                     labelText={"email"}
//                     labelFor={"forEmail"}
//                     inputType={"email"}
//                     name={"email"}
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <InputType
//                     labelText={"Password"}
//                     labelFor={"forPassword"}
//                     inputType={"password"}
//                     name={"password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </>
//               );
//             }
//             case formType === "register": {
//               return (
//                 <>
//                   {(role === "admin" || role === "donar") && (
//                     <InputType
//                       labelText={"Name"}
//                       labelFor={"forName"}
//                       inputType={"text"}
//                       name={"name"}
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                     />
//                   )}
//                   {role === "organisation" && (
//                     <InputType
//                       labelText={"Organisation Name"}
//                       labelFor={"fororganisationName"}
//                       inputType={"text"}
//                       name={"organisationName"}
//                       value={organisationName}
//                       onChange={(e) => setOrganisationName(e.target.value)}
//                     />
//                   )}
//                   {role === "hospital" && (
//                     <InputType
//                       labelText={"Hospital Name"}
//                       labelFor={"forHospitalName"}
//                       inputType={"text"}
//                       name={"hospitalName"}
//                       value={hospitalName}
//                       onChange={(e) => setHospitalName(e.target.value)}
//                     />
//                   )}

//                   <InputType
//                     labelText={"email"}
//                     labelFor={"forEmail"}
//                     inputType={"email"}
//                     name={"email"}
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <InputType
//                     labelText={"Password"}
//                     labelFor={"forPassword"}
//                     inputType={"password"}
//                     name={"password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <InputType
//                     labelText={"website"}
//                     labelFor={"forWebsite"}
//                     inputType={"text"}
//                     name={"website"}
//                     value={website}
//                     onChange={(e) => setWebsite(e.target.value)}
//                   />
//                   <InputType
//                     labelText={"Address"}
//                     labelFor={"forAddress"}
//                     inputType={"text"}
//                     name={"address"}
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                   />
//                   <InputType
//                     labelText={"Phone"}
//                     labelFor={"forPhone"}
//                     inputType={"text"}
//                     name={"phone"}
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                   />
//                 </>
//               );
//             }
//           }
//         })()}

//         <div className="d-flex flex-row justify-content-between">
//           {formType === "login" ? (
//             <p>
//               Not registerd yet ? Register
//               <Link to="/register"> Here !</Link>
//             </p>
//           ) : (
//             <p>
//               ALready Usser Please
//               <Link to="/login"> Login !</Link>
//             </p>
//           )}
//           <button className="btn btn-primary" type="submit">
//             {submitBtn}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;

import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState(""); // State for name validation error
  const [passwordError, setPasswordError] = useState(""); // State for password validation error
  const [emailError, setEmailError] = useState(""); // State for email validation error

  // Function to validate name (no numerical characters allowed)
  const validateName = (value) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(value)) {
      setNameError("Name cannot contain numbers");
    } else {
      setNameError("");
    }
  };

  // Function to validate password
  const validatePassword = (value) => {
    // Password must be at least 8 characters and contain at least one special character
    const regex = /^(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;
    if (!regex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters and contain at least one special character"
      );
    } else {
      setPasswordError("");
    }
  };

  // Function to validate email (must contain '@' and end with '.in')
  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
    const domainRegex = /@.*\.in$/;
    if (!regex.test(value) || !domainRegex.test(value)) {
      setEmailError("Email must contain '@' and end with '.in'");
    } else {
      setEmailError("");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for errors
    if (nameError || passwordError || emailError) {
      alert("Please fix the errors before submitting.");
      return;
    }

    // Confirm submission
    const confirmation = window.confirm("Do you Want to Register?");
    if (confirmation) {
      if (formType === "login") {
        handleLogin(e, email, password, role);
      } else if (formType === "register") {
        handleRegister(
          e,
          name,
          role,
          email,
          password,
          phone,
          organisationName,
          address,
          hospitalName,
          website
        );
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        <div className="d-flex mb-3">
          {/* Role Selection */}
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donarRadio"
              value="donar"
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label htmlFor="donarRadio" className="form-check-label">
              Donar
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value="admin"
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value="hospital"
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organisationRadio"
              value="organisation"
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="organisationRadio" className="form-check-label">
              Organisation
            </label>
          </div>
        </div>

        {(() => {
          switch (formType) {
            case "login":
              return (
                <>
                  <div>
                    <InputType
                      labelText={"Email"}
                      labelFor={"forEmail"}
                      inputType={"email"}
                      name={"email"}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                      }}
                    />
                    {emailError && <p className="text-danger">{emailError}</p>}
                  </div>
                  <div>
                    <InputType
                      labelText={"Password"}
                      labelFor={"forPassword"}
                      inputType={"password"}
                      name={"password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        validatePassword(e.target.value);
                      }}
                    />
                    {passwordError && (
                      <p className="text-danger">{passwordError}</p>
                    )}
                  </div>
                </>
              );

            case "register":
              return (
                <>
                  {(role === "admin" || role === "donar") && (
                    <div>
                      <InputType
                        labelText={"Name"}
                        labelFor={"forName"}
                        inputType={"text"}
                        name={"name"}
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          validateName(e.target.value);
                        }}
                      />
                      {nameError && <p className="text-danger">{nameError}</p>}
                    </div>
                  )}
                  {role === "organisation" && (
                    <InputType
                      labelText={"Organisation Name"}
                      labelFor={"forOrganisationName"}
                      inputType={"text"}
                      name={"organisationName"}
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labelText={"Hospital Name"}
                      labelFor={"forHospitalName"}
                      inputType={"text"}
                      name={"hospitalName"}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}

                  <div>
                    <InputType
                      labelText={"Email"}
                      labelFor={"forEmail"}
                      inputType={"email"}
                      name={"email"}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                      }}
                    />
                    {emailError && <p className="text-danger">{emailError}</p>}
                  </div>
                  <div>
                    <InputType
                      labelText={"Password"}
                      labelFor={"forPassword"}
                      inputType={"password"}
                      name={"password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        validatePassword(e.target.value);
                      }}
                    />
                    {passwordError && (
                      <p className="text-danger">{passwordError}</p>
                    )}
                  </div>
                  <InputType
                    labelText={"Website"}
                    labelFor={"forWebsite"}
                    inputType={"text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType
                    labelText={"Address"}
                    labelFor={"forAddress"}
                    inputType={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labelText={"Phone"}
                    labelFor={"forPhone"}
                    inputType={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );

            default:
              return null;
          }
        })()}

        <div className="d-flex flex-row justify-content-between">
          {formType === "login" ? (
            <p>
              Not registered yet? Register
              <Link to="/register"> Here!</Link>
            </p>
          ) : (
            <p>
              Already a user? Please
              <Link to="/login"> Login!</Link>
            </p>
          )}
          <button
            className="btn btn-primary"
            type="submit"
            disabled={!!nameError || !!passwordError || !!emailError}
          >
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
