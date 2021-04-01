import '../demo.css'
import { PageComponent, StackedPages } from '@reachdigital/stacked-pages'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import type { Router } from 'next/router'

export default function MyApp(props: AppPropsType<Router> & { Component: PageComponent }) {
  return <StackedPages {...props} />
}
