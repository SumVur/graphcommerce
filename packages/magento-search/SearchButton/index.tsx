import { iconSearch, responsiveVal, SvgImageSimple, UseStyles } from '@graphcommerce/next-ui'
import { makeStyles, TextField, TextFieldProps, Theme } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      marginRight: theme.spacings.xxs,
      width: responsiveVal(64, 172),
      '& fieldset': {
        border: `1px solid ${theme.palette.divider}`,
      },
      [theme.breakpoints.up('sm')]: {
        width: '100%',
      },
    },
    inputRoot: {
      ...theme.typography.body2,
    },
    label: {
      display: 'none',
    },
  }),
  { name: 'SearchButton' },
)

export type SearchButtonProps = UseStyles<typeof useStyles> & TextFieldProps

export default function SearchButton(props: SearchButtonProps) {
  const { InputProps, label = 'Search...', ...textFieldProps } = props
  const classes = useStyles(props)

  return (
    <TextField
      variant='outlined'
      size='small'
      classes={{ root: classes.root }}
      label={label}
      id='search-input'
      InputLabelProps={{ shrink: false }}
      InputProps={{
        readOnly: true,
        endAdornment: <SvgImageSimple src={iconSearch} size='medium' />,
        classes: { root: classes.inputRoot },
        ...InputProps,
      }}
      {...textFieldProps}
    />
  )
}
