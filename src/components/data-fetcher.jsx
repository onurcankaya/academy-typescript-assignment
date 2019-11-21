import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { ApiService } from '../services/api-service'
import { postsSet } from '../store/actions/posts'

class DataFetcher extends React.PureComponent {
  async componentDidMount() {
    const { setPosts } = this.props
    const service = new ApiService()
    const posts = await service.fetchPosts()

    setPosts(posts)
  }

  render() {
    return this.props.children
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
  setPosts: (posts) => dispatch(postsSet(posts)),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DataFetcher)
)
