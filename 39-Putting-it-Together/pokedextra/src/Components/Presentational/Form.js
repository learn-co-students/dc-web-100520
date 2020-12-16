import React from 'react'

export const Form = () => {
    return (
        <form class="m-3">
            <p class="text-light">Create a new Pokemon:</p>
            <div class="row">
                <div class="col-sm">
                    <input id="namevalue" name="pokeName" type="text" class="form-control" placeholder="Enter a Name"/>
                </div>
                <div class="col-sm">
                    <input name="pokeImg" type="text" class="form-control" placeholder="Enter an image URL"/>
                </div>
            </div>
            <input class="btn btn-primary mt-2" id="submit" type="submit"/>
        </form>
    )
}
