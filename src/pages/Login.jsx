import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="card bg-base-100 shadow-md max-w-sm mx-auto">
      <div className="card-body">
        <h1 className="card-title text-2xl mb-4">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control mb-3">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              {...register("email", {
                required: "L'email è obbligatoria",
                maxLength: {
                  value: 50,
                  message: "Massimo 50 caratteri",
                },
              })}
            />
            {errors.email && (
              <span className="text-error text-sm mt-1">{errors.email.message}</span>
            )}
          </div>

          <div className="form-control mb-4">
            <label className="label" htmlFor="password">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "La password è obbligatoria",
                maxLength: {
                  value: 50,
                  message: "Massimo 50 caratteri",
                },
              })}
            />
            {errors.password && (
              <span className="text-error text-sm mt-1">{errors.password.message}</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Accedi
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;