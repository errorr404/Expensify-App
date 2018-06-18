import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my AddExpensePage component
  </div>
);
const EditExpensePage = () => (
  <div>
    This is from my EditExpensePage component
  </div>
);
const HelpPage = () => (
  <div>
    This is from my HelpPage component
  </div>
);

// component for displaying the 404 error
const NotFoundPage = () => (
  <div>
    {/* 404! - <a href="/">Go home</a>  this occure a full page refreshing  */}
    404! -<Link to="/">Go Home</Link>
    {/* through this Link page server enables the client site routing. */}
  </div>
);

const Header = ()=>(
  <header>
    <h1>Expensify</h1>


  {/* <Link to="/"> dashboard</Link>


  <Link to="/create">Create Expense</Link>


 <Link to="/edit">Edit Expense</Link>

  <Link to="/help">Help</Link> */}

  <NavLink to="/" activeClassName="is-active" exact={true}> dashboard</NavLink>
  <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
  <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
   <NavLink to="/help" activeClassName="is-active">Help</NavLink>

  </header>
);





const routes = (
   <BrowserRouter>
     <div>
       <Header />
       {/* to display the 404 error we have to choose switch */}
       <Switch>
         <Route path="/" component={ExpenseDashboardPage} exact={true}/>
         <Route path="/create" component={AddExpensePage}  />
         <Route path="/edit" component={EditExpensePage} />
         <Route path="/help" component={HelpPage} />
          {/* here the path is optional */}
         <Route component={NotFoundPage}/>

       </Switch>
     </div>

   </BrowserRouter>
);

export default routes;
