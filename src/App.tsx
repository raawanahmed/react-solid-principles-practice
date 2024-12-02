import "./App.css";
import { DIP } from "./principles/DIP";
import { LSP } from "./principles/LSP";
import { OCP } from "./principles/OCP";
import { SRP } from "./principles/SRP";
import { ISP } from "./principles/ISP";

function App() {
  return (
    <>
      <div className="flex min-w-full h-full justify-center items-center p-8">
        <SRP />
        {/* <OCP /> */}
        {/* <LSP /> */}
        {/* <ISP/> */}
        {/* <DIP /> */}
      </div>
    </>
  );
}

export default App;
