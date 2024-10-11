// DrawingTools.tsx
import React from 'react';
import { IconShape2 } from '@tabler/icons-react';
import { Button, Menu } from '@mantine/core';

interface DrawingToolsProps {}

const DrawingTools: React.FC<DrawingToolsProps> = ({}) => (
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
          <IconShape2 />
        </Button>
      </Menu.Target>
    </Menu>
  </div>
);

export default DrawingTools;
