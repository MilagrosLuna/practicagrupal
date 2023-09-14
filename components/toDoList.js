
export async function TodoList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
}
