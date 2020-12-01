import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Media from 'react-bootstrap/Media';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import reportWebVitals from './reportWebVitals';
import AusAdvertsLogo from './Australian Adverts-logo.png';
import MockingRecordLogo from './Mocking Record Label Logo.png';
import WildFireLogo from './Wild Fire Electronics Logo.png';

class Portfolio extends Component {
	render() {
		return(
			<Fragment>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="/">Portfolio</Navbar.Brand>
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
					</Nav>
				</Navbar>
				<div className="m-5">
					<Jumbotron className="text-center">
						<h1>Eddie Taing</h1>
						<p>
							Eddie is from Melbourne, Victoria where he works as an Package Handler at Pack Point PTY LTD. 
							He has 2 years of experience with Java Spring Boot, ReactJS Framework, Apache Web Server and PostgreSQL with a focus on web applications and websites. 
							In his spare time, Eddie enjoys programming, video games, anime and manga.
						</p>
						<Button variant="link">
							<a href="mailto:eddie.taing34@gmail.com">
								<svg width="32" height="32" viewBox="0 0 16 16" className="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  									<path fillRule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
								</svg>
							</a>{' '}
						</Button>
						<Button variant="link" className="p-2">
							<a href="https://github.com/Korosive" >
								<img height="32" width="32" alt="Github Profile" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />
							</a>
						</Button>
					</Jumbotron>
				</div>
				<div className="m-5">
					<h1 className="text-center">Projects</h1>
					<hr />
				</div>
				<Media className="m-5">
					<img width={200} height={200} 
						className="align-self-start mr-3 img-fluid"
						src={AusAdvertsLogo} alt="Australian Adverts"/>
					<Media.Body>
						<h5>Australian Adverts</h5>
						<p>[Project Description]</p>
						<a href="https://github.com/Korosive/AustralianAdverts" className="btn btn-primary m-1">View Code</a>
					</Media.Body>
				</Media>
				<Media className="m-5">
					<img width={200} height={200} 
						className="align-self-start mr-3 img-fluid"
						src={MockingRecordLogo} alt="Mocking Record Label"/>
					<Media.Body>
						<h5>Mocking Record Label</h5>
						<p>[Project Description]</p>
						<a href="https://github.com/Korosive/MockingRecordLabel" className="btn btn-primary m-1">View Code</a>
					</Media.Body>
				</Media>
				<Media className="m-5">
					<img width={200} height={200} 
						className="align-self-start mr-3 img-fluid"
						src={WildFireLogo} alt="Wild Fire Electronics"/>
					<Media.Body>
						<h5>Wild Fire Electronics</h5>
						<p>[Project Description]</p>
						<a href="https://github.com/Korosive/WildFireElect" className="btn btn-primary m-1">View Code</a>
					</Media.Body>
				</Media>
			</Fragment>
		);
	}
}

ReactDOM.render(<Portfolio />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
