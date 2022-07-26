import React from "react";
import { Button, Layout } from "antd";
import styles from "./index.less";

function Header() {
  return (
    <Layout.Header className={styles.header}>
      <Button type="primary">发布</Button>
    </Layout.Header>
  );
}

export default Header;
