import PropTypes from 'prop-types' 
import { Layout as AntLayout } from 'antd' 
import { MenuSidebar } from '@components/molecules'
const { Content, Footer } = AntLayout 

export const Layout = ({ children }) => {
  return (
    <AntLayout
      style={{
        minHeight: '100vh',
      }}
    >
      <MenuSidebar />
      <AntLayout>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          ©2023 Created by Mykyta Havryliuk
        </Footer>
      </AntLayout>
    </AntLayout>
  ) 
} 

Layout.propTypes = {
  children: PropTypes.node
}
