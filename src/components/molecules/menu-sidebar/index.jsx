import { useState } from 'react'
import { Layout, Menu } from 'antd' 
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons'
import { getMenuItem } from '@shared/get-menu-item'

const { Sider } = Layout

export const MenuSidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const items = [
    getMenuItem('Option 1', '1', <PieChartOutlined />),
    getMenuItem('Option 2', '2', <DesktopOutlined />),
  ]

  return (
    <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
    >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  )
}
