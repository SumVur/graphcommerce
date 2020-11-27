// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

import { CustomerAddressFragment, CustomerAddressFragmentDoc } from './CustomerAddress.gql'

export const CustomerInfoFragmentDoc: DocumentNode<CustomerInfoFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CustomerInfo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Customer' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'default_billing' } },
          { kind: 'Field', name: { kind: 'Name', value: 'default_shipping' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addresses' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CustomerAddress' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'prefix' } },
          { kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
          { kind: 'Field', name: { kind: 'Name', value: 'middlename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
          { kind: 'Field', name: { kind: 'Name', value: 'suffix' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'is_subscribed' } },
          { kind: 'Field', name: { kind: 'Name', value: 'date_of_birth' } },
          { kind: 'Field', name: { kind: 'Name', value: 'taxvat' } },
        ],
      },
    },
    ...CustomerAddressFragmentDoc.definitions,
  ],
}
export type CustomerInfoFragment = Pick<
  Types.Customer,
  | 'default_billing'
  | 'default_shipping'
  | 'email'
  | 'prefix'
  | 'firstname'
  | 'middlename'
  | 'lastname'
  | 'suffix'
  | 'gender'
  | 'is_subscribed'
  | 'date_of_birth'
  | 'taxvat'
> & { addresses?: Types.Maybe<Array<Types.Maybe<CustomerAddressFragment>>> }
