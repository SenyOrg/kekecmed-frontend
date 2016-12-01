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
    let breadCrumpData = [
      {
        title: 'Test',
        active: false,
        icon: 'dashboard'
      },
      {
        title: 'Test2',
        active: false
      },
      {
        title: 'Test3',
        active: true
      }
    ];

    return (
           <div className="content-wrapper"> {/* Content Wrapper. Contains page content */}
             {/* Content Header (Page header) */}
             <section className="content-header">
               <ContentHeader header="Test" smallHeader="Test"/>
               <BreadCrumb>
                 {breadCrumpData.map((e, i) => {return <Crumb key={i} title={e.title} icon={e.icon} active={e.active} />})}
               </BreadCrumb>
             </section>

             {/* Main content */}
             <section className="content">

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