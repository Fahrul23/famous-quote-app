import React from 'react'

const QouteCard = (props) => {
    const {quote, setRelode, addFavoriteQuote} = props
    return (
        <div className="card text-center" style={{ width: "20rem" }}>
            <div className="card-body">
                {quote ? (
                    <>
                        <h5 className="card-title">"{quote.content}"</h5>
                        <p className="card-text">~ {quote.author} ~</p>
                    </>
                ) : (
                    <>
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </>
                )}
                <button
                    className="btn btn-primary me-2"
                    onClick={() => setRelode(prev => !prev)}
                >
                    New Quote
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => addFavoriteQuote()}
                >
                    Add Favorite
                </button>
            </div>
        </div>
    )
}

export default QouteCard