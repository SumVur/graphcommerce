import { Avatar, AvatarProps } from '@mui/material'

export type FlagAvatarProps = { country: string } & Omit<AvatarProps, 'src'>

export default function FlagAvatar(props: FlagAvatarProps) {
  const { country, ...avatarProps } = props

  return (
    <Avatar
      {...avatarProps}
      imgProps={{ loading: 'lazy' }}
      alt={country}
      src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/${country}.svg`}
    >
      {country.toLocaleUpperCase()}
    </Avatar>
  )
}
