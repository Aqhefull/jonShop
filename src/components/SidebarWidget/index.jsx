import React from 'react';
import PropTypes from 'prop-types';

const SidebarWidget = ({ title, children }) => (
  <div className="sidebar-widget">
    {title && <h6>{title}</h6>}
    <div className="sidebar-widget">
      {children}
    </div>
  </div>
);

SidebarWidget.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

SidebarWidget.defaultProps = {
  title: '',
  children: null
}

export default SidebarWidget;
