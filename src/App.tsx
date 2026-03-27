import { LayoutProvider, useLayout } from './contexts/LayoutContext';
import OriginalLayout from './layouts/OriginalLayout';
import ClassicLayout from './layouts/ClassicLayout';
import StudioLayout from './layouts/StudioLayout';
import MagazineLayout from './layouts/MagazineLayout';

const layouts = [OriginalLayout, ClassicLayout, StudioLayout, MagazineLayout];

function AppContent() {
  const { layout } = useLayout();
  const Layout = layouts[layout];
  return <Layout />;
}

function App() {
  return (
    <LayoutProvider>
      <AppContent />
    </LayoutProvider>
  );
}

export default App;
