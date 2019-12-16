import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './headerTools.scss'

class HeaderTools extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchKey : null,
    }
  }

  searchKey = (e) => {
    this.setState({searchKey : e.target.value})
  }

  processSearch = () => {
    this.props.search(this.state.searchKey)
  }

    render() {
      return (
        <div className="HeaderTools" id="headerTools">
          <nav className="navbar navbar-light bg-headerTools">
            <div className="container-fluid">
              <div className="row">

                <div className="col-sm-4 SearchSection">
                  <div className="input-group">
                    <input className="form-control my-0 py-1 SearchInput" type="text" placeholder="Search" aria-label="Search" onChange={this.searchKey}/>
                    <div className="input-group-append">
                      <span id="searchIcon" className="input-group-text SearchIcon lighten-3" onClick={this.processSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </nav>


        </div>
      )}

    }

export default HeaderTools;
