import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;
		//creating a filter 
		const buildingList = data
			.filter(directory => {
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 || directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		})
		//creating an onClick listener 
		.map(directory => {
			return (
				<div key={directory.id}>
					<button
					onClick = {() => selectedUpdate(directory.id)}>
						<td>{directory.code}</td>
						<td>{directory.name}</td>
					</button>
				</div>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
