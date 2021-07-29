import "tailwindcss/tailwind.css";

import NavBar from "../components/NavBar";
import AddTodo from "../components/AddTodo";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-800 w-full  text-gray-400 min-h-screen pb-6">
      <NavBar />
      <AddTodo />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
