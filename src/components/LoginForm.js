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

let childRender = 0;
function UserNameWatched({ control }) {
  useWatch({
    control,
    name: "password" // without supply name will watch the entire form, or ['userName', 'password'] to watch both
  });

  childRender++;

  return (
    <>
      <p>child render count: {childRender}</p>
    </>
  );
}

let parentRender = 0;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "test"
  });

  useWatch({
    name: "username",
    control
  });

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

        <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id}>
                <input {...register(`test.${index}.firstName`)} />

                <Controller
                  render={({ field }) => <input {...field} />}
                  name={`test.${index}.lastName`}
                  control={control}
                />
                <button type="button" onClick={() => remove(index)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>

        <section>
          <button
            type="button"
            onClick={() => {
              append({ firstName: "tanTan", lastName: "Kay" });
            }}
          >
            append
          </button>
        </section>

        <div className="field">
          <button type="submit">Submit</button>
        </div>
        <p>parent render count: {parentRender}</p>
        <UserNameWatched control={control} />
      </form>
    </>
  );
}
