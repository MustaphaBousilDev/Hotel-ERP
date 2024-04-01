import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import Admin from "./pages/Admin";
import DashboardLayout from "./layouts/Layout";
import { LayoutProvider } from "./hooks/useLayouts";
import './i18n';
import Home from "./pages/Home";
//tasks 
import {Add,Tasks,Config,Raport} from './pages/tasks'
import Authentication from './pages/auth';
import { Employee } from "./pages/employes";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:5007/graphql', // Your GraphQL server URL
});

export const config = {
  headers: {
      Authentication: `Bearer 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`,
  }
}

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from wherever it's stored (e.g., local storage, context, etc.)
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxMTkyMzYwOCwiZXhwIjoxNzExOTI3MjA4fQ.N1R3uu248yEIUMiYDjACJCpkjXjkylQwGkvUq_RGa2o";
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      Authentication: token ? token : '',
    }
  }
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const App:React.FC = () => (
  <ApolloProvider client={client}>
    <LayoutProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/auth' element={<Authentication/>} />
        <Route path='/dashboard' element={<DashboardLayout/>}>
          <Route path='/dashboard' element={<Admin/>} />
          <Route path='/dashboard/tasks' element={<Tasks/>} />
          <Route path='/dashboard/tasks/add' element={<Add/>} />
          <Route path='/dashboard/tasks/config' element={<Config/>} />
          <Route path='/dashboard/tasks/report' element={<Raport/>} />
          <Route path='/dashboard/employes' element={<Employee/>} />
        </Route>
      </Routes>
    </Router>
    </LayoutProvider>
  </ApolloProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
