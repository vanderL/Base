import React, {Component} from 'react';

import TechItem from './TechItem';

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

    handleDelete = (tech) => {
        this.setState({techs: this.state.techs.filter(t => t !== tech)});
    }
    
    render() {        
        return (
            <form onSubmit={this.handleSubmit}>
                <h1> Olá {this.state.newTech} </h1>
                <ul>
                    {this.state.techs.map(tech => (
                        <TechItem 
                            key={tech} 
                            tech={tech}
                            onDelete={() => this.handleDelete(tech)}
                        />
                    ))}
                    <TechItem />
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