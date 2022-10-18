const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="Create A New Pokemon">
            <form method="POST" action="/pokemons">
                Name: <input type="text" name="name" placeholder='Name of Pokemon Here'></input><br/>
                Nature: <input type="text" name="nature" placeholder='Nature of Pokemon Here'></input><br/>
                Image: <input type="text" name="image" placeholder='Insert Image URL Here'></input><br/>
                Ready To Fight: <input type="checkbox" name="readyToFight"></input><br/>
                <input type="submit" value="Submit Pokemon"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New