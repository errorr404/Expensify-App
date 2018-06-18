import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

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
    404!
  </div>
);
const routes = (
   <BrowserRouter>
     {/* to display the 404 error we have to choose switch */}
     <Switch>
       <Route path="/" component={ExpenseDashboardPage} exact={true}/>
       <Route path="/create" component={AddExpensePage}  />
       <Route path="/edit" component={EditExpensePage} />
       <Route path="/help" component={HelpPage} />
        {/* here the path is optional */}
       <Route component={NotFoundPage}/>

     </Switch>
   </BrowserRouter>
);

export default routes;
