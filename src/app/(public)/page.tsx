import { About } from "./about";
import { Experience } from "./experience";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-10">
      <About />
      <Experience />
    </div>
  );
}
