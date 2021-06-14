import { NextRouter } from 'next/router'
import { createContext } from 'react'

export type PageRouterContext = NextRouter & { go(delta: number): void }

export const pageRouterContext = createContext(undefined as unknown as PageRouterContext)

export function createRouterProxy(router: NextRouter): PageRouterContext {
  const { asPath, pathname, query, locale, push } = router

  function go(delta: number) {
    if (delta >= 0) {
      console.error(`Called .go(${delta}), only negative numbers are allowed. Redirecting to home`)
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      push('/')
      return
    }

    const deltaAbs = Math.abs(delta)
    for (let i = 0; i < deltaAbs; i++) {
      router.back()
    }
  }

  // We create an object with the current stale properties
  const overrideProps = { asPath, pathname, query, locale, go }

  return new Proxy<PageRouterContext>(router as PageRouterContext, {
    get: (target, prop: string, receiver) =>
      overrideProps[prop] ?? Reflect.get(target, prop, receiver),
  })
}