// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const AvailableStoresDocument: DocumentNode<
  AvailableStoresQuery,
  AvailableStoresQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AvailableStores' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'availableStores' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                { kind: 'Field', name: { kind: 'Name', value: 'store_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'locale' } },
                { kind: 'Field', name: { kind: 'Name', value: 'base_currency_code' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'countries' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'two_letter_abbreviation' } },
                { kind: 'Field', name: { kind: 'Name', value: 'full_name_locale' } },
              ],
            },
          },
        ],
      },
    },
  ],
}
export type AvailableStoresQueryVariables = Types.Exact<{ [key: string]: never }>

export type AvailableStoresQuery = {
  availableStores?: Types.Maybe<
    Array<
      Types.Maybe<Pick<Types.StoreConfig, 'code' | 'store_name' | 'locale' | 'base_currency_code'>>
    >
  >
  countries?: Types.Maybe<
    Array<Types.Maybe<Pick<Types.Country, 'id' | 'two_letter_abbreviation' | 'full_name_locale'>>>
  >
}
