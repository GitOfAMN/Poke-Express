const React = require('react');

class Default extends React.Component {
    render(){
        const {pokemon, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/css/app.css" />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/pokemon">Go to Home Page For Pokemon</a>
                        <a href="/pokemon/new">Create a New Pokemon</a>
                        { pokemon? <a href={`/pokemon/${pokemon._id}/edit`}> {pokemon.name} Edit Page </a> : ''}
                        { pokemon? <a href={`/pokemon/${pokemon._id}`}>{pokemon.name} Show Page</a> : ''}
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default