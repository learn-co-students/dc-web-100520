import React, { Component } from 'react'

export default class Form extends Component {


    //Define the state in the form
        //The state here will come from the events in the form
    state = {
        name: "",
        sprite: "",
        type: "",
        weight: ""
    }

    //Define our  onChange events
        // Defining an onChange for each input
        // Take in the event, and set its corresponding attribute in state

    //Define OnSubmit
        // Take the values that reside in state for our inputs
        // Create a new object with those inputs
        // Then make a new POST fetch with that new Object

    

    submitForm = async (event) => {
        event.preventDefault()

        // const { name, sprite, type, weight } = this.state

        // const newPokemon = { name, sprite, type, weight }

        const newPokemon = {
            name: this.state.name,
            sprite: this.state.sprite,
            type: this.state.type,
            weight: this.state.weight
        }

        const response =  await fetch('http://localhost:3000/pokemon', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPokemon)
        })

        const pokeData = await response.json()

        this.props.handleAdd(pokeData)

        event.target.reset()
    }

 

    render() {
        return (
            <form onSubmit={(event) => this.submitForm(event)} class="m-3">
                <p class="text-light">Create a new Pokemon:</p>
                <div class="row">
                    <div class="col-sm">
                        <input onChange={(event) => this.setState({name: event.target.value})} id="namevalue" name="pokeName" type="text" class="form-control" placeholder="Enter a Name"/>
                    </div>
                    <div class="col-sm">
                        <input onChange={(event) => this.setState({sprite: event.target.value})} name="pokeImg" type="text" class="form-control" placeholder="Enter an image URL"/>
                    </div>
                    <div class="col-sm">
                        <input onChange={(event) => this.setState({type: event.target.value})}  name="pokeType" type="text" class="form-control" placeholder="Enter a type"/>
                    </div>
                    <div class="col-sm">
                        <input onChange={(event) => this.setState({weight: event.target.value})}  name="pokeWeight" type="text" class="form-control" placeholder="Enter a weight"/>
                    </div>
                </div>
                <input class="btn btn-primary mt-2" id="submit" type="submit"/>
            </form>
        )
    }
}
