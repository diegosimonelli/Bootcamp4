import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { selectedBuilding, data } = this.props;
		const viewB = b => {
		  if (b) {
			return (
			  <div>
				<h3>{b.code} {b.name} {b.address}</h3>
			  </div>
			);
		  } else {
			return (
			  <div>
				<h3>Click on a name to view more information</h3>
			  </div>
			);
		  }
		};
	
		return (
		  <div>
			  {viewB(data.find(targetBuilding => targetBuilding.id === selectedBuilding))}
		  </div>
		);
	  }
	}
export default ViewBuilding;
