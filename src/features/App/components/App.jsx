import '../App.css';

import NavBar from '../../NavBar';
import Paths from '../../../core/routes/Paths';

import { GlobalProvider } from '../../../core/context/globalContext';

function App() {
  return (
    <GlobalProvider>
      <NavBar />
      <div className="content">
        <Paths />
      </div>
    </GlobalProvider>
  );
}

export default App
