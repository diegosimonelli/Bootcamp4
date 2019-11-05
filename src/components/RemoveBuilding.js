import React from 'react';

class RemoveBuilding extends React.Component{
    render(){
        const {selectedBuilding, removedUpdate} = this.props
        return(
            <button
            onClick={() => removedUpdate(selectedBuilding)}>
                <td>Remove</td>
            </button>
        );
    }
}
export default RemoveBuilding;