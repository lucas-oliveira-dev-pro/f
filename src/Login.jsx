import "./login.css";

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="grid-overlay-login" />

      <section className="">
        <div className="container">
          {/* <p className="login-subtitle">Acesse sua central inteligente</p> */}
          <h1 className="login-logo">
            Agro<span>IA</span>
          </h1>

          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Login enviado");
            }}
          >
            <div className="form-container">
              <div className="input-container input-container-email ">
                <div className="input-group">
                  <label>Email</label>
                  <input type="email" placeholder="seu@email.com" />
                </div>
              </div>

              <div className="input-container">
                <div className="input-group">
                  <label>Senha</label>
                  <input type="password" placeholder="••••••••" />
                </div>
              </div>
              <button type="submit" className="login-button">
                Entrar
              </button>
            </div>

            <p className="login-footer">
              Ainda não tem conta? <span>Criar agora</span>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
