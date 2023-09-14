import Link from "next/link";
import { TodoList } from "@/components/toDoList";
import { useState, useEffect } from "react";

export async function getServerSideProps() {
  const list = await TodoList();
  return {
    props: {
      list,
    },
  };
}

export default function Home({ list }) {
  const [existingTasks, setExistingTasks] = useState(list); // Estado para las tareas existentes
  const [newTasks, setNewTasks] = useState([]); // Estado para las nuevas tareas

  useEffect(() => {
    // Cuando se agrega una nueva tarea en la página "create", agrégala al estado "newTasks"
    if (newTasks.length > 0) {
      setExistingTasks([...existingTasks, newTasks]);
      setNewTasks([]);
    }
  }, [newTasks, existingTasks]);

  return (
    <>
      <h1>Lista de tareas</h1>
      <div>
        <ul>
          {existingTasks.map(({ id, title, completed }) => (
            <li key={id}>
              {id} {title} {completed}
            </li>
          ))}
        </ul>
      </div>
      <Link href="/create">Crear Nueva Tarea</Link>
    </>
  );
}
