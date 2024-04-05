// import logo from './logo.svg';
import './App.css';
import { ProjectSection } from './ProjectSection';
import { WorkSection } from './WorkSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  
    return (
      <div className="App">
        <div className="Content">
          <h1 id='intro'>Hi, I'm Cassidy!</h1>
          <h3>Software Engineer</h3>
          <h3>Drexel Software Engineering B.S., 2024</h3>
          <li className = 'icon'><a href = "https://www.linkedin.com/in/cassidyashe/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} color='#ebc77a' size='2x' /></a></li>
          <li className = 'icon'><a href = "https://github.com/systemc12ashe" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faSquareGithub} color='#ebc77a' size='2x' /></a></li>
        </div>
        <div>
          <div>
          <a></a>
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


