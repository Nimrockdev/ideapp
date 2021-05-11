import React from 'react';
import queryString from 'query-string';

import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';

import { useHistory, useLocation } from "react-router-dom";

export const AddWord = ({setWord}) => {

    //const [inputValue, setInputValue] = useState('');
    const location = useLocation();
    let { query = ''} = queryString.parse(location.search);
    
    let history = useHistory();
    const [ formValues, handleInputChange ] = useForm( {searchText: query} );
    
    const { searchText }= formValues;

    // const handleSearch = (e) => {
    //     console.log(searchText)
    //     //setInputValue(e.target.value)
    // }

    const handleSearch = (e) => {
        e.preventDefault();

        if(searchText.trim().length>1){        

            setWord(searchText.trim());
            console.log(searchText);
            history.push(`?q=${ searchText }`)
        }
        
    }

    return (  
       
        <form onSubmit= {handleSearch} >
          <input
              type="text"
              placeHolder="Busque sus artículos"              
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
          />
        </form>
       
    )
}

AddWord.propTypes = {
    setWord: PropTypes.func.isRequired
 }
