import React, {Component} from 'react';

class TechList extends Component {
    state = {
        techs: [
            'Nodejs',
            'ReactJs',
            'React Native'
        ]
    }
    
    render() {

        console.log(this.state);
        
        return (
            <ul>
                <li>Node.js</li>
                <li>ReactJs</li>
                <li>ReactNative</li>
            </ul>
        )
    }
}

export default TechList;