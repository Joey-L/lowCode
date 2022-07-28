import styles from "./App.less";
import { Layout } from "antd";
import Header from "./layout/Header";
import Sider from "./layout/Sider";
import { StageContext } from "./context/stageContext";
import useStage from "./hooks/useStage";

const { Content } = Layout;
function App() {
  const stage = useStage();
  return (
    <Layout className={styles.app}>
      <StageContext.Provider value={stage}>
        <Header />
        <Layout>
          <Sider />
          <Content></Content>
        </Layout>
      </StageContext.Provider>
    </Layout>
  );
}

export default App;
