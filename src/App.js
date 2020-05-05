import React from 'react';

// bootstrap library
// import './assets/stylesheet/bootstrap/css/bootstrap-grid.min.css';
// import './assets/stylesheet/bootstrap/css/bootstrap-reboot.min.css';

// custom stylesheet
import './assets/style/style.scss';

import Routes from "./routes";
// import ErrorBoundary from './components/ErrorBoundary';

// const App = () => (
// //   <ErrorBoundary>
//     // <Routes/>
// //   </ErrorBoundary>
// );

const App = () => (
    <Routes />
    );


export default App;