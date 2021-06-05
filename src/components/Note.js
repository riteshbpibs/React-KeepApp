import React from 'react'

const Note = (props) => {

    const deleteNote = () =>{
        props.deleteItem(props.id);
    }

    return (
        <div className="note">
            <h5>{props.title}</h5>
            <br />
            <p>{props.content}</p>
            <button className="btn btn-danger btn-sm del_btn" onClick={deleteNote}>Delete</button>
        </div>
    )
}

export default Note
