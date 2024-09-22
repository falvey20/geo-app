// MapStylePicker.tsx
import React from 'react';
import { IconMap } from '@tabler/icons-react';
import { Button, Menu } from '@mantine/core';

interface MapStylePickerProps {
  styles: { name: string; url: string }[];
  onSwitch: (styleUrl: string) => void;
}

const MapStylePicker: React.FC<MapStylePickerProps> = ({ styles, onSwitch }) => (
  <div
    style={{
      position: 'absolute',
      top: '50%', // Center vertically
      right: '10px', // Position it towards the right
      transform: 'translateY(-50%)', // Adjust for vertical centering
      zIndex: 1000,
    }}
  >
    <Menu withinPortal={false} position="left">
      <Menu.Target>
        <Button
          style={{
            backgroundColor: 'var(--mantine-color-gray-8)',
            color: 'var(--mantine-color-gray-4)',
            size: 'xs',
            opacity: '0.8',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--mantine-color-gray-9)';
            e.currentTarget.style.color = 'white'; // Change text color on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--mantine-color-gray-4)'; // Reset text color
            e.currentTarget.style.backgroundColor = 'var(--mantine-color-gray-8)';
          }}
        >
          <IconMap />
        </Button>
      </Menu.Target>
      <Menu.Dropdown
        style={{
          backgroundColor: 'var(--mantine-color-gray-9)', // Same background as button
          border: 'none', // Remove border
          opacity: 0.95,
        }}
      >
        {styles.map((style) => (
          <Menu.Item
            key={style.name}
            onClick={() => onSwitch(style.url)}
            style={{
              color: 'var(--mantine-color-gray-4)', // Set text color to grey
              transition: 'background-color 0.2s', // Smooth transition
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--mantine-color-gray-8)';
              e.currentTarget.style.color = 'white'; // Change text color on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'; // Reset background
              e.currentTarget.style.color = 'var(--mantine-color-gray-4)'; // Reset text color
            }}
          >
            {style.name}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  </div>
);

export default MapStylePicker;
