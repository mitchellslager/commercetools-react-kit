import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '~src/store'
export const useRootState = () => useSelector((s: RootState) => s)

export const useProduct = () => {
  const {
    catalog: { products },
  } = useRootState()
  let { key } = useParams<{ key: string }>()

  return products.find((p) => p.key === key)
}
