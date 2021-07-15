import { makeStyles } from '@material-ui/core'
import { usePageContext, usePageRouter } from '@reachdigital/framer-next-pages'
import {
  Sheet,
  SheetBackdrop,
  SheetContainer,
  SheetPanel,
  SheetProps,
  SnapPoint,
  styles,
} from '@reachdigital/framer-sheet'
import { useDomEvent } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import responsiveVal from '../../Styles/responsiveVal'
import ShellBase, { PageLayoutBaseProps } from '../ShellBase'
import useSheetStyles from './useSheetStyles'

export type SheetShellBaseProps = {
  header?: React.ReactNode
  children?: React.ReactNode
} & Pick<SheetProps, 'size' | 'variant'> &
  PageLayoutBaseProps

const useStyles = makeStyles(
  () => ({
    container: {
      ...styles.container,
    },
    containertop: {
      ...styles.containertop,
    },
    containerbottom: {
      ...styles.containerbottom,
      paddingTop: responsiveVal(26, 48),
    },
    containerleft: {
      ...styles.containerleft,
      paddingRight: responsiveVal(26, 48),
    },
    containerright: {
      ...styles.containerright,
      paddingLeft: responsiveVal(26, 48),
    },
  }),
  { name: 'SheetShellBase' },
)

function SheetShellBase(props: SheetShellBaseProps) {
  const { children, variant, size, name } = props
  const sheetContainerClasses = useStyles()
  const sheetClasses = useSheetStyles(props)
  const router = useRouter()
  const pageRouter = usePageRouter()
  const { depth, closeSteps, active } = usePageContext()
  const open = depth < 0 || router.asPath === pageRouter.asPath
  const initialLocale = useRef(router.locale)

  function handleClose() {
    return initialLocale.current !== router.locale
      ? pageRouter.push('/')
      : pageRouter.go(closeSteps * -1)
  }

  function handleSnap(snapPoint: SnapPoint) {
    if (snapPoint !== 'closed') return
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleClose()
  }

  const windowRef = useRef(typeof window !== 'undefined' ? window : null)

  function handleEscapeKey(e: KeyboardEvent | Event) {
    if (active) {
      if ((e as KeyboardEvent)?.key === 'Escape') {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        handleClose()
      }
    }
  }

  useDomEvent(windowRef, 'keyup', handleEscapeKey, { passive: true })

  return (
    <ShellBase name={name}>
      <Sheet open={open} onSnap={handleSnap} variant={variant} size={size}>
        <SheetBackdrop onTap={handleClose} classes={sheetClasses} />
        <SheetContainer classes={sheetContainerClasses}>
          <SheetPanel classes={sheetClasses}>
            {/* <FocusLock returnFocus={{ preventScroll: true }} disabled={!isActive}> */}
            {children}
            {/* </FocusLock> */}
          </SheetPanel>
        </SheetContainer>
      </Sheet>
    </ShellBase>
  )
}

export default SheetShellBase
