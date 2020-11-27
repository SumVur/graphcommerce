// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const SelectedShippingMethodFragmentDoc: DocumentNode<
  SelectedShippingMethodFragment,
  unknown
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'SelectedShippingMethod' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'SelectedShippingMethod' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'method_title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'method_code' } },
          { kind: 'Field', name: { kind: 'Name', value: 'carrier_title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'carrier_code' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'amount' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'currency' } },
                { kind: 'Field', name: { kind: 'Name', value: 'value' } },
              ],
            },
          },
        ],
      },
    },
  ],
}
export type SelectedShippingMethodFragment = Pick<
  Types.SelectedShippingMethod,
  'method_title' | 'method_code' | 'carrier_title' | 'carrier_code'
> & { amount: Pick<Types.Money, 'currency' | 'value'> }
