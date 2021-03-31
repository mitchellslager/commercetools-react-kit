import { ProductProjection } from '@commercetools/platform-sdk'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { searchProductBySlug } from '~src/commercetools/commercetools-requests'
import { RootState } from '~src/store'
export const useRootState = () => useSelector((s: RootState) => s)

export const useProduct = (): ProductProjection => {
  const {
    catalog: { products },
  } = useRootState()
  let { slug } = useParams<{ slug: string }>()

  let product = products.find((p) => p.slug.en === slug)

  if (!product) {
    return searchProductBySlug(slug).then((res) => {
      return res.results[0]
    })
  }

  return product
}
