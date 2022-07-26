import styles from "./App.less";
import { Layout } from "antd";
import Header from "./layout/Header";
import Sider from "./layout/Sider";

const { Content } = Layout;
function App() {
  return (
    <Layout className={styles.app}>
      <Header />
      <Layout>
        <Sider />
        <Content></Content>
      </Layout>
    </Layout>
  );
}

export default App;
