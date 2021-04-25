import React, {Component} from 'react';

class TechList extends Component {
    state = {
        newTech: '',
        techs: [
            'Nodejs',
            'ReactJs',
            'React Native'
        ]
    };

    handleInpuntChange = (e) => {
        this.setState({ newTech: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ 
            techs: [... this.state.techs, this.state.newTech], 
            newTech: ''
        });
    }
    
    render() {        
        return (
            <form onSubmit={this.handleSubmit}>
                <h1> Olá {this.state.newTech} </h1>
                <ul>
                    {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
                <input 
                    type="text" 
                    onChange={this.handleInpuntChange} 
                    value={this.state.newTech}
                />
                <button type="submit">Enviar</button>
            </form>

        );
    }
}

export default TechList;