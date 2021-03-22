// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const AccountDashboardReviewsDocument: DocumentNode<
  AccountDashboardReviewsQuery,
  AccountDashboardReviewsQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AccountDashboardReviews' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'reviews' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'average_rating' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'created_at' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'product' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'url_key' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'thumbnail' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'nickname' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'summary' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'ratings_breakdown' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
}
export type AccountDashboardReviewsQueryVariables = Types.Exact<{ [key: string]: never }>

export type AccountDashboardReviewsQuery = {
  customer?: Types.Maybe<{
    reviews: {
      items: Array<
        Types.Maybe<
          Pick<
            Types.ProductReview,
            'average_rating' | 'created_at' | 'nickname' | 'summary' | 'text'
          > & {
            product:
              | (Pick<Types.VirtualProduct, 'uid' | 'url_key' | 'name'> & {
                  thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                })
              | (Pick<Types.SimpleProduct, 'uid' | 'url_key' | 'name'> & {
                  thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                })
              | (Pick<Types.DownloadableProduct, 'uid' | 'url_key' | 'name'> & {
                  thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                })
              | (Pick<Types.BundleProduct, 'uid' | 'url_key' | 'name'> & {
                  thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                })
              | (Pick<Types.GroupedProduct, 'uid' | 'url_key' | 'name'> & {
                  thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                })
              | (Pick<Types.ConfigurableProduct, 'uid' | 'url_key' | 'name'> & {
                  thumbnail?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                })
            ratings_breakdown: Array<Types.Maybe<Pick<Types.ProductReviewRating, 'name' | 'value'>>>
          }
        >
      >
    }
  }>
}
