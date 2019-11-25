import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Dispatch } from 'redux'

import { Post } from '../models/post'
import { ApiService } from '../services/api-service'
import { postsSet } from '../store/actions/posts'

interface StateProps extends ReturnType<typeof mapStateToProps> {}
interface DispatchProps extends ReturnType<typeof mapDispatchToProps> {}

type Props = StateProps & DispatchProps & RouteComponentProps

class DataFetcher extends React.PureComponent<Props> {
  public async componentDidMount() {
    const { setPosts } = this.props
    const service = new ApiService()
    const posts = await service.fetchPosts()

    setPosts(posts)
  }

  public render() {
    return this.props.children
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setPosts: (posts: Array<Post>) => dispatch(postsSet(posts)),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DataFetcher)
)
