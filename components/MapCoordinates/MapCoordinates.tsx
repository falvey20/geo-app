import { Box } from '@mantine/core';

interface MapCoordinatesProps {
  coordinates: { lng: string; lat: string };
}

export function MapCoordinates({ coordinates }: MapCoordinatesProps) {
  return (
    <Box
      style={{
        position: 'absolute', // Positioning relative to viewport
        top: '5px', // Distance from the top of the viewport
        right: '5px', // Distance from the right edge of the viewport
        backgroundColor: 'var(--mantine-color-gray-9)',
        color: 'white',
        padding: '10px 20px', // Padding inside the box
        borderRadius: '3px', // Slightly rounded corners
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', // Optional shadow for effect
        zIndex: 1000, // Ensure it's above other elements like the map
        opacity: '0.8',
        width: '210px', // Set a fixed width for the box
        textAlign: 'center', // Center the text inside the box
        fontWeight: 'bold',
        fontSize: '10px', // Set the font size to be smaller
      }}
    >
      <div>
        {coordinates.lng}, {coordinates.lat}
      </div>
    </Box>
  );
}
