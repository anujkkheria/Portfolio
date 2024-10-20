import React from 'react'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'

import { ArrowDropDown } from '@mui/icons-material'

const ProjectAccordion = ({ header, detail }) => {
  return (
    <Accordion>
      <AccordionSummary
        sx={{
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'relative',
          zIndex: 2,
          '&.Mui-expanded': {
            marginBottom: '-1px',
          },
        }}
        expandIcon={<ArrowDropDown />}
      >
        <Typography>{header}</Typography>
      </AccordionSummary>
      <AccordionDetails>{detail}</AccordionDetails>
    </Accordion>
  )
}

export default ProjectAccordion
