import { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <nav className="navbar">
        <img
          className="logo"
          src="https://cdn.aptoide.com/imgs/a/b/d/abd5727429144f253766d8de66dd80dc_fgraphic.png"
          alt=""
        />

        <div className="nav-links">
          <a href="#">Tashkilot</a>
          <a href="#">Imkoniyatlar</a>
          <a href="#">Hamkorlarga</a>
          <a href="#">Yordam</a>
        </div>

        <div className="right-side">
          <select>
            <option>O'zb</option>
            <option>Рус</option>
          </select>

          <button className="login-btn-nav">Kirish</button>
          <button className="connect-btn">
            Tashkilotni ulash
          </button>
        </div>
      </nav>

      <div className="login-container">
        <div className="login-header">
          <h1>Kirish eMaktab</h1>

          <a href="#">
            Tizimda ro'yxatdan o'tmaganmisiz?
          </a>
        </div>

        <div className="login-body">
          <div className="input-row">
            <div>
              <label>Login</label>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>

            {login === "" && (
              <div className="warning">
                Loginingizni kiriting.
              </div>
            )}
          </div>

          <div className="input-row">
            <div>
              <label>Parol</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {password === "" && (
              <div className="warning">
                Parolni kiriting.
              </div>
            )}
          </div>

          <button className="enter-btn">
            Tizimga kiring
          </button>
        </div>

        <div className="footer-login">
          Login yoki parolni unutdingizmi?
          <a href="#"> Loginni tiklash.</a>
        </div>
      </div>
    </>
  );
}

export default App;