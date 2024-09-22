import Map from '@/components/Map/map';
import { NavbarMinimal } from '@/components/NavigationBar/NavigationBar';

export default function HomePage() {
  return (
    <>
      {/* Container for the layout */}
      <div style={{ display: 'flex', height: '100vh' }}>
        <NavbarMinimal />
        <Map />
      </div>
    </>
  );
}
