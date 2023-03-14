import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime() * 2,
      done: false,
      description: description,
    };

    onNewTodo(newTodo);
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Ingresar TODO"
        className="form-control"
        value={description}
        onChange={onInputChange}
        name="description"
      />
      <button type="submit" className="btn btn-outline-primary mt-3">
        Agregar
      </button>
    </form>
  );
};
