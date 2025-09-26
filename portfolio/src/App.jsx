import './App.css'

import Skills from './componants/Skills';
import Sidebar from './componants/Sidebar';
import Navigation from './componants/Navigation';
import About from './componants/About';
function App() {
  return (
    <>
      <div className="main-section">

        <div className="main-container">
          {/* sidebar */}
          <Sidebar />

          {/* content-baar */}
          <div className="content-bar">

            <Navigation />

            {/* about me */}
            <About />

            {/* skills */}
            <Skills />
          </div>

        </div>

      </div>
    </>
  );
}

export default App;

