import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div onClick={() => this.props.sayHi()}>
                This is my navbar
            </div>
        )
    }
}

// import React, { Component } from 'react'

// export default class Navbar extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-dark bg-warning text-light ">
//                 <span className="navbar-brand mb-0 h1">Website Brand</span>
//             </nav>
//         )
//     }
// }
