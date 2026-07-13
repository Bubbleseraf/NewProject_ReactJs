function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="name">Nome</label>
          <br />
          <input type="text" id="name" name="name" />
        </div>
        <div style={{ marginTop: "0.5rem" }}>
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
          Registrati
        </button>
      </form>
    </div>
  );
}

export default Register;