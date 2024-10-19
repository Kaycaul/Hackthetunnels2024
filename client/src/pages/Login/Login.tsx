import { useState } from "react";
import { useAccountContext } from "../../context";
import { Base as Layout } from "@/layouts";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const { login } = useAccountContext();
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  const attemptLogin = async () => {
    try {
      const message = await login(user, password);
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  function DoStuff(u, p) {
    setUser(u.value)
    setPassword(p.value)
    attemptLogin()
  }

  return (
    <Layout>
      <div className="Login"></div>
      <div className="Login__panel">
        <div className="Login__panel__content">
          <img src="/carleton_logo_black.png"></img>
          <div className="Login__panel__content__message">
            <div>Welcome to the Carleton SSO Federated Portal.</div>
            <div>
              Enter your{" "}
              <a href="https://myone.carleton.ca" target="blank">
                MyCarletonOne
              </a>{" "}
              username and password.
            </div>  
          </div>
          {message && <p>{message}</p>}
          <div className="Login__panel__content__input">
            <input type="text" id = "user" placeholder="MyCarletonOne username"></input>
            <input type="password" id = "pass" placeholder="Password"></input>
          </div>
          <div className="Login__panel__content__checkbox">
            <input type="checkbox"></input>
            <label>Keep me signed in</label>
          </div>
          <button
            className="Login__panel__button"
            onClick={() => DoStuff(document.getElementById("user"), document.getElementById("pass"))}
          >
            Sign In
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
