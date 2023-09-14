import { useState } from "react";
import Link from "next/link";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [existingTasks, setExistingTasks] = useState([]); // Estado para las tareas existentes
  const [newTask, setNewTask] = useState(null); // Estado para la nueva tarea

  function save() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        setNewTask(json);
      });
  }

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const inputStyle = {
    marginBottom: "15px",
  };

  return (
    <div style={containerStyle}>
      <h1>Crear Nueva Tarea</h1>
      <div>
        <input
          type="text"
          placeholder="Ingrese el titulo de la nueva tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />
        <br />
        <input
          type="text"
          placeholder="Ingrese los datos de la nueva tarea"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={inputStyle}
        />
        <br />
        <button onClick={save}>Agregar Tarea</button>
      </div>
      <Link href="/">Volver a la Lista de Tareas</Link>
    </div>
  );
}
