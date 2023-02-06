import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react'

function App() {
  const [konyvek, setKonyvek] = useState([])

  useEffect(() => {
    console.log('helo')
    axios.get('./feladat6-adatok.json')
      .then(response => setKonyvek(response.data))
  }, [])

  return (
    <div className="App">
      <table className="table table-dark table table-striped">
        <thead>
          <tr>
            <th scope="col">Cím</th>
            <th scope="col">Polc</th>
          </tr>
        </thead>
        <tbody>
          {
            konyvek.sort((a, b) => {
              if (a.cim < b.cim) {
                return -1;
              }
              if (a.cim > b.cim) {
                return 1;
              }
              return 0;
            }).map(konyv =>
            (<tr key={konyv.cim}>
              <td>{konyv.cim}</td>
              <td>{konyv.polc}</td>
            </tr>))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
