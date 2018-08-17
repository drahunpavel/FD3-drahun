import { connect } from 'react-redux'
import SidebarComponent from './src/components/Sidebar'

export const Sidebar = connect(state => ({
  users: state.users
}), {})(SidebarComponent)