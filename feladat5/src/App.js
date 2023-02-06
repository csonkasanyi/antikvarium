import 'bootstrap/scss/bootstrap.scss';
import { useState } from 'react';

function App() {
  const [cim, setCim] = useState('')
  const [isbn, setIsbn] = useState('')

  class Konyv {
    constructor(cim, isbn) {
      this.cim = cim;
      this.isbn = isbn
      if (cim.length === 0) {

      }

      if (isbn.length === 10 || isbn.length === 13) {

      }
    }

    toString() {
      <li>{this.cim} ({this.isbn})</li>
    }
  }

  const saveBook = () => {

    setCim('');
    setIsbn('')
  }

  return (
    <div className='container'>
      <div className='mb-2'>
        <label className='form-label' htmlFor='title'>Cím</label>
        <input type='text' className='form-control' id='title' value={cim} onChange={e => setCim(e.target.value)}/>
      </div>
      <div className='mb-2'>
        <label className='form-label' htmlFor='isbn'>ISBN</label>
        <input type='text' className='form-control' id='isbn' value={isbn} onChange={e => setIsbn(e.target.value)}/>
      </div>
      <div className='alert alert-danger'> [[ A hibaüzenet helye ]] </div>
      <div className='mb-2'>
        <input type='button' className='btn btn-primary' value='Új könyv' onClick={saveBook}/>
      </div>
      <ol>
        {
          
        }
      </ol>
    </div>
  );
}

export default App;
