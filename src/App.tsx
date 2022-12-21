import { useContext } from "react";
import Info from "./components/Info";
import MatchDates from "./components/MatchDates";
import ResultsTable from "./components/Table/ResultsTable";
import { GroupContext } from "./contexts/GroupContext";

const App = () => {
  const { loadingTeams, loadingFixture } = useContext(GroupContext);

  return (
    <div className="w-screen overflow-x-hidden min-h-screen pt-4 pb-2 px-1 md:p-5 grid place-content-center">
      {loadingTeams || loadingFixture ? (
        <h3 className="suecanabold text-lg text-main">Cargando...</h3>
      ) : (
        <div className="mx-auto w-[95%] md:max-w-[1300px] flex flex-col md:flex-row gap-1 md:gap-3">
          <div className="w-full md:w-[40%] flex flex-col gap-4">
            <Info />
            <ResultsTable />
          </div>
          <div className="flex-1">
            <MatchDates />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
