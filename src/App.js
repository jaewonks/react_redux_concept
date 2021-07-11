import './App.css';
import Subscribers from './components/Subscribers';
import Display from './components/Display.js'
import View from './components/View.js'
import Comments from './components/Comments.js'
import { Provider } from 'react-redux'
import store from './redux/store.js'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Comments />
      <Subscribers />
      <View />
      <Display />
    </div>
    </Provider>
  );
}

export default App;
