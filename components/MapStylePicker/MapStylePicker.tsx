// MapStylePicker.tsx
import React from 'react';
import { IconMap } from '@tabler/icons-react';
import { Button, Menu } from '@mantine/core';

interface MapStylePickerProps {
  styles: { name: string; url: string }[];
  onSwitch: (styleUrl: string) => void;
}

const MapStylePicker: React.FC<MapStylePickerProps> = ({ styles, onSwitch }) => (
  <div>
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
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--mantine-color-gray-4)';
            e.currentTarget.style.backgroundColor = 'var(--mantine-color-gray-8)';
          }}
        >
          <IconMap />
        </Button>
      </Menu.Target>
      <Menu.Dropdown
        style={{
          backgroundColor: 'var(--mantine-color-gray-9)',
          border: 'none',
          opacity: 0.95,
        }}
      >
        {styles.map((style) => (
          <Menu.Item
            key={style.name}
            onClick={() => onSwitch(style.url)}
            style={{
              color: 'var(--mantine-color-gray-4)',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--mantine-color-gray-8)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--mantine-color-gray-4)';
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
