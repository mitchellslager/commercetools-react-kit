import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'
import { formatCurrency } from '~src/utils/formatting'
import { useProduct } from '~src/utils/hooks'
import BackButton from '../BackButton'
import NavigationMenu from '../NavigationMenu'

const useStyles = makeStyles({
  image: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
})

const ProductDetailPage: React.FunctionComponent = () => {
  const classes = useStyles()
  const product = useProduct()

  return (
    <>
      <NavigationMenu />
      <Box my={2}>
        <Container maxWidth="lg">
          <Box mb={2}>
            <BackButton>Back to overview</BackButton>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <img
                src={product.masterVariant.images[0].url}
                alt="Product image"
                width="500"
                height="300"
                className={classes.image}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box mb={2}>
                <Typography color="primary">
                  {product.masterVariant.attributes
                    .filter((attr) => attr.name === 'designer')
                    .map((item) => item.value.label)}
                </Typography>
                <Typography variant="h5" component="h2">
                  {product.name.en}
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography variant="body1" className={classes.price}>
                  {formatCurrency(product.masterVariant.prices[0].value.centAmount / 100)}
                </Typography>
              </Box>
              <Box mb={2}>
                <Button variant="contained" color="primary" size="large">
                  Add to cart
                </Button>
              </Box>
              <Accordion square elevation={0} defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="section-about-content"
                  id="section-about-header"
                >
                  About this product
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {product.metaDescription?.en || 'No description provided'}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default ProductDetailPage
