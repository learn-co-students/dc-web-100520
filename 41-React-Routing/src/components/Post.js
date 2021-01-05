import React from 'react'
import { Link } from 'react-router-dom'

export const Post = ({ postInfo }) => {

    const { image, title, artist, date } = postInfo

    return (
        <div className="col-sm-4">
            <div className="card mb-3">
                    <img className="card-img-top" src={image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>  
                    </div>
                    <Link to={`/gallery/${postInfo.id}`}> <button className="btn btn-primary">Details</button></Link>
                    
                    <div className="card-footer">
                        <small className="text-muted">{`${artist.name}-${date}`}</small>
                    </div>
            </div>
        </div>
    )
}

export default Post 



