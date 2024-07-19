import {createRoot} from "react-dom/client";
import { EmailEditor } from "./components/EmailEditor/EmailEditor";

const App = () => {
    return <EmailEditor />
}

createRoot(document.querySelector('#app')!).render(<App/>)