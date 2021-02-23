import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import './index.css';
import 'antd/dist/antd.css';




ReactDOM.render(
  <AppContextWithFirestore>
    <BrowserRouter>
      <DashboardLayout>
        <Switch>


          <Route path="/page1" exact component={Page1} />
          <Route path="/page2" component={Page2} />

          <Redirect from="*" to="/page1" />
        </Switch>
      </DashboardLayout>
    </BrowserRouter>
  </AppContextWithFirestore>,
  document.getElementById('root')
);
