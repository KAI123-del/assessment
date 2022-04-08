import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import Applications from './Pages/Applications';
import Profile from './Pages/Profile.js';
import maleOne from './Images/maleOne.jpg';
import maleTwo from './Images/maleTwo.jpg';
import maleThree from './Images/maleThree.jpg';
import femaleOne from './Images/femaleOne.jpg';
import femaleTwo from './Images/femaleTwo.jpg';
import femaleThree from './Images/femaleThree.jpg';

var female1 = <img className='rounded-xl' src={femaleOne} alt="candidate"/>
var female2 = <img className='rounded-xl  '  src={femaleTwo} alt="candidate"/>
var female3 = <img className='rounded-xl'  src={femaleThree} alt="candidate"/>
var male1 = <img className='rounded-xl'  src={maleOne} alt="candidate"/>
var male2 = <img className='rounded-xl' src={maleTwo} alt="candidate"/>
var male3 = <img className='rounded-xl' src={maleThree} alt="candidate"/>


function App() {
  const idvar = [{
    id: 1,
    name: 'Anushka',
    title:'React.js Developer',
    
    img:female1,
    location:'dehradoon'
  },
  {
    id: 2,
    name: 'Komal',
    title:'React.js Developer',
   
    img:female2,
    location:'delhi',
  },
  {
    id: 3,
    name: 'Jyoti',
    title:'React.js Developer',
    
    img:female3,
    location:'mumbai',
  },
  {
    id: 4,
    name: 'Aman',
    title:'React.js Developer',
    
    img:male1,
    location:'himanchal',
  },
  {
    id: 5,
    name: 'Mayank',
    title:'React.js Developer',
    
    img:male2,
    location:'shimla',
  },
  {
    id: 6,
    name: 'Pankaj',
    title:'React.js Developer',
    
    img:male3,
    location:'goa'

  }
  ]


  const Arr = idvar.map((candidate) => (<Profile img={candidate.img} title={candidate.title} id={candidate.id} name={candidate.name} location={candidate.location}  />))
  return (


    <Router>
      <Switch>
        <Route path='/' exact >
          <Applications />
        </Route>


        <Route path='/first' >
          {Arr[0]}
        </Route>
        <Route path='/second' >
          {Arr[1]}
        </Route>
        <Route path='/third' >
          {Arr[2]}
        </Route>
        <Route path='/four' >
          {Arr[3]}
        </Route>
        <Route path='/five' >
          {Arr[4]}
        </Route>
        <Route path='/six' >
          {Arr[5]}
        </Route>




      </Switch>
    </Router>



  );
}

export default App;
