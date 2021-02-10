import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './Components/Form';
import ListaReceitas from './Components/ListaReceitas';

function App() {
  const [inputText, setInputText] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  const APP_ID = "d62841c6";
  const APP_KEY = "acb5ffa2244d107ac47f173c4690286c";

  useEffect(() => {
    pegarReceitas();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  async function pegarReceitas() {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <Form
        setQuery={setQuery} 
        inputText={inputText}
        setInputText={setInputText}
      />
      {recipes.map(recipe => (
          <ListaReceitas
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
          />
      ))}    
         
    </div>
  );
}

export default App;
