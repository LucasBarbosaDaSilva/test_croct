import { render } from "react-dom";
import { CroctProvider } from "@croct/plug-react";
import { HeroBanner } from "./HeroBanner";

export default function App() {
  return (
    <CroctProvider appId="716bf7eb-3299-4fe2-a49d-9d84972220f6">
      <div>
        <HeroBanner />
      </div>
    </CroctProvider>
  );
}

render(<App />, document.getElementById("root"));
