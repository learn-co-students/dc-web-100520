import React from 'react'

export const Details = ({ paintingInfo }) => {

    const { image, title, artist, date } = paintingInfo

    return (
        <div className="card text-center m-3 mb-5">
            <div className="card-header">
                {title}
            </div>
            <div className="card-body">
                <h5 className="card-title">Painted By: {artist.name}</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="btn btn-primary">Back</button>
            </div>
            <div className="card-footer text-muted">
                Painting Date: {date}
            </div>
        </div>
    )
}
