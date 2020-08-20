import useAxios from "axios-hooks";

export default function Home() {
  useAxios('https://jsonplaceholder.typicode.com/todos/');
  return <h2>An empty page demonstrating a memory leak</h2>
}

// this exists to disable static rendering
Home.getInitialProps = () => ({})

