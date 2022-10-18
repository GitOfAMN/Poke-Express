const React = require('react');
const Default = require('../layouts/Default.jsx')


class Index extends React.Component{
    render(){
        const {pokemon} = this.props
        return(
            <Default title="Pokemon Index Page">
                <ul>
                    {
                        pokemon.map((pokemon) => {
                            const {name, nature, readyToFight, _id} = pokemon
                            return (
                                <li key={_id}>
                                    <a href={`/pokemons/${_id}`}>
                                    {name}</a> is {nature}
                                    
                                     <br/>
                                    {
                                        readyToFight? 
                                        'It\'s ready to fight':
                                        'It\'s not ready to fight'
                                    }
                                    <br/>
                                    <form method="POST" action={`/pokemons/${_id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${nature} ${name}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index