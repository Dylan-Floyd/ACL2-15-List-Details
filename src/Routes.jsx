import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DetailView from './views/DetailView/DetailView.jsx'
import Home from './views/Home.jsx'
import Layout from './views/Layout.jsx'
import ListView from './views/ListView/ListView.jsx'

export default function Routes() {
  return (
    <Layout>
      <Switch>
        <Route path='/characters/:id'>
          <DetailView />
        </Route>
        <Route path='/characters'>
          <ListView />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Layout>
  )
}
