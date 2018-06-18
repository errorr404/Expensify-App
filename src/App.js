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
const routes = (
   <BrowserRouter>
     <div>
       <Route path="/" component={ExpenseDashboardPage} exact={true}/>
       <Route path="/create" component={AddExpensePage}  />
       <Route path="/edit" component={EditExpensePage} />
       <Route path="/help" component={HelpPage} />
     </div>
   </BrowserRouter>
);

export default routes;
