import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlayers } from "./reducers/players";

/*
    This is you entry point for your routes
*/

function App() {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPlayers());
  }, [dispatch]);

  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h1>{player.name}</h1>
          <h2>{player.team}</h2>
          <h3>{player.position}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
