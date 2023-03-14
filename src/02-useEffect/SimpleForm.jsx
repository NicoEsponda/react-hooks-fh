import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Nico",
    email: "nicolas.esponda@hotmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("use Effect llamado");
  }, []);

  useEffect(() => {
    // console.log("form estate change");
  }, [formState]);

  return (
    <>
      <h2>Formulario Simple</h2>
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

      {username === "Nicolas" && <Message />}
    </>
  );
};
