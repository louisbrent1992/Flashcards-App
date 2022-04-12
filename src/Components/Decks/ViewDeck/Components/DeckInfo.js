import React from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";

import { deleteDeck } from "../../../../utils/api";

const DeckInfo = ({ deck }) => {
  // Hooks to send user elsewhere or keep them here
  const goBack = useHistory();
  const url = useRouteMatch().url;

  // Dialog box: deletes deck and sends user home, or keeps deck and keeps user here
  const handleDelete = async () => {
    const message = "Delete this deck?";
    const confirm = window.confirm(message);
    confirm === true
      ? (await deleteDeck(deck.id)) && goBack.push("/")
      : goBack.push(url);
  };

  return (
    <div className="rounded container border border-secondary mt-2 py-1 by-1">
      <div className="row">
        <div className="col">
          <h3>{deck.name}</h3>
          <p>{deck.description}</p>
        </div>
      </div>
      {/* Action buttons: edit, study, add card, delete */}
      <div className="row mx-1 mb-2 d-flex justify-content-between">
        {/* Edit button: sends user to deck form */}
        <Link to={"/decks/" + deck.id + "/edit"} className="btn btn-secondary">
        <i class="bi bi-pen"> Edit</i>
        </Link>
        {/* Study button: sends user to study screen */}
        <Link to={"/decks/" + deck.id + "/study"} className="btn btn-primary">
        <i className="bi bi-journal-bookmark-fill">  Study</i>
        </Link>
        {/* Add card: sends user to card form */}
        <Link
          to={"/decks/" + deck.id + "/cards/new"}
          className="btn btn-primary"
        >
          <i class="bi bi-plus-lg"> Add Card</i>
        </Link>
        {/* Delete button */}
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
        <i className="bi bi-trash" />
        </button>
      </div>
    </div>
  );
};

export default DeckInfo;
