import React from 'react';

import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () =>(
  <BrowserRouter>
    <div>
      <Header />
      {/* to display the 404 error we have to choose switch */}
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}  />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
         {/* here the path is optional */}
        <Route component={NotFoundPage}/>

      </Switch>
    </div>

  </BrowserRouter>
);






export default AppRouter;
