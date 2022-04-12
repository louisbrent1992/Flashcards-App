import React from "react";
import { Link, useHistory } from "react-router-dom";

import { deleteDeck } from "../../../utils/api";

const Deck = ({ deck }) => {
  // Hook to send user home
  const history = useHistory();

  // Delete handler: deletes deck and reloads DeckList, or sends user home
  const handleDelete = async () => {
    const message = "Delete this deck?";
    const confirm = window.confirm(message);
    if (confirm === 'true') {
      await deleteDeck(deck.id)
      history.go('/');
    } else {
      history.go('/');
    }
  };

  return (
    <div className="rounded container border border-secondary mt-2 py-1 by-1">
      <div className="row mx-2 d-flex justify-content-between">
        <h5>{deck.name}</h5>
        <p>{deck.cards.length} cards</p>
        <p>{deck.description}</p>
      </div>
      <div className="row mx-2 mb-2 d-flex justify-content-between ">
        <div className="d-flex justify-content-between">
          <Link to={"/decks/" + deck.id} className="btn btn-secondary mr-2">
            <i className="bi bi-eye"> View</i>
          </Link>
          <Link to={"/decks/" + deck.id + "/study"} className="btn btn-primary">
            <i className="bi bi-journal-bookmark-fill"> Study</i>
          </Link>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            <i className="bi bi-trash" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deck;
