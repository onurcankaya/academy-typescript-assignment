import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Header2, Section, Text } from './elements'

class Post extends React.PureComponent {
  render() {
    const { post } = this.props

    if (!post) {
      return (
        <Section>
          <Text>Post not found</Text>
        </Section>
      )
    }

    return (
      <>
        <Section>
          <Header2>Post {post.id}</Header2>
        </Section>
        <Section>
          <Text>{post.description}</Text>
        </Section>
        <Section>
          <Text>Post {post.text}</Text>
        </Section>
      </>
    )
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.items.find((p) => p.id === props.match.params.id),
})

export default withRouter(connect(mapStateToProps)(Post))
