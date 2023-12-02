import { useState } from 'react'
import { Layout, Menu } from 'antd' 
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons'
import { getMenuItem } from '@shared/get-menu-item'
import { Routes } from '@shared/routes'
import { useNavigate } from 'react-router'

const { Sider } = Layout

export const MenuSidebar = () => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(true)
  const items = [
    getMenuItem('Products info', Routes.PRODUCTS_INFO, <DesktopOutlined />),
    getMenuItem('Analytics', Routes.ANALYTICS, <PieChartOutlined />),
  ]

  const handleClickMenuItem = (event) => navigate(event.key)

  return (
    <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={setCollapsed}
    >
        <div className="demo-logo-vertical" />
        <Menu 
          theme="dark" 
          mode="inline" 
          items={items}
          onClick={handleClickMenuItem} 
        />
    </Sider>
  )
}
