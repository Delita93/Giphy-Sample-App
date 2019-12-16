import React from 'react';

import { APP_NAME } from '../../../definitions/constants'
import './header.scss'

class Header extends React.Component {

    render() {
      return (
        <div className="navbar HeaderContainer" id="header">

            <div className="container-fluid">
              <div className="row">

                <div className="col-xs-8">
                  <div key="appName" className="AppName">
                    {APP_NAME}
                  </div>
                </div>

              </div>
            </div>
          
        </div>
      )}

    }

export default Header;
