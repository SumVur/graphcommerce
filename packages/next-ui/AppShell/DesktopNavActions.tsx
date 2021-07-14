import { makeStyles, Theme } from '@material-ui/core'
import { m } from 'framer-motion'
import React from 'react'
import responsiveVal from '../Styles/responsiveVal'
import useDesktopNavActionsAnimation from './useDesktopNavActionsAnimation'

const useStyles = makeStyles(
  (theme: Theme) => ({
    actions: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        position: 'fixed',
        top: 14,
        right: theme.page.horizontal,
        zIndex: 100,
        '& > *': {
          pointerEvents: 'all',
        },
        alignItems: 'center',
        display: 'grid',
        gridAutoFlow: 'column',
        columnGap: responsiveVal(4, 16),
      },
    },
  }),
  { name: 'DesktopNavActions' },
)

export default function DesktopNavActions(props: { children?: React.ReactNode }) {
  const { children } = props
  const classes = useStyles()
  const { translateY } = useDesktopNavActionsAnimation()

  return (
    <m.div className={classes.actions} style={{ top: translateY }}>
      {children}
    </m.div>
  )
}
