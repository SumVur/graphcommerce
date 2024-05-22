import { Trans } from '@lingui/react'
import {
  Box,
  Breadcrumbs as BreadcrumbsBase,
  ClickAwayListener,
  IconButton,
  Link,
  Typography,
  useEventCallback,
  useTheme,
} from '@mui/material'
import dynamic from 'next/dynamic'
import { useState, MouseEvent } from 'react'
import { IconSvg } from '../IconSvg'
import { iconClose, iconEllypsis } from '../icons'
import { BreadcrumbsJsonLd } from './BreadcrumbsJsonLd'
import { jsonLdBreadcrumb } from './jsonLdBreadcrumb'
import type { BreadcrumbsType } from './types'
import { useRouter } from 'next/router'

const BreadcrumbsPopper = dynamic(
  async () => (await import('./BreadcrumbsPopper')).BreadcrumbsPopper,
)

export type BreadcrumbsProps = BreadcrumbsType & {
  maxItems?: number
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  const {
    breadcrumbs,
    name,
    baseUrl,
    sx,
    breadcrumbsAmountDesktop = 3,
    breadcrumbsAmountMobile = 2,
    maxItems,
  } = props
  const [anchorElement, setAnchorElement] = useState<HTMLButtonElement | null>(null)
  const theme = useTheme()

  const isDefaultMobile = breadcrumbsAmountMobile === 0
  const showButtonMobile = breadcrumbs.length > breadcrumbsAmountMobile && !isDefaultMobile
  const isDefaultDesktop = breadcrumbsAmountDesktop === 0
  const showButtonDesktop = breadcrumbs.length > breadcrumbsAmountDesktop && !isDefaultDesktop

  const handleClick = useEventCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElement((el) => (el !== event.currentTarget ? event.currentTarget : null))
  })

  const handleClose = () => setAnchorElement(null)

  const router = useRouter()

  return (
    <>
      {breadcrumbs.length && (
        <BreadcrumbsJsonLd
          baseUrl={baseUrl}
          breadcrumbs={breadcrumbs}
          render={(bc, url) => ({
            '@context': 'https://schema.org',
            ...jsonLdBreadcrumb(bc, url),
          })}
        />
      )}
      <BreadcrumbsBase
        aria-label='breadcrumb'
        maxItems={maxItems}
        sx={[
          !maxItems && {
            '& .MuiBreadcrumbs-ol': {
              flexWrap: 'nowrap',
              '& .MuiBreadcrumbs-li': {
                '&:nth-of-type(1)': {
                  display: {
                    xs: showButtonMobile ? 'flex' : 'none',
                    md: showButtonDesktop ? 'flex' : 'none',
                  },
                },
                '&:nth-last-of-type(1)': {
                  display: 'inline-flex',
                  overflowX: 'hidden',
                },
              },
            },
            '& .MuiBreadcrumbs-separator': {
              '&:nth-of-type(2)': {
                display: {
                  xs: !showButtonMobile && 'none',
                  md: !showButtonDesktop && 'none',
                },
              },
            },

            [theme.breakpoints.down('md')]: showButtonMobile && {
              '& .MuiBreadcrumbs-li, & .MuiBreadcrumbs-separator': {
                display: 'none',
                [`&:nth-last-of-type(-n+${breadcrumbsAmountMobile * 2})`]: {
                  display: 'flex',
                },
              },
            },

            [theme.breakpoints.up('md')]: showButtonDesktop && {
              '& .MuiBreadcrumbs-li, & .MuiBreadcrumbs-separator': {
                display: 'none',
                [`&:nth-last-of-type(-n+${breadcrumbsAmountDesktop * 2})`]: {
                  display: 'flex',
                },
              },
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        {!maxItems && (
          <ClickAwayListener
            mouseEvent='onMouseDown'
            touchEvent='onTouchStart'
            onClickAway={handleClose}
          >
            <Box sx={{ position: 'relative', display: 'flex' }}>
              <IconButton
                aria-describedby={anchorElement ? 'breadcrumb-list' : undefined}
                color='default'
                onClick={handleClick}
                sx={{
                  borderRadius: 2,
                  boxShadow: 6,
                  color: 'text.primary',
                  px: 1,
                  py: { xs: 0.3, md: 0.5 },
                  typography: 'caption',
                  backgroundColor: 'background.paper',
                }}
              >
                <IconSvg src={anchorElement ? iconClose : iconEllypsis} />
              </IconButton>
              <BreadcrumbsPopper
                breadcrumbs={breadcrumbs}
                anchorElement={anchorElement}
                onClose={handleClose}
                showDesktopAmount={breadcrumbsAmountDesktop}
                showMobileAmount={breadcrumbsAmountMobile}
              />
            </Box>
          </ClickAwayListener>
        )}
        <Link href='/' underline='hover' color='text.primary' variant='body1'>
          <Trans id='Home' />
        </Link>
        {breadcrumbs.slice(0, breadcrumbs.length - 1).map((breadcrumb) => (
          <Link {...breadcrumb} underline='hover' color='text.primary' variant='body1' />
        ))}
        {!router.asPath.includes('/p') && (
          <Typography component='span' color='text.primary' variant='body1' fontWeight='600' noWrap>
            {name}
          </Typography>
        )}
      </BreadcrumbsBase>
    </>
  )
}
