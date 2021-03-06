import { useForm, useWatch, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Please enter username")
    .max(50, "username up to 10 characters"),
  password: yup
    .string()
    .required("Please enter password")
    .max(20, "password up to 20 characters")
});

let parentRender = 0;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues
  } = useForm({ resolver: yupResolver(schema) });

  parentRender++;
  console.log('render react hook form', parentRender);

  const onLoginSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Demo React Hook Form</h1>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <div className="field">
          <label>Username: </label>
          <input {...register("username")} />
          {errors.username && <p className="error">{errors.username?.message}</p>}
        </div>

        <div className="field">
          <label>Password: </label>
          <input {...register("password")} />
          {errors.password && <p className="error">{errors.password?.message}</p>}
        </div>

        <div className="field">
          <button type="submit">Submit</button>
        </div>

        <button type="button" onClick={() => {
          alert(getValues(["username", "password"]))
        }}>
          Get values
        </button>
        {/* <p>parent render count: {parentRender}</p> */}
      </form>
    </>
  );
}
