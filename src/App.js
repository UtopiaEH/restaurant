import React from 'react';
import { Layout } from 'antd';
import { FOOTER_TEXT, LOGO_TEXT } from "./common/constants";
import PortalContent from "./portal/Content";
import PortalFooter from "./portal/Footer";
import PortalHeader from "./portal/Header";
import PortalSider from "./portal/Sider";

import "antd/dist/antd.css";

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <PortalHeader logoText={ LOGO_TEXT }/>
      <Content style={ { padding: '0 50px', margin: '16px 0' } }>
        <Layout style={ { padding: '24px 0', backgroundColor: "#fff" } }>
          <PortalSider/>
          <PortalContent />
        </Layout>
      </Content>
      <PortalFooter footerText={ FOOTER_TEXT }/>
    </Layout>
  );
}

export default App;
