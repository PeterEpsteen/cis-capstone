import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import Home from './js/pages/Home'
import Analysis from './js/pages/Analysis'
import Statements from './js/pages/Statements'
import AddSource from './js/pages/AddSource'
import ObjectPage from './js/pages/ObjectPage'
import Predicate from './js/pages/Predicate'
import ViewObjects from './js/pages/ViewObjects'
import ViewSource from './js/pages/ViewSource'
import ViewRatios from './js/pages/ViewRatios'
import RatioConstruction from './js/pages/RatioConstruction'
import styles from './App.css'
import NavBarInstance from './js/components/NavbarInstance'



const App = () => (
  <Router>
    <div>
     <NavBarInstance />
      <Route exact path="/" component={Home}/>
      <Route path="/analysis" component={Analysis}/>
      <Route path="/statements" component={Statements}/>
      <Route path="/ratio-construction" component = {RatioConstruction}/>
      <Route exact path="/view-ratios" component={ViewRatios}/>
      <Route exact path="/object" component={ObjectPage}/>
      <Route exact path="/predicate" component={Predicate}/>
      <Route exact path="/view-object" component={ViewObjects}/>
      <Route exact path="/add-source" component={AddSource}/>
      <Route exact path="/view-source" component={ViewSource}/>
 </div>
  </Router>
)




// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default App

