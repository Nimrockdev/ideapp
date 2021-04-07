import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddWord = ({setWord}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length>1){        
            setWord(inputValue.trim());
            setInputValue('');
        }
        
    }

    return (  
       
        <form onSubmit= {handleSubmit} >
          <input
              type="text"
              value = {inputValue}
              onChange= {handleInputChange}
          />
        </form>
       
    )
}

AddWord.propTypes = {
    setWord: PropTypes.func.isRequired
 }
