// import logo from './logo.svg';
import './App.css';
import { ProjectSection } from './ProjectSection';
import { WorkSection } from './WorkSection';


function App() {
  
    return (
      <div className="App">
        <div className="Content">
          <h2 id='intro'>Hi, I'm Cassidy!</h2>
          <h3>Software Engineer</h3>
          <h3>Drexel Software Engineering B.S., 2024</h3>
          <p><a href = "https://www.linkedin.com/in/cassidyashe/">LinkedIn</a></p>
          <p><a href = "https://github.com/systemc12ashe">Github</a></p>
        </div>
        <div>
          <div>
            <h2 className='sectionHeader'>Professional Experience</h2>
            <WorkSection />
            <h2 className='sectionHeader'>Projects</h2>
              <ProjectSection />
          </div>
        </div>
      </div>
    );
}

export default App;


