import { useFetch } from "./hooks/useFetch";
import { Fixture, Team } from "./utils/types";

function App() {
  const {
    data: fixture,
    loading: loadingFixture,
    error: errorFixture,
  } = useFetch<Fixture>(
    "https://especialess3.lanacion.com.ar/22/03/mundial2022-fixture/data/fechas.json"
  );
  const {
    data: teams,
    loading: loadingTeams,
    error: errorTeams,
  } = useFetch<Team[]>(
    "https://especialess3.lanacion.com.ar/22/03/mundial2022-fixture/data/diccEquipos.json"
  );

  return <div>test</div>;
}

export default App;
