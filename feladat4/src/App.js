import Konyvajanlo from "./components/Konyvajanlo";

function App() {
  const konyvek = [
    {
      name: 'A Gyűrű Szövetsége',
      price: 2500,
      akcio: false
    },
    {
      name: 'A Két Torony',
      price: 2000,
      akcio: false
    },
    {
      name: 'A Király Visszatér',
      price: 999,
      akcio: true
    }
  ]

  return (
    <div>
      {konyvek.map(konyv => <Konyvajanlo key={konyv.name} nev={konyv.name} ar={konyv.price} akcio={konyv.akcio} />)}
    </div>
  );
}

export default App;
