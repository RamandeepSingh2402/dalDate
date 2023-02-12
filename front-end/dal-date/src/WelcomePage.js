import LoginPage from './components/LoginPage';
import './styling/WelcomePage.css';
import {Route, Routes, Link} from 'react-router-dom';


function WelcomePage() {
    return(
    <div className="WelcomePage">
      <header className="Dal-Date">
        <h1>Welcome to Dal Date.</h1>
      </header>
      <p id='intro'>
        <p>
          A platform only for Dal Students.
        </p>
        <p>
          Create an account and get in the pool looking for like minded people.
        </p>
      </p>  
      <p id='loginPrompt'>
        Already have an account?<br/>
        <Link to="/loginPage">Log in</Link>
      </p>
    </div>
    );
}

export default WelcomePage;