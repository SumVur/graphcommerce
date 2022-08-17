import { equal } from '@wry/equality'
import { DependencyList, useMemo, useRef } from 'react'

export function useMemoDeep<T>(factory: () => T, deps: DependencyList | undefined): T {
  const ref = useRef<DependencyList | undefined>(undefined)
  const signalRef = useRef<number>(0)

  if (!equal(deps, ref.current)) {
    ref.current = deps
    console.log('not the same', deps)
    signalRef.current += 1
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => factory(), [signalRef.current])
}
