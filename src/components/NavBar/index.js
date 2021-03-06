import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const { Header } = Layout;

class NavBar extends Component {
  constructor(props) {
    super(props);
    const { selectedKeys } = this.props;
    this.state = {
      selectedKeys,
    };
    this.setSelectedKeys = this.setSelectedKeys.bind(this);
  }

  setSelectedKeys(key) {
    this.setState({
      selectedKeys: key,
    });
  }

  render() {
    const { selectedKeys } = this.state;
    return (
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedKeys}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/" onClick={() => this.setSelectedKeys(['/'])}><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="/upload-worklog-report" onClick={() => this.setSelectedKeys(['/upload-worklog-report'])}><Link to="/upload-worklog-report">Upload Report</Link></Menu.Item>
          <Menu.Item key="/view-payroll-report" onClick={() => this.setSelectedKeys(['/view-payroll-report'])}><Link to="/view-payroll-report">View Payroll Report</Link></Menu.Item>
        </Menu>
      </Header>
    );
  }
}

NavBar.propTypes = {
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
};

NavBar.defaultProps = {
  selectedKeys: ['/'],
};
export default NavBar;
