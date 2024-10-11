import React from 'react';
import DrawingTools from '../DrawingTools/DrawingTools';
import MapLayerManager from '../MapLayerManager/MapLayerManager';
import MapStylePicker from '../MapStylePicker/MapStylePicker';

import './RightMenu.css'; // Ensure this path is correct

import ScreenCapture from '../ScreenCapture/ScreenCapture';

interface RightMenuProps {
  styles: { name: string; url: string }[];
  onSwitch: (styleUrl: string) => void;
}

const RightMenu: React.FC<RightMenuProps> = ({ styles, onSwitch }) => {
  return (
    <div className="right-menu">
      <MapStylePicker styles={styles} onSwitch={onSwitch} />
      <MapLayerManager />
      <DrawingTools />
      <ScreenCapture />
    </div>
  );
};

export default RightMenu;
