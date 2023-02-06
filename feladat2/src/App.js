function App() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12">Az antikvárium története</h1>
        <p>Az antikváriumot 1901-ben alapították, még az Osztrák–Magyar Monarchia idején. Magát az épületet többször újjá kellet építeni, ez azonban lehetőséget adott a megújításra, korszerűsítésre.</p>

        <p>A jelenlegi épület 2019-ben lett felújítva.</p>

      </div>


      <h2 className="">Hírességek, akik itt jártak</h2>
      <div className="row d-flex justify-content-between">

        <div className="card col-md-3 col-sm-12">
          <div className="card-body">
            <h3 className="card-title">Ady Endre</h3>
            <p className="card-text">Többször is kikölcsönözte Deák Ferenc műveit</p>
            <a href="https://hu.wikipedia.org/wiki/Ady_Endre" className="card-link">Wikipédia</a>
          </div>
        </div>

        <div className="card col-md-3 col-sm-12">
          <div className="card-body">
            <h3 className="card-title">Móra Ferenc</h3>
            <p className="card-text">Az Én Újságom c. gyermeklapba írt művei közül 50-nek a kéziratát az antikváriumnak adományozta</p>
            <a href="https://hu.wikipedia.org/wiki/Móra_Ferenc" className="card-link">Wikipédia</a>
          </div>
        </div>

        <div className="card col-md-3 col-sm-12">
          <div className="card-body">
            <h3 className="card-title">Névtelen adományozó</h3>
            <p className="card-text">1992-ben 500 000 Ft-tal támogatta az antikvárium működését</p>
          </div>
        </div>

      </div>

      <div className="row">

        <h2 className="col-12 mt-5">Új híresség jelzése</h2>
      </div>

      <form className="row">
        <div class="mb-3">
          <label className="form-label">Wikipédia link:</label>
          <input type="text" className="form-control" />
        </div>
        <div class="mb-3">
          <label className="form-label">Leírás:</label>
          <textarea cols="30" rows="10" className="form-control"></textarea>
        </div>

        <button type="submit" class="btn btn-primary mb-3 col-1">Elküld</button>
      </form>
    </div>
  );
}

export default App;
