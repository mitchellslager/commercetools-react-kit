import { Pagination } from '@material-ui/lab'
import React from 'react'
import { useDispatch } from 'react-redux'
import { updatePagination } from '~src/store/facetting'
import { useRootState } from '~src/utils/hooks'

const PaginationRow: React.FunctionComponent = () => {
  const {
    facetting: { page },
  } = useRootState()
  const dispatch = useDispatch()
  const currentPage = page.offset
  const totalPageCount = Math.ceil(page.total / page.limit)

  const handleChange = (_event: React.ChangeEvent, page: number) => {
    dispatch(updatePagination({ offset: page }))
  }

  if (totalPageCount === 1) return null

  return <Pagination count={totalPageCount} page={currentPage} onChange={handleChange} />
}

export default PaginationRow
