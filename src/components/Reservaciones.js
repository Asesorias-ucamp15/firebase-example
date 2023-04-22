import React, {useState} from 'react';
import { createItem, getItems } from '../manage';

const Reservaciones = () => {
  const [nombre, setNombre] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    createItem({nombre})
  }

  return (
    <div>
      <form>
        <input type='text' placeholder='nombre' onChange = {e => setNombre(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  )
}

export default Reservaciones