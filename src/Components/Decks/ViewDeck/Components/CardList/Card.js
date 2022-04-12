import React from "react"
import { Link, useHistory, useRouteMatch } from "react-router-dom"

import { deleteCard } from "../../../../../utils/api"

const Card = ( { card } ) => {

  // Hooks to send user to View Deck
  const goBack = useHistory();
  const url = useRouteMatch().url

  // Dialog box: deletes card & keeps user on current screen, or keeps user on current screen
  const handleDelete = async () => {
    const message = "Delete this card?"
    const confirm = window.confirm(message)
    confirm === true ? 
    await deleteCard(card.id) && goBack.push(url) : goBack.push(url);
  }

  return (
    <div className="card container my-2">
      <div className="mt-2 text-center">
        {/* Front text of card */}
        <p>{card.front}</p>
      
        {/* Back text of card */}
        <p>{card.back}</p>
      </div>
      {/* Edit button: sends user to card form */}
      <Link to={"/decks/" + card.deckId + "/cards/" + card.id + "/edit"}
        className="btn btn-secondary">Edit</Link>
      {/* Delete button */}
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div>
    )

}

export default Card