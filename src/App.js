import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Rentals from "./components/Rentals";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      
        {/* Navbar */}
        <div className="sticky top-0 bg-white z-10">
          <Navbar />
        </div>
        {/* Filters */}
        <Filters />
        {/* Rentals */}
        <Rentals/>
        {/* Footer */}
          <Footer />
    </div>
  );
}

export default App;
