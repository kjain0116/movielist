import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

// const App = (props) => (
//   <div>Hello World!</div>
// );
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: movies,
      search: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch("/api/movies")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            movies: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  handleChange(search) {
    this.setState({
      search
    })
  }
  handleSubmit(event){
    event.preventDefault();
    let requestOptions = {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify({title: event.target.title.value})};
    fetch("/api/movies", requestOptions).then(this.componentDidMount());
  }
  render(){
    return (
      <div>
        <h1>Movies</h1>
        <form onSubmit = {this.handleSubmit}><input type = "text" placeholder = "Add movie title here" name = "title"></input>
        <input type = "submit" value = "add"></input></form>
        <Search change = {this.handleChange.bind(this)}/>
        <MovieList movies = {this.state.movies.filter((movie)=>{
          return movie.title.includes(this.state.search)
        })}/>
      </div>
    )
  }
}
export default App;

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];