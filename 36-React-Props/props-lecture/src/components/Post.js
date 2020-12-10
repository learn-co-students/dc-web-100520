import React, { Component } from 'react'
import commentData from '../data/comments'

//components
import Comment from './Comment'


export default class Post extends Component {
    render() {
        console.log(commentData);
        return (
            <div class="card">
                    <img class="card-img-top" src= "https://aramajapan.com/wp-content/uploads/2014/10/aramajapan_cowboy-bebop.jpg" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.</p>
                        <ul class="list-group list-group-flush">
                            {commentData.map((comment) => <Comment somethingElse={comment}/>)}
                        </ul>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
            </div>
        )
    }
}



// import React, { Component } from 'react'

// //components
// import Comment from './Comment'


// export default class Post extends Component {
//     render() {
//         return (
//              <div class="card">
//                 <img class="card-img-top" src= "https://aramajapan.com/wp-content/uploads/2014/10/aramajapan_cowboy-bebop.jpg" alt="Card image cap" />
//                 <div class="card-body">
//                     <h5 class="card-title">Card title</h5>
//                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
//                     This content is a little bit longer.</p>                    </div>
//                 <div class="card-footer">
//                     <small class="text-muted">Last updated 3 mins ago</small>
//                 </div>
//             </div>
//         )
//     }
// }
