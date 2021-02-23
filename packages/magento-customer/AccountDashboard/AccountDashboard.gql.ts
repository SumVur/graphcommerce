// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const AccountDashboardDocument: DocumentNode<
  AccountDashboardQuery,
  AccountDashboardQueryVariables
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'AccountDashboard' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'customer' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'firstname' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastname' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'reviews' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'page_info' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'total_pages' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'orders' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'page_info' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'total_pages' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'number' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'shipments' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'tracking' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'carrier' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'number' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'total' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'grand_total' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'currency' },
                                        },
                                        { kind: 'Field', name: { kind: 'Name', value: 'value' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'product_name' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'product_sku' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'product_url_key' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'quantity_ordered' },
                                  },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'order_date' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'is_subscribed' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
              ],
            },
          },
        ],
      },
    },
  ],
}
export type AccountDashboardQueryVariables = Types.Exact<{ [key: string]: never }>

export type AccountDashboardQuery = {
  customer?: Types.Maybe<
    Pick<Types.Customer, 'firstname' | 'lastname' | 'is_subscribed' | 'email'> & {
      reviews: { page_info: Pick<Types.SearchResultPageInfo, 'total_pages'> }
      orders?: Types.Maybe<{
        page_info?: Types.Maybe<Pick<Types.SearchResultPageInfo, 'total_pages'>>
        items: Array<
          Types.Maybe<
            Pick<Types.CustomerOrder, 'status' | 'number' | 'order_date'> & {
              shipments?: Types.Maybe<
                Array<
                  Types.Maybe<{
                    tracking?: Types.Maybe<
                      Array<
                        Types.Maybe<Pick<Types.ShipmentTracking, 'carrier' | 'number' | 'title'>>
                      >
                    >
                  }>
                >
              >
              total?: Types.Maybe<{ grand_total: Pick<Types.Money, 'currency' | 'value'> }>
              items?: Types.Maybe<
                Array<
                  Types.Maybe<
                    | Pick<
                        Types.DownloadableOrderItem,
                        'product_name' | 'product_sku' | 'product_url_key' | 'quantity_ordered'
                      >
                    | Pick<
                        Types.BundleOrderItem,
                        'product_name' | 'product_sku' | 'product_url_key' | 'quantity_ordered'
                      >
                    | Pick<
                        Types.OrderItem,
                        'product_name' | 'product_sku' | 'product_url_key' | 'quantity_ordered'
                      >
                  >
                >
              >
            }
          >
        >
      }>
    }
  >
}
