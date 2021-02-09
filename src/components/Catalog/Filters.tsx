import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import FilterBlock from './FilterBlock'
import CheckboxInput from '~src/components/common/CheckboxInput'
import { setFilterOption, removeFilterOption } from '~src/store/facetting'
import { IFilterState } from '~src/store/facetting/types'
import { filterOptions, ILabeledValue } from '~src/utils/filter'
import { useRootState } from '~src/utils/hooks'

const Filters: React.FunctionComponent = () => {
  const {
    catalog: { products, categories },
  } = useRootState()

  const options = filterOptions(products, categories)

  return (
    <div>
      <FilterBlock title="Category" defaultExpanded>
        <CheckboxListFilter name="categories" options={options.categories} />
      </FilterBlock>

      <FilterBlock title="Designer" defaultExpanded>
        <CheckboxListFilter name="designer" options={options.designer} />
      </FilterBlock>

      <FilterBlock title="Color" defaultExpanded>
        <CheckboxListFilter name="colors" options={options.colors} />
      </FilterBlock>
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
})

const CheckboxListFilter: React.FunctionComponent<{
  name: keyof IFilterState
  options: ILabeledValue<string>[]
}> = ({ options, name }) => {
  const classes = checkboxFilterStyles()
  const dispatch = useDispatch()
  const {
    facetting: { filter },
  } = useRootState()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // If the checkbox is already active, remove the item from store
    filter[name].includes(e.target.value)
      ? dispatch(removeFilterOption({ label: name, value: e.target.value }))
      : dispatch(setFilterOption({ label: name, value: e.target.value }))
  }

  return (
    <ul className={classes.root}>
      {options.map((o) => (
        <li key={o.value}>
          <CheckboxInput
            checked={filter[name].includes(o.value)}
            label={o.label}
            value={o.value}
            onChange={handleChange}
          />
        </li>
      ))}
    </ul>
  )
}
