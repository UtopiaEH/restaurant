import React, { useEffect } from 'react'
import { Layout } from "antd";
import MenuNav from "../../common/components/Menu";
import { getCategories } from "../../utils/axiosAPI/api";

const { Sider } = Layout;

function PortalSider() {

  // useEffect(() => {
  //   getCategories()
  // },[])

  return (
    <Sider className="site-layout-background" width={ 200 }>
      <MenuNav />
    </Sider>
  )
}

export default PortalSider