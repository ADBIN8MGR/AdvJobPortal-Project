import { Link, useRouteError } from "react-router-dom"
import StyledWrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return <StyledWrapper>
      <div>
        <img src={img} alt="Page not found!" />
        <h3>Oops! Page Not Found</h3>
        <p>We can't seem to find page you are looking for</p>
        <Link to="/dashbaord">Back Home</Link>
      </div>
    </StyledWrapper>
  }
  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/">back Home</Link>
    </div>
  )
}

export default Error
