import { useCounter, useFetch } from "../hooks/index";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
  const { counter, incremet } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  //? !!data (si la data tiene un valor) && (entonces) toma el valor inicial data[0]
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BR API Quotes</h1>
      <hr />

      {/* {isLoading ? (
        <div className="alert alert-info text-center">Cargando...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer mt-2">{author}</footer>
        </blockquote>
      )} */}
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-primary"
        onClick={() => incremet(1)}
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
