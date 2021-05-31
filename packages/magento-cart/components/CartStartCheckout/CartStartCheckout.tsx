import { makeStyles, Theme } from '@material-ui/core'
import { Money, MoneyFragment } from '@reachdigital/magento-store'
import Button from '@reachdigital/next-ui/Button'
import responsiveVal from '@reachdigital/next-ui/Styles/responsiveVal'
import SvgImage from '@reachdigital/next-ui/SvgImage'
import { iconChevronRight } from '@reachdigital/next-ui/icons'
import PageLink from 'next/link'
import React, { PropsWithChildren } from 'react'
import { CartStartCheckoutFragment } from './CartStartCheckout.gql'

const useStyles = makeStyles(
  (theme: Theme) => ({
    checkoutButtonContainer: {
      textAlign: 'center',
    },
    checkoutButton: {
      borderRadius: responsiveVal(40, 50),
      fontSize: 17,
      fontFamily: theme.typography.fontFamily,
      fontWeight: 500,
      marginBottom: theme.spacings.lg,
      marginTop: theme.spacings.lg,
      width: '100%',
      maxHeight: 60,
      maxWidth: 440,
      padding: `${theme.spacings.xs} ${theme.spacings.sm}`,
    },
    checkoutButtonIcon: {
      marginLeft: 0,
    },
    checkoutButtonLabel: {
      fontWeight: theme.typography.fontWeightBold,
      paddingRight: theme.spacings.xxs,
      '& ~ span.MuiButton-endIcon': {
        marginLeft: 6,
      },
    },
  }),
  { name: 'Cart' },
)

export type CartStartCheckoutProps = PropsWithChildren<CartStartCheckoutFragment>

export default function CartStartCheckout(props: CartStartCheckoutProps) {
  const { prices, children } = props

  const hasTotals = (prices?.grand_total?.value ?? 0) > 0
  const classes = useStyles()
  return (
    <div className={classes.checkoutButtonContainer}>
      <PageLink href='/checkout' passHref>
        <Button
          variant='pill'
          color='secondary'
          className={classes.checkoutButton}
          endIcon={<SvgImage src={iconChevronRight} shade='inverted' alt='checkout' />}
          disabled={!hasTotals}
        >
          <span className={classes.checkoutButtonLabel}>Start Checkout</span>{' '}
          {hasTotals && <Money {...prices?.grand_total} />}
        </Button>
      </PageLink>
      {children}
    </div>
  )
}