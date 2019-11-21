import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import DataFetcher from './components/data-fetcher'
import Post from './components/post'
import PostList from './components/post-list'
import { setupStore } from './store'

import logo from './assets/vertical-logo.png'

const Container = styled.div`
  text-align: center;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #282c34;
  cursor: pointer;
`

const LogoImage = styled.img`
  height: 20px;
  margin: 20px;
`

const Text = styled.span`
  color: #ffffff;
`

const store = setupStore()

class App extends React.PureComponent {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <DataFetcher>
            <Container>
              <Header onClick={this.navigateHome}>
                <LogoImage src={logo} />
                <Text>Vertical Strategy Academy - TypeScript</Text>
              </Header>
              <Switch>
                <Route exact path="/">
                  <PostList />
                </Route>
                <Route path="/post/:id">
                  <Post />
                </Route>
              </Switch>
            </Container>
          </DataFetcher>
        </Router>
      </Provider>
    )
  }

  public navigateHome = () => (window.location.href = '/')
}

export default App
