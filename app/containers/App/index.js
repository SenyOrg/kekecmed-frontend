/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectGlobal } from './selectors';
import { toggleNavigation, toggleControlSidebar, activateControlSidebarTab } from './actions';
import boot from 'components/Layout/boot';
import Wrapper from 'components/Layout/Wrapper';
import Header from 'components/Layout/Header';
import Sidebar from 'components/Layout/Sidebar';
import ContentWrapper from 'components/Layout/ContentWrapper';
import Footer from 'components/Layout/Footer';
import ControlSidebar from 'components/Layout/ControlSidebar';

/**
 * App
 *
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class App extends React.Component {
  /**
   * Attributes
   */
  protoTypes = {
    children: React.PropTypes.node,
  }

  /**
   * Constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);
  }

  /**
   * Runs when component is mounted
   */
  componentDidMount() {
    boot();
  }

  /**
   * Render Component
   *
   * @returns {XML}
   */
  render() {
    return (
      <Wrapper>
        <Helmet
          titleTemplate="%s - KekecMed"
          defaultTitle="Welcome"
          meta={[
            { name: 'description', content: 'Welcome to KekecMED' },
          ]}
        />
        <Header toggleNavigation={this.props.toggleNavigation} toggleControlSidebar={this.props.toggleControlSidebar}/>
        <Sidebar location={this.props.location.pathname} view={this.props.global.toJS().view}/>
        <ContentWrapper>
          {React.Children.toArray(this.props.children)}
        </ContentWrapper>
        <Footer/>
        <ControlSidebar view={this.props.global.toJS().view} activateTab={this.props.activateControlSidebarTab}/>
        <div className="control-sidebar-bg"></div>
      </Wrapper>
    );
  }
}


/**
 * Connect to store
 */
const mapStateToProps = createStructuredSelector({
  global: selectGlobal()
});

export function mapDispatchToProps(dispatch) {
  return {
    toggleNavigation: (evt) => dispatch(toggleNavigation()),
    toggleControlSidebar: (evt) => dispatch(toggleControlSidebar()),
    activateControlSidebarTab: (tabName) => dispatch(activateControlSidebarTab(tabName))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
