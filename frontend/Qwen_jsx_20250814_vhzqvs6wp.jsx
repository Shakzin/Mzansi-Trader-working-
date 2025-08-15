import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Pages from './Pages'; // You'll create this router

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Pages />
    </BrowserRouter>
  );
}

export default App;