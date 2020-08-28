import {Provider} from 'react-redux';
import App from './components/App';
import createStore from 'redux';


const store=createStore(Reducer)


<Provider store={store} >
  <App/>
</Provider>