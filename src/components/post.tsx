import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import { State } from '../store'
import { Header2, Section, Text } from './elements'

interface RouteParams {
  id?: string
}
interface RouteProps extends RouteComponentProps<RouteParams> {}
interface StateProps extends ReturnType<typeof mapStateToProps> {}

type Props = StateProps & RouteComponentProps

class Post extends React.PureComponent<Props> {
  public render() {
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

const mapStateToProps = (state: State, props: RouteProps) => ({
  post: state.posts.items.find((p) => p.id === props.match.params.id),
})

export default withRouter(connect(mapStateToProps)(Post))
