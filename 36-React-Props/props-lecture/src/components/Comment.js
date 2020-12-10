

import React from 'react'

export default function Comment(props) {
    console.log(props.somethingElse.text);
return (<li onClick={() => console.log(props.somethingElse.userName)} class="list-group-item">{props.somethingElse.text}</li>)
}
