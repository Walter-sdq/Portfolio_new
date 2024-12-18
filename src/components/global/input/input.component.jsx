import { useEffect, useState} from 'react'
import './input.css'

const Input = () => {
    const headP = "Title "
    const bodyP = "Give more details"
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const submitFunc = (e) => {
        e.preventDefault()
        const list = {
            title,
            body
        }
        console.log(list)
        fetch('http://localhost:8000/lists', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(list)
        }).then(() => {
            console.log('List added')
        })
    }
    
    return (
        <div className="input-cont">
            <div className="formArea">
                <div className="head">
                    <h2> Add to list</h2>
                </div>
                <form action="" method="post" onSubmit={submitFunc}>
                    <div className="input-padding">
                        <label>What would you like to add?</label>
                        <input
                            name='title'
                            type="text"
                            className="list-head"
                            id="list-head"
                            placeholder={headP}
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>details task</label>
                        <textarea
                            name="details"
                            className="details"
                            id="details"
                            placeholder={bodyP}
                            onChange={(e) => setBody(e.target.value)}></textarea>
                    </div>
                    <button type='submit'>Add to list</button>
                </form>

                <h3>{title}</h3>
                <p> {body} </p>
            </div>
        </div>
    );
}

export default Input;