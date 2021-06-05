import React,{ useState } from 'react'

const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: '',
        content: '',
    })

    const inputEvent = (event) =>{

        const {name, value} = event.target

        setNote((preData) =>{
            return {
                ...preData,
                [name] : value
            }
        })
    }

    const addEvent = (e) =>{
        e.preventDefault();
        
        props.passNote(note)
        setNote({
            title:"",
            content:""
        })
    }

    return (
        <>
            <div className="main_note">
                <form action="">
                    <input 
                        type="text"
                        placeholder="Title"
                        autoComplete="off"
                        value={note.title}
                        name = "title"
                        onChange={inputEvent} />
                    <textarea
                        id=""
                        rows="4" 
                        value={note.content}
                        name = "content"
                        onChange={inputEvent}
                        placeholder="Write a note...">
                        </textarea>
                    <button className="btn btn-dark btn-sm add_btn" onClick={addEvent}>Add</button>
                </form>
            </div>
        </>
    )
}

export default CreateNote
