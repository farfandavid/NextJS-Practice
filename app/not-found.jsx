import Link from "next/link";

function NotFound() {
  return (
    <section>
      <h1>404</h1>
      <p>NotFound</p>
      <Link href='/'>Inicio</Link>
    </section>
  );
}

export default NotFound;