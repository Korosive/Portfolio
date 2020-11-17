import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Media from 'react-bootstrap/Media';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import reportWebVitals from './reportWebVitals';
import Navigation from './Navigation';

class Portfolio extends Component {
	render() {
		return(
			<Navbar bg="dark" variant="dark" fixed="top">
				<Nav className="mr-auto justify-content-center">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="#about">About</Nav.Link>
					<Nav.Link href="#portfolio">Portfolio</Nav.Link>
					<Nav.Link href="#contact">Contact</Nav.Link>
					<Nav.Link href="#">Blog</Nav.Link>
				</Nav>
			</Navbar>
			<Jumbotron fluid>
				<Container>
					<h1>About me</h1>
					<hr />
					<p>[About Me]</p>
				</Container>
			</Jumbotron>
			<h1 className="#portfolio">Portfolio</h1>
			<hr />
			<Media>
				<img width={128} height={128} 
					className="align-self-start mr-3"
					src="" alt="[Project Title]"/>
				<Media.Body>
					<h5>Australian Adverts</h5>
					<p>[Project Description]</p>
					<a href="#" className="btn btn-primary">View Code</a>
					<a href="#" className="btn btn-primary">View Live</a>
				</Media.Body>
			</Media>
			<Media>
				<img width={128} height={128} 
					className="align-self-start mr-3"
					src="" alt="[Project Title]"/>
				<Media.Body>
					<h5>Mocking Record Label</h5>
					<p>[Project Description]</p>
					<a href="#" className="btn btn-primary">View Code</a>
					<a href="#" className="btn btn-primary">View Live</a>
				</Media.Body>
			</Media>
			<Media>
				<img width={128} height={128} 
					className="align-self-start mr-3"
					src="" alt="[Project Title]"/>
				<Media.Body>
					<h5>[Project Title]</h5>
					<p>[Project Description]</p>
					<a href="#" className="btn btn-primary">View Code</a>
					<a href="#" className="btn btn-primary">View Live</a>
				</Media.Body>
			</Media>
			<ListGroup horizontal>
				<ListGroup.Item>
					<a href="mailto:eddie.taing34@gmail.com">
						<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  							<path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
						</svg>
						eddie.taing34@gmail.com
					</a>
				</ListGroup.Item>
				<ListGroup.Item>
					<a href="https://github.com/Korosive">
						<img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />
					</a>
				</ListGroup.Item>
			</ListGroup>
		);
	}
}

ReactDOM.render(<Portfolio />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
