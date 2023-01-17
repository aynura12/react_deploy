import React from "react";
import FormControl from "./style";
import { useForm } from "react-hook-form";
import { loginFormSchema } from "../schema/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const formSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormControl onSubmit={handleSubmit(formSubmit)}>
      <label htmlFor="name">Name</label>
      <input {...register("name")} type="text" name="name" id="name" />
      {errors.name ? (
        <span style={{ color: "red" }}>{errors.name.message}</span>
      ) : (
        <></>
      )}
      <label htmlFor="age">Age</label>
      <input {...register("age")} type="number" name="age" id="age" />
      {errors.age ? (
        <span style={{ color: "red" }}>{errors.age.message}</span>
      ) : (
        <></>
      )}
      <label htmlFor="email">Email</label>
      <input {...register("email")} type="text" name="email" id="email" />
      {errors.email ? (
        <span style={{ color: "red" }}>{errors.email.message}</span>
      ) : (
        <></>
      )}
      <label htmlFor="password">Password</label>
      <input
        {...register("password")}
        type="password"
        name="password"
        id="password"
      />
      {errors.password ? (
        <span style={{ color: "red" }}>{errors.password.message}</span>
      ) : (
        <></>
      )}
      <button>Submit</button>
    </FormControl>
  );
};

export default Form;