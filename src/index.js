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

import AppContext from './contexts/AppContext'
import { DashboardLayout } from './layouts/DashboardLayout'

import { Page1 } from './pages/Page1'
import { Page2 } from './pages/Page2'


ReactDOM.render(
  <AppContext>
    <BrowserRouter>
      <DashboardLayout>
        <Switch>

          <Route path="/page1" exact component={Page1} />
          <Route path="/page2" component={Page2} />

          <Redirect from="*" to="/page1" />
        </Switch>
      </DashboardLayout>
    </BrowserRouter>
  </AppContext>,
  document.getElementById('root')
);
