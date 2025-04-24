import { createRoot } from "react-dom/client";
import {Counter} from "./Components/Counter";

const root = createRoot(document.getElementById('root'))
root.render(
  <div>
    Привет мир!
    <Counter/>
  </div>
)