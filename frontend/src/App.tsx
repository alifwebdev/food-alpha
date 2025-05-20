import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <h1 className="text-purple-900 text-5xl">Food-Alpha</h1>
        <Button variant={"outline"}>Click me</Button>
      </div>
    </>
  );
}

export default App;
