import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router'

const MenuComponent = ({ isItemActive, handleOnClickItem }) => (
  <Menu stackable>
    <Menu.Item
      name="/"
      active={isItemActive('/')}
      onClick={handleOnClickItem}
    >
      Home
    </Menu.Item>
    <Menu.Item
      name="/about"
      active={isItemActive('/about')}
      onClick={handleOnClickItem}
    >
      About
    </Menu.Item>
  </Menu>
)

class MenuContainer extends Component {
  state = {
    activeItem: null
  }

  componentDidMount() {
    // Set current active route.
    const { pathname } = this.props.location
    this.setState({
      activeItem: pathname
    })
  }

  isItemActive = itemName => itemName === this.state.activeItem

  handleOnClickItem = (e, { name }) => {
    // Set current route path.
    this.setState({
      activeItem: name
    })
    // Redirect user.
    this.props.history.push(name)
  }

  render() {
    return (
      <MenuComponent
        isItemActive={this.isItemActive}
        handleOnClickItem={this.handleOnClickItem}
      />
    )
  }
}

export default withRouter(MenuContainer)
