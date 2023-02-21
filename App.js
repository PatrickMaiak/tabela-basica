import './App.css';

function App() {
  return (
    
    <div className="App">
      <h1>exemplo de formulario</h1>
      <fieldset id="formulario">
        <legend>formulario </legend>
        <label for="nome">Nome</label>
        <input type="text" id="nome"/><br></br>
        <label for="email">email</label>
        <input type="email" id="email"/><br></br>
        <label for="telefone">telefone</label>
        <input type="number" id="telefone"/><br></br>
        <label for="texto">texto</label>
        <textarea id="texto" cols="35" rows="8"></textarea><br></br>
 
      </fieldset>
           </div>
  );
}

export default App;
