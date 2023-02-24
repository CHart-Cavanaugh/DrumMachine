import { createRoot } from "react-dom/client";
import AppWrapper from './components/AppWrapper';
import './index.scss'

const root = createRoot(document.getElementById("root"));

root.render(
  <AppWrapper />
);