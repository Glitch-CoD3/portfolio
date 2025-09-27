import './App.css'

import Skills from './componants/Skills';
import Sidebar from './componants/Sidebar';
import Navigation from './componants/Navigation';
import About from './componants/About';
import Education from './componants/Education';
import Portfolio from './componants/Portfolio';

function App() {
  return (
    <>


      <div className="main-container">


        <div className="Sidebar">
          <Sidebar />
        </div>

        {/* content-baar */}
        <div className="content-bar">
          <div className='nav-bar'>
            <Navigation />
          </div>

          <div className='content-body'>
            <About />

            <Skills />

            <Education />

            <Portfolio />

          </div>



        </div>


      </div>


    </>
  );
}

export default App;

