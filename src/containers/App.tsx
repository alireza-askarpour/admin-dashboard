import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from '../layout/Layout'

import { AddTodoModealProvider } from '../providers/addTodoModeal'

import { routes } from '../routes'

function App() {
  return (
    <AddTodoModealProvider>
      <Router>
        <Layout>
          <Routes>
            {routes.map((item, index) => (
              <Route key={index} path={item.path} element={item.element} />
            ))}
          </Routes>
        </Layout>
      </Router>
    </AddTodoModealProvider>
  )
}

export default App
