import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Header2, Link, Section } from './elements'

class PostList extends React.PureComponent {
  render() {
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

const mapStateToProps = (state) => ({
  posts: state.posts.items,
})

export default withRouter(connect(mapStateToProps)(PostList))
