import Content from "./Content";
import { Footer, Navbar } from "./components";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-[red] ">
      <Navbar />
      <Content/>
      <Footer />
    </main>
  )
}
