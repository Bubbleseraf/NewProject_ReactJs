function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" name="email" />
        </div>
        <div style={{ marginTop: "0.5rem" }}>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>
          Accedi
        </button>
      </form>
    </div>
  );
}

export default Login;