import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './Pages/Main';

function App() {
    return (
        <div>
            <MainPage />
        </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

