import { Overrides } from '@material-ui/core/styles/overrides'

export const MuiAccordion: Overrides['MuiAccordion'] = {
  root: {},
}

export const MuiAccordionSummary: Overrides['MuiAccordionSummary'] = {
  root: {
    '&$expanded': {
      minHeight: 48,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
}

export const MuiFilterBlock: Overrides['MuiFilterBlock'] = {
  summary: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  details: {
    flexDirection: 'column',
    paddingLeft: 0,
    paddingRight: 0,
  },
}
