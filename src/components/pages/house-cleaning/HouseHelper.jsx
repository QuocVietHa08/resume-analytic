import React from 'react';
import CleaningHelper from '@/components/pages/part-time/CleaningHelper';

const HELPER_DATA = [
  {
    id: 1,
    title: 'Living Room / Dining Room',
    imgSrc: '/img/house-cleaning/living-room.svg',
    content: `Clean, dust, vacuum, mopping
• Floor surface
• Stand/ceiling fan
• Window interior, frame, and sill
• table, cabinets, shelves, aircon, etc
• Clean garbage and dispose`,
  },
  {
    id: 2,
    title: 'Bedrooms',
    imgSrc: '/img/house-cleaning/bed-room.svg',
    content: `Clean, wipe, vacuum, mop
• All accessible surfaces
• Window interior, frame, and sill
• Tidy table and racks
• Dispose garbage and replace bag
• Bedmaking`,
  },
  {
    id: 3,
    title: 'Bathroom',
    imgSrc: '/img/house-cleaning/bath-room.svg',
    content: `Clean, wash, and sanitize
• Bathtub, toilet bowl/sink
• Floor surface and stains
• Glass fixtures
• Dispose and replace bag`,
  },
  {
    id: 4,
    title: 'Kitchen',
    imgSrc: '/img/house-cleaning/kitchen.svg',
    content: `Clean, Sanitize, Wipe
• All accessible surfaces
• All exterior of the kitchen
• oven, stove, fridge, etc.
• Floor surface and wall
• Dispose and replace bag`,
  },
  {
    id: 5,
    title: 'Additional Tasks',
    imgSrc: '/img/house-cleaning/additional.svg',
    content: `• Cleaning gate
• Cleaning door & door frame
• Cleaning furniture exterior
• Clean balcony
• Decluttering`,
  },
  {
    id: 6,
    title: 'Service Does Not Include',
    imgSrc: '/img/house-cleaning/not-include.svg',
    content: `• Handy home service
• Furniture & upholstery service
• Moving furniture or heavy items
• Heavy furniture disposing`,
  },
];

const HouseHelper = () => {
  return <CleaningHelper data={HELPER_DATA} />;
};

export default HouseHelper;
