import Image from "next/image";
import Navbar from "./components/Navbar";
import Home from "./pages/home";

export default function App() {
  const title = 'Welcome to the new blog.';
  const likes = 50;
  return (
    <main className="app flex min-h-screen flex-col items-center justify-between p-24 gap-6">
      <Navbar />
      <Home />
      <section>
        <h2 className="text-4xl font-bold">{title}</h2>
        <div>
          <p className="text-lg">This is a new blog post. It's a great day to be alive.</p>
          <p>{ likes } likes</p>
          {likes > 30 ? <p className="text-lg">This post is popular!</p> : null}
        </div>
      </section>
    </main>
  );
}
