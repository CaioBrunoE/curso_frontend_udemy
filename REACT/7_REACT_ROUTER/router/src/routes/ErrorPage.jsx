import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  
  const error = useRouteError();

  console.log(error)

    return (
    <div>
       <h1>Ops</h1>  
       <p>Temos um poblema</p> 
       <p>{error.error.message}</p>
       <p>{error.statusText}</p>

    </div>
  )
}

export default ErrorPage