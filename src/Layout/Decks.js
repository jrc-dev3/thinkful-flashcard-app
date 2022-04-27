import React from "react";
import {
  Switch,
  useRouteMatch,
  useParams,
  Route,
} from "react-router-dom";
import Deck from "./Deck";
import EditDeck from "./EditDeck";
import Study from "./Study";

const Decks = ({ fetchDecks }) => {
  const { deckId } = useParams();
  const { path } = useRouteMatch();

    return (
      <Switch>
        <Route exact ={true} path={`${path}`}>
          <Deck fetchDecks={fetchDecks} />
        </Route>
        <Route path={`${path}/study`}>
          <Study />
        </Route>
        <Route path={`${path}/edit`}>
          <EditDeck fetchDecks={fetchDecks} />
        </Route>
        <Route path={`${path}/cards/new`}>
          <h2>New</h2>
        </Route>
        <Route path={`${path}/cards/:cardId/edit`}>
          <h2>Edit Card</h2>
        </Route>
      </Switch>
    );
};

export default Decks;
