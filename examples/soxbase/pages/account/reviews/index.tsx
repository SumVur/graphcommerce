import { useQuery } from '@apollo/client'
import { Container, NoSsr } from '@material-ui/core'
import { PageOptions } from '@reachdigital/framer-next-pages'
import { ApolloCustomerErrorFullPage } from '@reachdigital/magento-customer'
import { AccountDashboardReviewsDocument, AccountReviews } from '@reachdigital/magento-review'
import { PageMeta, StoreConfigDocument } from '@reachdigital/magento-store'
import {
  FullPageMessage,
  IconHeader,
  SvgImage,
  iconStar,
  AppShellTitle,
  SheetShellHeader,
  Title,
} from '@reachdigital/next-ui'
import { GetStaticProps } from 'next'
import React from 'react'
import SheetShell, { SheetShellProps } from '../../../components/AppShell/SheetShell'
import apolloClient from '../../../lib/apolloClient'

type GetPageStaticProps = GetStaticProps<SheetShellProps>

function AccountReviewsPage() {
  const { data, loading, error } = useQuery(AccountDashboardReviewsDocument, {
    fetchPolicy: 'cache-and-network',
    ssr: false,
  })
  const customer = data?.customer

  if (loading) return <div />
  if (error)
    return (
      <ApolloCustomerErrorFullPage
        error={error}
        signInHref='/account/signin'
        signUpHref='/account/signin'
      />
    )

  return (
    <>
      <SheetShellHeader backFallbackTitle='Account' backFallbackHref='/account'>
        <Title size='small' component='span' icon={iconStar}>
          Orders
        </Title>
      </SheetShellHeader>
      <Container maxWidth='md'>
        <PageMeta
          title='Reviews'
          metaDescription='View all your reviews'
          metaRobots={['noindex']}
        />
        <NoSsr>
          {((customer?.reviews && customer?.reviews.items.length < 1) || !customer?.reviews) && (
            <FullPageMessage
              title={`You haven't placed any reviews yet`}
              description='Discover our collection and write your first review!'
              icon={<SvgImage src={iconStar} size={148} alt='star' />}
            />
          )}

          {customer?.reviews && customer?.reviews.items.length > 1 && (
            <>
              <AppShellTitle icon={iconStar}>Reviews</AppShellTitle>
              {customer?.reviews && <AccountReviews {...customer?.reviews} loading={loading} />}
            </>
          )}
        </NoSsr>
      </Container>
    </>
  )
}

const pageOptions: PageOptions<SheetShellProps> = {
  overlayGroup: 'account',
  SharedComponent: SheetShell,
}
AccountReviewsPage.pageOptions = pageOptions

export default AccountReviewsPage

export const getStaticProps: GetPageStaticProps = async ({ locale }) => {
  const client = apolloClient(locale, true)
  const conf = client.query({ query: StoreConfigDocument })

  return {
    props: {
      apolloState: await conf.then(() => client.cache.extract()),
      variant: 'bottom',
      size: 'max',
      backFallbackHref: '/account',
      backFallbackTitle: 'Account',
    },
  }
}
