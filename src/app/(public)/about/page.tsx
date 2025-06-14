import { About } from "./about";
import { Experience } from "./experience";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20">
      <About />
      <Experience />
    </div>
  );
}
