import React, {useState} from 'react';
import Header from './components/Header';
import './App.css'
import CreateNote from './components/CreateNote';
import Note from './components/Note';

const App = () =>{

	const [addItem, setAddItem] = useState([])


	const addNote = (note) =>{
		// alert("Click")
		setAddItem((preValue)=>{
			return [...preValue, note]
		})
	}

	const onDelete = (id) =>{
		setAddItem((oldData)=>{
			return oldData.filter((currData, indx)=>{
				return indx !== id;
			})
		})
	}

	return(
		<>
			<Header />
			<CreateNote passNote = {addNote} />
			<div className="notes">
				{addItem.map((val,index)=> {
					return (
					<Note
						id={index}
						key={index}
						title={val.title}
						content={val.content}
						deleteItem = {onDelete}
					/>
					)
				})}
			</div>
		</>
	)
}

export default App;