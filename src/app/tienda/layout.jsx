import Link from "next/link";


export const metadata = {
  title: "Tienda",
  description: "Seccion Tienda"
}



function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion</h3>
        <ul>
          <li><Link href='/tienda/categorias'>Categorias</Link></li>
          <li><Link href='/tienda/productos'>Productos</Link></li>
        </ul>
      </nav>
      {children}
    </>
  );
}

export default TiendaLayout;