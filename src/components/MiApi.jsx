import { useEffect, useState } from "react";

const MiApi = ({ busqueda }) => {
  const [posts, setPosts] = useState([]);
  const [mostrarPosts, setMostrarPosts] = useState([]);

  const obtenerPosts = async () => {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
        const datos = await respuesta.json();

        setPosts(datos);
        setMostrarPosts(datos);
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    obtenerPosts();
  }, []);

  useEffect(() => {
    const postsFiltrados = posts.filter((post) => {
        return post.title.toLowerCase().includes(busqueda)
    });

    setMostrarPosts(postsFiltrados);
  }, [busqueda])

  return (
    <div>
        {mostrarPosts.map((post) => (
            <div>
                <h1 style={{ fontWeight: 'bold' }}>
                    {post.title}
                </h1>
                <p>
                    {post.body}
                </p>
            </div>
        ))}
    </div>
  );
};

export default MiApi;
