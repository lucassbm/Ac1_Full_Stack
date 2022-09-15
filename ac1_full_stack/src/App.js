import { useState } from 'react';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {    
    const { name, value, type, checked } = e.target;
    const isCheckbox = type == 'checkbox';

    const data = formValues[name] || {};
    if (isCheckbox) {
      data[value] = checked;
    }
    
    const newValue = isCheckbox ? data : value;
    setFormValues({...formValues, [name]: newValue});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log('*** handleSubmit', data);
  };

  console.log('*** formValues', formValues);
  return (
    <form onSubmit={handleSubmit}>
      
      <h2>Nome<input tpe="text" name="nome" placeholder='nome' onChange={handleInputChange} value={formValues.nome || ''}/></h2>
      <h2>Email<input tpe="text" name="email" placeholder='email' onChange={handleInputChange} value={formValues.email || ''}/></h2>

      <h2>Linguagem de Programação preferida</h2>
      <select name="language" onChange={handleInputChange} value={formValues.language || ''}>
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="python">Python</option>
        <option value="html">HTML</option>
        <option value="CSS">CSS</option>
        <option value="ruby">Ruby</option>
      </select>


      <h2>Pratica exercícios físicos ?</h2>
      <div className='radios'>
        <label>
          <input type="radio" value="sim" name="escolha" onChange={handleInputChange} checked={formValues.escolha == 'sim'}/> Sim
        </label>
        <label>
          <input type="radio" value="nao" name="escolha" onChange={handleInputChange} checked={formValues.escolha == 'nao'}/> Não
        </label>
      </div>


      <h2>Redes sociais que utiliza</h2>
      <div className="checks">
        <label><input type="checkbox" name="social" value="twitter" onChange={handleInputChange} checked={formValues.social && formValues.social.twitter}/>Twitter</label>
        <label><input type="checkbox" name="social" value="instagram" onChange={handleInputChange} checked={formValues.social && formValues.social.instagram}/>Instagram</label>
        <label><input type="checkbox" name="social" value="facebook" onChange={handleInputChange} checked={formValues.social && formValues.social.facebook}/>Facebook</label>
        <label><input type="checkbox" name="social" value="whatsapp" onChange={handleInputChange} checked={formValues.social && formValues.social.whatsapp}/>WhatsApp</label>
        <label><input type="checkbox" name="social" value="discord" onChange={handleInputChange} checked={formValues.social && formValues.social.discord}/>Discord</label>
      </div>

      <h2>Deixe um comentário<textarea name="bio" onChange={handleInputChange} value={formValues.bio || ''}></textarea></h2>

      <button type="submit"> Enviar</button>
    </form>
  );
}

export default App;
