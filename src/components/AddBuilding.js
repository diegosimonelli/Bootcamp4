import React from 'react';

class AddBuilding extends React.Component {
	addUpdate() {
		const code = this.code.value
		const name = this.name.value
		const address = this.address.value
		console.log("Added", name, code, address);
		this.props.addUpdate(code, name, address);
	}
	render() {
		const addUpdate = this.props.addUpdate;
		return (
			<div>
				<h1>Add New Building</h1>

                <button
                onClick = {this.addUpdate.bind(this)}>
					<td>Add</td>
				</button>

				<form>
					<input
                    type="text"
                    ref={ (code) => {this.code = code}  }
                    placeholder="Enter a code"/>
					<input
                    type="text"
                    ref={ (name) => {this.name = name}  }
                    placeholder="Enter a name"/>
					<input
                    type="text"
                    ref={ (address) => {this.address = address}  }
                    placeholder="Enter an address"/>
				</form>
				
			</div>
		);
	}
}
export default AddBuilding;