import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { State } from '../store'
import { Header2, Link, Section } from './elements'

interface StateProps extends ReturnType<typeof mapStateToProps> {}

type Props = StateProps & RouteComponentProps

class PostList extends React.PureComponent<Props> {
  public render() {
    const { posts } = this.props

    return (
      <>
        <Section>
          <Header2>PostList</Header2>
        </Section>

        {posts.map((post) => (
          <Section key={post.id}>
            <Link to={`/post/${post.id}`}>{post.description}</Link>
          </Section>
        ))}
      </>
    )
  }
}

const mapStateToProps = (state: State) => ({
  posts: state.posts.items,
})

export default withRouter(connect(mapStateToProps)(PostList))
