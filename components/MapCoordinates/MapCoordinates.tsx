import { Box } from '@mantine/core';

interface MapCoordinatesProps {
  coordinates: { lng: string; lat: string };
}

export function MapCoordinates({ coordinates }: MapCoordinatesProps) {
  return (
    <Box
      style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'var(--mantine-color-gray-8)',
        color: 'var(--mantine-color-gray-4)',
        borderBottomLeftRadius: '3px',
        borderBottomRightRadius: '3px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        opacity: '0.8',
        width: '205px',
        height: '30px',
        textAlign: 'center',
        fontSize: '10px',
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
      <div>
        {coordinates.lng}, {coordinates.lat}
      </div>
    </Box>
  );
}
