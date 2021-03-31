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
    root: {},
    summary: {},
    details: {},
  },
  { name: 'MuiFilterBlock' }
)

const FilterBlock: React.FunctionComponent<AccordionProps & { title: string }> = ({
  title,
  defaultExpanded = false,
  children,
}) => {
  const classes = useStyles()

  return (
    <Accordion defaultExpanded={defaultExpanded} className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`facet-${title}-content`}
        id={`facet-${title}-header`}
        className={classes.summary}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails className={classes.details}>{children}</AccordionDetails>
    </Accordion>
  )
}

export default FilterBlock

declare module '@material-ui/core/styles/overrides' {
  interface ComponentNameToClassKey {
    MuiFilterBlock: keyof ReturnType<typeof useStyles>
  }
}
