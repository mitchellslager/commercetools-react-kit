import { Button, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import CheckboxInput from '~src/components/common/CheckboxInput'
import { removeFilterOption, resetFilterOptions, setFilterOption } from '~src/store/facetting'
import { IFilterState } from '~src/store/facetting/types'
import { useRootState } from '~src/utils/hooks'
import { byChecked } from '~src/utils/sort'
import FilterBlock from './FilterBlock'

// Re-usable component maken:
// - Categories/facets as prop
// - Eventhandlers met een callback
//   - onReset
//   - onChange
// - Types uitschrijven

type FilterBlockOption = {
  label: string
  value: string
  count?: number
}

export type FilterBlockConfig = {
  title: string
  name: string
  options: FilterBlockOption[]
  visibleAmount?: number
  defaultExpanded?: boolean
}

const Filters = ({ filterBlockConfigs }: { filterBlockConfigs: FilterBlockConfig[] }) => {
  const dispatch = useDispatch()

  const handleResetButtonClick = () => {
    dispatch(resetFilterOptions())
  }

  return (
    <div>
      <Button variant="text" onClick={handleResetButtonClick}>
        Reset filters
      </Button>

      {filterBlockConfigs.map((item) => (
        <FilterBlock key={item.name} title={item.title} defaultExpanded={item.defaultExpanded}>
          <CheckboxListFilter name={item.name} options={item.options} />
        </FilterBlock>
      ))}
    </div>
  )
}

export default Filters

const checkboxFilterStyles = makeStyles({
  root: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    width: '100%',
    maxHeight: 200,
    overflowY: 'scroll',
  },
  button: {
    marginTop: 10,
  },
})

// Generiek maken met onChange handler
const CheckboxListFilter: React.FunctionComponent<{
  name: keyof IFilterState
  options: {
    label: string
    value: string
    count?: number
  }[]
  visibleAmount?: number
  sort?: (a: { label: string }, b: { label: string }) => number
}> = ({ options, name, visibleAmount = 3, sort }) => {
  const classes = checkboxFilterStyles()
  const dispatch = useDispatch()
  const {
    facetting: { filter },
  } = useRootState()
  const [isExpanded, setIsExpanded] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filter[name].includes(e.target.value)
      ? dispatch(removeFilterOption({ label: name, value: e.target.value }))
      : dispatch(setFilterOption({ label: name, value: e.target.value }))
  }

  const hasHiddenItems = options.length > visibleAmount

  const filteredOptions = options
    .sort(sort ?? byChecked(filter[name]))
    .slice(0, !isExpanded ? visibleAmount : options.length)

  return (
    <>
      <ul className={classes.root}>
        {filteredOptions.map((o) => (
          <li key={o.value}>
            <CheckboxInput
              checked={filter[name].includes(o.value)}
              label={o.label}
              value={o.value}
              count={o.count}
              onChange={handleChange}
            />
          </li>
        ))}
      </ul>
      {hasHiddenItems && (
        <Button
          type="button"
          variant="text"
          className={classes.button}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {!isExpanded ? 'Show more' : 'Show less'}
        </Button>
      )}
    </>
  )
}
