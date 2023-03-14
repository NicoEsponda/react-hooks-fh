import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {

  const algo = useContext(UserContext)
  const { user, setUser } = useContext( UserContext );
  console.log('algo',algo)
  console.log('user',user)
  
  // console.log('hola',hola)
  return (
      <>
        <h1>LoginPage</h1>
        <hr />

        <pre>
          {JSON.stringify(user,null,3)}
        </pre>
        
      </>
    );
  };
  