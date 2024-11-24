import {useState} from 'react'
import FormDescription from './form-description'
function Form({defText, defCount}){
    const [count, setFormSub] = useState(defCount);
    const [text, setText] = useState(defText);
    
    return(
        <form onSubmit={(e)=>{
                e.preventDefault()
                setFormSub(count+1);
            }}>
            input name:
            <input type="text" onChange={(e)=>{setText(e.target.value)}}></input>
            You input text : {text}
            <button type='submit'>Submit</button>
            You Submit Count: {count}
            <FormDescription/>
        </form>
    );
}

export default Form;