// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

import {
  CustomerReviewFragment,
  CustomerReviewFragmentDoc,
} from '../CustomerReview/CustomerReview.gql'

export const AccountReviewsFragmentDoc: DocumentNode<AccountReviewsFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AccountReviews' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductReviews' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'CustomerReview' } },
              ],
            },
          },
        ],
      },
    },
    ...CustomerReviewFragmentDoc.definitions,
  ],
}
export type AccountReviewsFragment = { items: Array<Types.Maybe<CustomerReviewFragment>> }