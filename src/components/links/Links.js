import { Box, Grid } from '@chakra-ui/react';
import {
  IoBriefcase,
  IoLogoGithub,
  IoLogoLinkedin,
  IoNewspaper
} from 'react-icons/io5';

import LinkButton from '@/components/links/LinkButton';
import { LINK_TYPES } from '@/config/constants';

export default function Links({ projectsSectionRef }) {
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
      link: projectsSectionRef,
      type: LINK_TYPES.INTERNAL
    }
  ];

  return (
    <Box as={'nav'}>
      <Grid
        gap={8}
        justifyContent={'center'}
        spacing={8}
        templateColumns={{
          base: 'auto auto',
          md: 'auto auto auto auto'
        }}
      >
        {links.map((link) => {
          if (link.type === LINK_TYPES.INTERNAL) {
            return (
              <LinkButton
                key={link.label}
                linkInfo={link}
                projectsSectionRef={projectsSectionRef}
              />
            );
          }
          return (
            <a
              key={link.label}
              href={link.link}
              rel="noreferrer"
              target={'_blank'}
            >
              <LinkButton linkInfo={link} />
            </a>
          );
        })}
      </Grid>
    </Box>
  );
}
