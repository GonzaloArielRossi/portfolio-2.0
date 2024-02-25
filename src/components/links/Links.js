import { Box, Grid } from '@chakra-ui/react';
import {
  IoBriefcase,
  IoLogoGithub,
  IoLogoLinkedin,
  IoNewspaper
} from 'react-icons/io5';

import { LINK_TYPES } from '@/config/constants';

import LinkButton from './LinkButton';

export default function Links() {
  const links = [
    {
      icon: IoLogoLinkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/gonzaloarossi/',
      type: LINK_TYPES.EXTERNAL
    },
    {
      icon: IoLogoGithub,
      label: 'GitHub',
      link: 'https://github.com/GonzaloArielRossi',
      type: LINK_TYPES.EXTERNAL
    },
    {
      icon: IoNewspaper,
      label: 'CV',
      link: 'https://drive.google.com/drive/folders/1MXFZg05g-UEF0YpCZdSTaoYyD4DwyigN',
      type: LINK_TYPES.EXTERNAL
    },
    {
      icon: IoBriefcase,
      label: 'Projects',
      link: '#projects',
      type: LINK_TYPES.INTERNAL
    }
  ];

  return (
    <Box>
      <Grid
        gap={8}
        justifyContent={'center'}
        spacing={8}
        templateColumns={{
          base: 'auto auto',
          md: 'auto auto auto auto'
        }}
      >
        {links.map((link) => (
          <LinkButton key={link.label} linkInfo={link} />
        ))}
      </Grid>
    </Box>
  );
}
