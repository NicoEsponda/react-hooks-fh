import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState;

  useEffect(() => {
    // console.log("use Effect llamado");
  }, []);

  useEffect(() => {
    // console.log("form estate change");
  }, [formState]);

  return (
    <>
      <h2>Formulario con custom Hook</h2>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="nico@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="pass"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-3" onClick={onResetForm}>
        Aceptar
      </button>

      <button className="btn btn-warning mt-3" onClick={onResetForm}>
        Borrar
      </button>

      {username === "Nicolas" && <Message />}
    </>
  );
};
