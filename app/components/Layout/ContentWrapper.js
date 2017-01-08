import React from 'react';
import ContentHeader from './ContentHeader';
import BreadCrumb from './Breadcrumb';
import Crumb from './Crumb';

/**
 * ContentWrapper
 * 
 * @author Selcuk Kekec <skekec@kekecmed.com>
 */
class ContentWrapper extends React.Component {

  /**
   * Constructor
   * 
   * @param props
   */
  constructor(props) {
    super(props);
  }

  /**
   * Render
   *
   * @return {XML}
   */
  render() {
    return (
           <div className="content-wrapper"> {/* Content Wrapper. Contains page content */}
             {/* Content Header (Page header) */}
             <section className="content-header">
               <ContentHeader header={this.props.view.pageHeader} smallHeader={this.props.view.pageSubHeader} />
               <BreadCrumb>
                 {this.props.view.breadCrumb.map((e, i) => {return <Crumb key={i} title={e.title} icon={e.icon} active={e.active} />})}
               </BreadCrumb>
             </section>

             {/* Main content */}
             <section className="content" style={{
               marginLeft: -15,
               marginRight: -15
             }}>

               {/* Content goes here ----> */}
               {React.Children.toArray(this.props.children)}
               {/* /.Content */}

             </section>
             {/* /.content */}
             {/* /.content-wrapper */}
           </div>
    );    
  }
}

export default ContentWrapper;