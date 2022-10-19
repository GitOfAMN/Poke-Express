const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {

    render() {
        const { name, nature, readyToFight, _id, img } = this.props.pokemon
        const capName = name[0].toUpperCase() + name.substring(1)
        return (
            <Default title={`${capName} Show Page`} pokemon={this.props.pokemon}>
                <p>{capName} is of {nature} nature and {readyToFight ? 'is ready to fight' : 'is not ready to fight'}</p>
                {img ? <img src={img} /> : ""}
            </Default>
        )
    }
}

module.exports = Show