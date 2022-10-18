const React = require('react')
const Default = require('../layouts/Default.jsx')


class Edit extends React.Component {
    render(){
        const {name, _id, nature, readyToFight} = this.props.pokemon
        return (
            <Default title={`${name} Edit Page`} pokemon={this.props.pokemon}>
                <form method="POST" action={`/pokemons/${_id}?_method=PUT`}>
                    Name: <input type="text" name="name" defaultValue={name}></input><br/>
                    Nature: <input type="text" name="nature" defaultValue={nature}></input><br />
                    Ready to Fight: <input type="checkbox" name="readyToFight" defaultChecked={readyToFight}/> <br />
                    <input type="submit" value="Edit Pokemon" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit