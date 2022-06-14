import React from 'react'
import { Routes, Route } from "react-router-dom"
import Layout from './layouts'
import routes from "./routes"
const App = () => {
  return (
    <Layout>
      <Routes>
        {
          routes.map(route =>
            <Route
              key={route.name}
              path={route.path}
              element={<route.component />}
            />
          )
        }
      </Routes>
    </Layout>
  )
}

export default App