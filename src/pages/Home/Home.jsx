import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <br />
      <Link to="/facts">Facts</Link>
      <br />
      <Link to="/kippp">Kippp</Link>
      <br />
      <Link to="/challenge">Challenge</Link>
    </>
  );
}
