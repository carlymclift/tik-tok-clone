import './App.css';
import Video from './Video'

function App() {
  return (
    //BEM - lowercase classnames I believe
    <div className="app">
      <h1>hello, lets build an app</h1>
      <div className='app__videos '>
        <Video />
      </div>
    </div>
  );
}

export default App;
