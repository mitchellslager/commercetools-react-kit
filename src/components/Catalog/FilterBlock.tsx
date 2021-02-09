import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  makeStyles,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'

const useStyles = makeStyles(
  {
    root: {
      '& .MuiAccordionSummary-root': {
        paddingLeft: 0,
        paddingRight: 0,
      },
      '& .MuiAccordionDetails-root': {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
  { name: 'MuiFacetItem' }
)

const FilterBlock: React.FunctionComponent<AccordionProps & { title: string }> = ({
  title,
  defaultExpanded = false,
  children,
}) => {
  const classes = useStyles()

  return (
    <Accordion defaultExpanded={defaultExpanded} square elevation={0} className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`facet-${title}-content`}
        id={`facet-${title}-header`}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}

export default FilterBlock
