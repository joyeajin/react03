
import './App.css';
import UserList from './UserList';
import MovieList from './MovieList/index'
import NameCard from './NameCard';


function App() {
  return (
    <div className="App">
      <UserList />
      <MovieList />
      <NameCard />
    </div>
  );
}

export default App;
