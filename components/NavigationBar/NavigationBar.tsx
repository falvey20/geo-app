// Use client directive

'use client';

import { useState } from 'react';
import {
  IconAnchor,
  IconAntenna,
  IconBell,
  IconHistory,
  IconHome2,
  IconLogout,
  IconMap,
  IconPolygon,
  IconRoute,
  IconSatellite,
  IconSettings,
  IconShip,
  IconTools,
} from '@tabler/icons-react';
import { Center, Image, rem, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import rokeLogo from '../../assets/rokeLogo.png';
import classes from './NavbarMinimal.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconShip, label: 'Fleet' },
  { icon: IconAnchor, label: 'Ports' },
  { icon: IconHistory, label: 'History' },
  { icon: IconTools, label: 'Tools' },
  { icon: IconSatellite, label: 'SAR Imagery' },
  { icon: IconMap, label: 'Maps' },
  { icon: IconRoute, label: 'Routes' },
  { icon: IconBell, label: 'Notifications' },
  { icon: IconPolygon, label: 'Drawings' },
  { icon: IconAntenna, label: 'Radio Frequency' },
];

export function NavbarMinimal() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center
        style={{ marginTop: '1rem', marginBottom: '1rem' }} // Adds 1rem spacing above and below the logo
      >
        {/* Use MantineImage to ensure responsive scaling */}
        <Image
          src={rokeLogo.src}
          alt="Roke Logo"
          width={80} // Only set width, height will adjust automatically
          style={{ objectFit: 'contain' }} // Ensure the image doesn't get cropped
        />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSettings} label="Settings" />
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  );
}
