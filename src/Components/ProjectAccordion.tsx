import React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Chip,
  Link,
  IconButton,
} from '@mui/material'
import { motion } from 'framer-motion'
import { styled } from '@mui/material/styles'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'

// Styled components
const StyledAccordion = styled(Accordion)(() => ({
  backgroundColor: '#ffffff',
  height: '50%',
  borderRadius: '12px !important',
  marginBottom: '16px',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  '&:before': {
    display: 'none',
  },
}))

const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  borderRadius: '12px',
  '&.Mui-expanded': {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
}))

interface ProjectProps {
  title: string
  description: string
  technologies: string[]
  githubLink?: string
  liveLink?: string
}

const ProjectAccordion: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  githubLink,
  liveLink,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledAccordion>
        <StyledAccordionSummary
          expandIcon={
            <ArrowDropDownIcon
              sx={{
                fontSize: '2rem',
                color: 'primary.main',
              }}
            />
          }
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              height: '50%',
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                flexGrow: 1,
              }}
            >
              {title}
            </Typography>
          </Box>
        </StyledAccordionSummary>

        <AccordionDetails sx={{ p: 3, bgcolor: 'grey.50' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Description */}
            <Typography variant='body1' sx={{ color: 'text.secondary', mb: 2 }}>
              {description}
            </Typography>

            {/* Technologies */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size='small'
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                  }}
                />
              ))}
            </Box>

            {/* Links */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              {githubLink && (
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    href={githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    sx={{ textDecoration: 'none' }}
                  >
                    <IconButton
                      size='small'
                      sx={{
                        bgcolor: 'grey.200',
                        '&:hover': { bgcolor: 'grey.300' },
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Link>
                </motion.div>
              )}
              {liveLink && (
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    href={liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    sx={{ textDecoration: 'none' }}
                  >
                    <IconButton
                      size='small'
                      sx={{
                        bgcolor: 'grey.200',
                        '&:hover': { bgcolor: 'grey.300' },
                      }}
                    >
                      <LaunchIcon />
                    </IconButton>
                  </Link>
                </motion.div>
              )}
            </Box>
          </Box>
        </AccordionDetails>
      </StyledAccordion>
    </motion.div>
  )
}

// Example usage in Projects component

export default ProjectAccordion
