import Info from "./components/Info";
import ResultsTable from "./components/Table/ResultsTable";

const App = () => {
  return (
    <div className="w-screen h-screen p-5">
      <div className="mx-auto w-[90%] max-w-[1200px] flex gap-2">
        <div className="w-[40%] flex flex-col gap-4">
          <Info />
          <ResultsTable />
        </div>
        <div className="flex-1">matches section</div>
      </div>
    </div>
  );
};

export default App;
