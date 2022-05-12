import React from "react";
import { Calc } from "./Calc";
import { useFieldArray } from "react-hook-form";

let renderCount = 0;

export default function Fields({ control, register, setValue }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });

  renderCount++;

  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                type="number"
                {...register(`test.${index}.value`)}
                defaultValue={item.value}
              />

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <hr />

      <Calc control={control} setValue={setValue} />

      <span className="counter">Render Count: {renderCount}</span>
    </>
  );
}
