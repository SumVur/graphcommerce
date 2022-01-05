import { Theme } from '@mui/material'

import { makeStyles } from '@graphcommerce/next-ui'

const useProductListStyles = makeStyles({ name: 'ProductList' })((theme) => ({
  productList: {
    [theme.breakpoints.up('xl')]: {
      '& > :nth-child(7n + 3)': {
        gridColumn: 'span 2',
        gridRow: 'span 2',
        display: 'grid',
        gridAutoFlow: 'row',
        gridTemplateColumns: '100%',
        gridTemplateRows: '1fr auto',
        '& > div:first-of-type': {
          position: 'relative',
          height: '100%',
        },
      },
    },
  },
}))

export default useProductListStyles
