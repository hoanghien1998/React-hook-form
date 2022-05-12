import React from "react";
import { useForm } from "react-hook-form";
import FieldArray from "./fieldArray";

import "./styles.css";

const defaultValues = {
  test: [
    {
      value: "0",
      nestedArray: [{ value: "0" }]
    },
    {
      value: "0",
      nestedArray: [{ value: "1" }]
    }
  ]
};

const Example = () => {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    setValue,
    watch
  } = useForm({
    defaultValues
  });
  const onSubmit = (data) => console.log("data", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Array of Array Fields</h1>

      <FieldArray
        {...{
          control,
          watch,
          register,
          defaultValues,
          getValues,
          setValue,
          errors
        }}
      />

      <input {...register("total")} readOnly />

      <input type="submit" />
    </form>
  );
}

export default Example;
