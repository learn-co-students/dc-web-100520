import React from 'react'

export const Post = ({ handleCurrentPainting, postInfo }) => {

    const { image, title, artist, date } = postInfo

    return (
        <div className="col-4">
            <div className="card mb-3">
                    <img className="card-img-top" src={image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>  
                    </div>
                    <button onClick={() => handleCurrentPainting(postInfo)} className="btn btn-primary">Details</button>
                    <div className="card-footer">
                        <small className="text-muted">{`${artist.name}-${date}`}</small>
                    </div>
            </div>
        </div>
    )
}

export default Post 



