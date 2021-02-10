import React from 'react';

function Form({ setInputText, inputText, setQuery  }) {
    function updateInputText(e) {
        setInputText(e.target.value);
    }

    function getInputText(e) {
        e.preventDefault();
        setQuery(inputText);
        setInputText("");
    }


    return(
        <div className="form-container">
            <form onSubmit={getInputText} className="form-container" >
                <input
                    onChange={updateInputText}
                    value={inputText}
                    type="text"
                    placeholder="Digite uma receita"
                />
                <button
                    className="btn-procurar" 
                     > Procurar </button>
            </form>
        </div>
    );
}

export default Form;