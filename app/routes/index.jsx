import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <h1>Hello World</h1>
      <Link to={"/demo"}>to demo page</Link>
    </>
  );
}
