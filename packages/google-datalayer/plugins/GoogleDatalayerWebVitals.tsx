import type { PagesProps } from '@graphcommerce/framer-next-pages'
import { IfConfig, PluginProps } from '@graphcommerce/next-config'
import { useEffect } from 'react'
import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB, Metric } from 'web-vitals/attribution'
import { event } from '../lib/event'

export const component = 'FramerNextPages'
export const exported = '@graphcommerce/framer-next-pages'
export const ifConfig: IfConfig = 'analytics.coreWebVitals'

/** When a product is added to the Cart, send a Google Analytics event.
 *
 * Based on this information: https://github.com/GoogleChrome/web-vitals?tab=readme-ov-file#send-the-results-to-google-analytics
 *
 */
function GoogleDatalayerCoreWebVitals(props: PluginProps<PagesProps>) {
  const { Prev, ...rest } = props

  useEffect(() => {
    const sendToGTM = (m: Metric, debug_target?: string | undefined) => {
      event(`cwv_${m.name.toLowerCase()}`, {
        value: m.delta,
        debug_target,
        ...Object.fromEntries(Object.entries(m).map(([key, value]) => [`metric_${key}`, value])),
      })
    }

    const opts = { reportAllChanges: true }
    onCLS((m) => sendToGTM(m, m.attribution.largestShiftTarget))
    onFCP((m) => sendToGTM(m), opts)
    onFID((m) => sendToGTM(m, m.attribution.eventTarget), opts)
    onINP((m) => sendToGTM(m, m.attribution.eventTarget), opts)
    onLCP((m) => sendToGTM(m, m.attribution.element), opts)
    onTTFB((m) => sendToGTM(m), opts)
  }, [])

  return <Prev {...rest} />
}

export const Plugin = GoogleDatalayerCoreWebVitals
