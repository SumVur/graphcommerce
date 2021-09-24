import { useQuery } from '@apollo/client'
import { makeStyles, Theme } from '@material-ui/core'
import { useCartQuery } from '@reachdigital/magento-cart'
import { CustomerTokenDocument } from '@reachdigital/magento-customer'
import { UseStyles } from '@reachdigital/next-ui'
import React from 'react'
import CustomerNewsletterToggle from '../CustomerNewsletterToggle'
import GuestNewsletterToggle from '../GuestNewsletterToggle'
import { GetCartEmailDocument } from './GetCartEmail.gql'

const useStyles = makeStyles(
  (theme: Theme) => ({
    signup: {
      background: theme.palette.background.highlight,
      display: 'grid',
      alignItems: 'center',
      gridAutoFlow: 'column',
      columnGap: theme.spacings.xxs,
      padding: theme.spacings.sm,
      ...theme.typography.body1,
      marginTop: theme.spacings.sm,
      borderRadius: 4,
      gridTemplateColumns: '1fr 1fr',
      gridTemplateAreas: `
        "a a a"
        "b c c"
      `,
      [theme.breakpoints.up('sm')]: {
        gridTemplateAreas: `"a b c"`,
        gridTemplateColumns: '4fr 1fr',
      },
    },
    signupForm: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  }),
  {
    name: 'SignupNewsletter',
  },
)

type SignupNewsletterProps = {
  //
} & UseStyles<typeof useStyles>

export default function SignupNewsletter(props: SignupNewsletterProps) {
  const classes = useStyles(props)
  const { data: cartData } = useCartQuery(GetCartEmailDocument, { allowUrl: true })
  const { data: customerTokenData } = useQuery(CustomerTokenDocument)
  const isCustomer = Boolean(customerTokenData?.customerToken)

  return (
    <div className={classes.signup}>
      <b>Sign up for our newsletter and stay updated</b>
      <div className={classes.signupForm}>
        {isCustomer ? (
          <CustomerNewsletterToggle color='primary' />
        ) : (
          <GuestNewsletterToggle color='primary' />
        )}
        {cartData?.cart?.email}
      </div>
    </div>
  )
}
