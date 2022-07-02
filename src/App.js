import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Header } from "./components";

console.log("NEW LINE", process.env.REACT_APP_FIREBASE_API_KEY);
console.log("NEW LINE", process.env.REACT_APP_FIREBASE_AUTH_DOMAIN);
console.log("NEW DB_URL", process.env.REACT_APP_FIREBASE_DB_URL);
console.log("NEW LINE", process.env.REACT_APP_FIREBASE_PROJECT_ID);
console.log("NEW  LINE", process.env.REACT_APP_FIREBASE_STORAGE_BUCKET);
console.log("NEW LINE", process.env.REACT_APP_FIREBASE_MESSAGING_ID);
console.log("NEW LINE", process.env.REACT_APP_FIREBASE_APP_ID);

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col">
        <Header />
      </div>
    </AnimatePresence>
  );
}
export default App;
