import React from 'react'

import { Layout } from "antd";

const { Footer } = Layout

function PortalFooter({ footerText }) {
  return <Footer style={{ textAlign: 'center' }}>{ footerText }</Footer>
}

export default PortalFooter