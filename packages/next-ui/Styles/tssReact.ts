import { useTheme } from '@mui/material/styles'
import { createMakeStyles, createWithStyles, useMergedClasses } from 'tss-react'

const { makeStyles, useStyles } = createMakeStyles({ useTheme })
const { withStyles } = createWithStyles({ useTheme })

export { makeStyles, useStyles, withStyles, useMergedClasses }
