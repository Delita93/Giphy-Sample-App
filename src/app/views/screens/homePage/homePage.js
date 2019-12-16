import React from 'react';
import Header from '../../components/header/header'
import HeaderTools from '../../components/headerTools/headerTools'
import { manager } from '../../../managers/manager'
import GifGallery from '../../components/gifGallery'
import Loader from 'react-loader-spinner'


class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gifs : [],
      loading: false,
    }
  }

  componentDidMount() {
      this.setState({loading: true})
      manager.trendingGiphys()
          .then((data) => {
              console.log("trending..",data);

              this.setState({
                  gifs: data,
                  loading: true
              })
          }).catch((e) => {
          console.log("caught error in trending..",e);
      })
  }

  searchKey = (key) => {
      this.setState({loading: true})
      manager.getSearchedGiphys(key)
          .then((data) => {
              this.setState({
                  gifs: data,
                  loading: true
              })
          }).catch((e) => {
            console.log("caught error in search..",e)
          })
  }

  render() {
    return (
      <div>
        <Header />
        <HeaderTools search={this.searchKey}/>
        <GifGallery gifs={this.state.gifs} />
          {
              (this.state.loading) ?
              <div className="Loader">
              <Loader
              type="TailSpin"
              color="#00559D"
              height={100}
              width={100}
              timeout={3000} />
              </div>
              : null
          }
      </div>
    )
  }

}

export default HomePage;
