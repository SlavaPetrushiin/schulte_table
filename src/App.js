import React from 'react';
import './App.css';


function getRowWithСolumns(tr, td){
	let columns = [];
	for(let i = 1; i <= td; i++){
		columns.push(<td>{i}</td>)
	}

	return (
		<tr>
			{ columns }
		</tr>
	)
}

class App extends React.Component {
	state={
		coll : 4,
		row : 4
	}

	render(){
		let table = [];

		for(let i = 1; i <= this.state.row; i++){
			table.push(getRowWithСolumns(i, this.state.coll))
		}

		return (
			<div className='wrapper'>
				<table border="1" className='table'>
					{ table }
				</table>
			</div>
		)
	}

}

export default App;
