"use client"
import { useRouter } from "next/navigation";

export const metadata = {
  title: "About Me",
  description: "Seccion Tienda"
}


function AboutPage() {
  const router = useRouter();
  return (
    <section>
      <h1>About Page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ratione sunt neque earum. Accusantium suscipit possimus dolorem quidem excepturi quae eaque tenetur pariatur, laudantium quasi voluptate dicta vel fugit architecto, enim nisi nesciunt asperiores fuga quis quam? Provident aperiam incidunt odit quae nobis veniam minima excepturi ratione natus rerum praesentium tenetur, laborum porro blanditiis quam, saepe molestias voluptates perferendis ex ducimus. Minima nesciunt iure tenetur eum ex, sequi fugit quidem error dicta. Deserunt incidunt explicabo quisquam quis iste sapiente ducimus obcaecati sit blanditiis necessitatibus corrupti voluptatibus praesentium, est, itaque dolores atque eligendi fugit sunt et numquam minus facere aspernatur! Ipsum.</p>
      <button className="bg-stone-700 px-4 rounded-md"
        onClick={() => {
          alert('Alerta')
          router.push('/')
        }}
      >Click</button>
    </section>
  );
}

export default AboutPage;