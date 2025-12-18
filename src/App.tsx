
import Layout from './components/Layout';
import CommonAreaAlert from './components/CommonAreaAlert';
import WastePolicy from './components/WastePolicy';
import CleaningServiceCountdown from './components/CleaningServiceCountdown';
import TrashBinList from './components/TrashBinList';

function App() {
  return (
    <Layout>
      <div className="pt-6">
        <CommonAreaAlert />
        <CleaningServiceCountdown />
        <TrashBinList />
        <WastePolicy />
      </div>
    </Layout>
  );
}

export default App;
