import React, {useState } from 'react';

const SearchBar = ({onSubmit}) => {

    const [text, setText] = useState('')

    const onChangeHandeler = (e)=>{
        setText(e.target.value)
    }

    const onSubmitHandeler = (e)=>{
        e.preventDefault()
        onSubmit(text)
    }


    return (
        <div className='ui container'>
            <div className='ui segment'>
                <form className='ui form' onSubmit={(e)=>onSubmitHandeler(e)}>
                    <div style={{padding:"20px", paddingLeft:"0px"}}>
                        <label>Enter your search: </label>
                    </div>
                    <div className="ui">
                        <input 
                        style={{display:"block", width:"100%"}} 
                        type="text" 
                        placeholder="Search..."
                        value = {text}
                        onChange={(e)=>onChangeHandeler(e)}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
 
export default SearchBar;
