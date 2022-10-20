import React from 'react'

const FavoriteQuoteCard = (props) => {
    const {quote, removeFavoriteQuote} = props
    console.log("quote", quote)
    return (
        <div
            className="card text-center me-3 mt-3"
            style={{ width: "20rem" }}
            key={quote.id}
        >
            <div className="card-body">
                <h5 className="card-title">"{quote.content}"</h5>
                <p className="card-text">~{quote.author}~</p>
                <button
                    className="btn btn-danger"
                    onClick={() => removeFavoriteQuote(quote._id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default FavoriteQuoteCard