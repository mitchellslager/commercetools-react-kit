import { Product } from '@commercetools/platform-sdk'
import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { formatCurrency } from '~src/utils/formatting'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,

    '&:hover': {
      borderBottomColor: theme.palette.primary.main,
    },
  },
  image: {
    display: 'block',
    maxWidth: '100%',
    height: 250,
    objectFit: 'contain',
  },
  actions: {
    '& > .MuiButton-root': {
      marginRight: theme.spacing(1),
    },
  },
}))

const ProductItem: React.FunctionComponent<{ product: Product }> = ({ product }) => {
  const classes = useStyles()
  const key = product.key
  const productData = product.masterData.current

  return (
    <RouterLink to={`/product/${key}`} className={classes.root}>
      <img
        src={productData.masterVariant.images[0].url}
        alt="Product image"
        width="500"
        height="300"
        className={classes.image}
      />
      <Box py={4}>
        <Typography variant="h6" component="span">
          {formatCurrency(productData.masterVariant.prices[0].value.centAmount / 100)}
        </Typography>
        <Typography variant="subtitle1" component="h3">
          {/* vervangen met find */}
          {productData.masterVariant.attributes
            .filter((attr) => attr.name === 'designer')
            .map((item) => item.value.label)}
        </Typography>
        <Typography variant="body2" component="h3" color="textSecondary">
          {productData.name.en}
        </Typography>
        {/* <Typography variant="body2">
          {productData.metaDescription?.en || 'No description provided'}
        </Typography> */}
      </Box>
    </RouterLink>
  )
}

export default ProductItem
