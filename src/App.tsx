import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { UserList } from './views';
import { store } from './store';
import { fetchUsers } from './store/Actions';

export class App extends React.Component<{}, {}> {
  componentDidMount() {
    store.dispatch(fetchUsers());
  }

  render() {
    return (
      <Provider store={store}>
          <UserList />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-root'));
