// MainSearchBar.tsx
import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Button, Menu } from '@mantine/core';

import './MainSearchBar.css';

interface MainSearchBarProps {}

const MainSearchBar: React.FC<MainSearchBarProps> = ({}) => (
  <div className="main-search-bar">
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
          <IconSearch />
        </Button>
      </Menu.Target>
    </Menu>
  </div>
);

export default MainSearchBar;
