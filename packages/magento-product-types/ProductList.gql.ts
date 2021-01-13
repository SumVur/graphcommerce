// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const ProductListDocument: DocumentNode<ProductListQuery, ProductListQueryVariables> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ProductList' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '23' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '1' },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductAttributeFilterInput' } },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'ProductAttributeSortInput' } },
          defaultValue: { kind: 'ObjectValue', fields: [] },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'search' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: { kind: 'StringValue', value: '', block: false },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'rootCategory' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'products' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pageSize' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'pageSize' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'currentPage' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'currentPage' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'filters' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'sort' } },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'search' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'search' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'total_count' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'page_info' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'current_page' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'total_pages' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sort_fields' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'default' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'options' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'label' } },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url_key' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'sku' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'small_image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'price_range' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'maximum_price' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'regular_price' },
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
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'discount' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'amount_off' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'percent_off' },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'final_price' },
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
                              name: { kind: 'Name', value: 'minimum_price' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'regular_price' },
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
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'discount' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'amount_off' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'percent_off' },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'final_price' },
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
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'ConfigurableProduct' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'configurable_options' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attribute_code' },
                                  },
                                  { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'values' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'store_label' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'value_index' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'swatch_data' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: '__typename' },
                                              },
                                              {
                                                kind: 'InlineFragment',
                                                typeCondition: {
                                                  kind: 'NamedType',
                                                  name: { kind: 'Name', value: 'TextSwatchData' },
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'value' },
                                                    },
                                                  ],
                                                },
                                              },
                                              {
                                                kind: 'InlineFragment',
                                                typeCondition: {
                                                  kind: 'NamedType',
                                                  name: { kind: 'Name', value: 'ColorSwatchData' },
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'value' },
                                                    },
                                                  ],
                                                },
                                              },
                                              {
                                                kind: 'InlineFragment',
                                                typeCondition: {
                                                  kind: 'NamedType',
                                                  name: { kind: 'Name', value: 'ImageSwatchData' },
                                                },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'value' },
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'thumbnail' },
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
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'variants' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attributes' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'code' } },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'value_index' },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'product' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'sku' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'small_image' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'label' },
                                              },
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'url' },
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
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'filters' },
            name: { kind: 'Name', value: 'products' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'category_id' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'rootCategory' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aggregations' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'label' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'attribute_code' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'options' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'label' } },
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
}
export type ProductListQueryVariables = Types.Exact<{
  pageSize?: Types.Maybe<Types.Scalars['Int']>
  currentPage?: Types.Maybe<Types.Scalars['Int']>
  filters?: Types.Maybe<Types.ProductAttributeFilterInput>
  sort?: Types.Maybe<Types.ProductAttributeSortInput>
  search?: Types.Maybe<Types.Scalars['String']>
  rootCategory: Types.Scalars['String']
}>

export type ProductListQuery = {
  products?: Types.Maybe<
    Pick<Types.Products, 'total_count'> & {
      page_info?: Types.Maybe<Pick<Types.SearchResultPageInfo, 'current_page' | 'total_pages'>>
      sort_fields?: Types.Maybe<
        Pick<Types.SortFields, 'default'> & {
          options?: Types.Maybe<Array<Types.Maybe<Pick<Types.SortField, 'label' | 'value'>>>>
        }
      >
      items?: Types.Maybe<
        Array<
          Types.Maybe<
            | ({ __typename: 'VirtualProduct' } & Pick<
                Types.VirtualProduct,
                'id' | 'url_key' | 'sku' | 'name'
              > & {
                  small_image?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                  price_range: {
                    maximum_price?: Types.Maybe<{
                      regular_price: Pick<Types.Money, 'currency' | 'value'>
                      discount?: Types.Maybe<
                        Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                      >
                      final_price: Pick<Types.Money, 'currency' | 'value'>
                    }>
                    minimum_price: {
                      regular_price: Pick<Types.Money, 'currency' | 'value'>
                      discount?: Types.Maybe<
                        Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                      >
                      final_price: Pick<Types.Money, 'currency' | 'value'>
                    }
                  }
                })
            | ({ __typename: 'SimpleProduct' } & Pick<
                Types.SimpleProduct,
                'id' | 'url_key' | 'sku' | 'name'
              > & {
                  small_image?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                  price_range: {
                    maximum_price?: Types.Maybe<{
                      regular_price: Pick<Types.Money, 'currency' | 'value'>
                      discount?: Types.Maybe<
                        Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                      >
                      final_price: Pick<Types.Money, 'currency' | 'value'>
                    }>
                    minimum_price: {
                      regular_price: Pick<Types.Money, 'currency' | 'value'>
                      discount?: Types.Maybe<
                        Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                      >
                      final_price: Pick<Types.Money, 'currency' | 'value'>
                    }
                  }
                })
            | ({ __typename: 'DownloadableProduct' } & Pick<
                Types.DownloadableProduct,
                'id' | 'url_key' | 'sku' | 'name'
              > & {
                  small_image?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                  price_range: {
                    maximum_price?: Types.Maybe<{
                      regular_price: Pick<Types.Money, 'currency' | 'value'>
                      discount?: Types.Maybe<
                        Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                      >
                      final_price: Pick<Types.Money, 'currency' | 'value'>
                    }>
                    minimum_price: {
                      regular_price: Pick<Types.Money, 'currency' | 'value'>
                      discount?: Types.Maybe<
                        Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                      >
                      final_price: Pick<Types.Money, 'currency' | 'value'>
                    }
                  }
                })
            | ({ __typename: 'BundleProduct' } & Pick<
                Types.BundleProduct,
                'id' | 'url_key' | 'sku' | 'name'
              > & {
                  small_image?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                  price_range: {
                    maximum_price?: Types.Maybe<{
                      regular_price: Pick<Types.Money, 'currency' | 'value'>
                      discount?: Types.Maybe<
                        Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                      >
                      final_price: Pick<Types.Money, 'currency' | 'value'>
                    }>
                    minimum_price: {
                      regular_price: Pick<Types.Money, 'currency' | 'value'>
                      discount?: Types.Maybe<
                        Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                      >
                      final_price: Pick<Types.Money, 'currency' | 'value'>
                    }
                  }
                })
            | ({ __typename: 'GroupedProduct' } & Pick<
                Types.GroupedProduct,
                'id' | 'url_key' | 'sku' | 'name'
              > & {
                  small_image?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                  price_range: {
                    maximum_price?: Types.Maybe<{
                      regular_price: Pick<Types.Money, 'currency' | 'value'>
                      discount?: Types.Maybe<
                        Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                      >
                      final_price: Pick<Types.Money, 'currency' | 'value'>
                    }>
                    minimum_price: {
                      regular_price: Pick<Types.Money, 'currency' | 'value'>
                      discount?: Types.Maybe<
                        Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                      >
                      final_price: Pick<Types.Money, 'currency' | 'value'>
                    }
                  }
                })
            | ({ __typename: 'ConfigurableProduct' } & Pick<
                Types.ConfigurableProduct,
                'id' | 'url_key' | 'sku' | 'name'
              > & {
                  configurable_options?: Types.Maybe<
                    Array<
                      Types.Maybe<
                        Pick<
                          Types.ConfigurableProductOptions,
                          'attribute_code' | 'id' | 'label'
                        > & {
                          values?: Types.Maybe<
                            Array<
                              Types.Maybe<
                                Pick<
                                  Types.ConfigurableProductOptionsValues,
                                  'store_label' | 'value_index'
                                > & {
                                  swatch_data?: Types.Maybe<
                                    | ({ __typename: 'ImageSwatchData' } & Pick<
                                        Types.ImageSwatchData,
                                        'value' | 'thumbnail'
                                      >)
                                    | ({ __typename: 'TextSwatchData' } & Pick<
                                        Types.TextSwatchData,
                                        'value'
                                      >)
                                    | ({ __typename: 'ColorSwatchData' } & Pick<
                                        Types.ColorSwatchData,
                                        'value'
                                      >)
                                  >
                                }
                              >
                            >
                          >
                        }
                      >
                    >
                  >
                  variants?: Types.Maybe<
                    Array<
                      Types.Maybe<{
                        attributes?: Types.Maybe<
                          Array<
                            Types.Maybe<
                              Pick<Types.ConfigurableAttributeOption, 'code' | 'value_index'>
                            >
                          >
                        >
                        product?: Types.Maybe<
                          Pick<Types.SimpleProduct, 'sku' | 'name'> & {
                            small_image?: Types.Maybe<Pick<Types.ProductImage, 'label' | 'url'>>
                          }
                        >
                      }>
                    >
                  >
                  small_image?: Types.Maybe<Pick<Types.ProductImage, 'url' | 'label'>>
                  price_range: {
                    maximum_price?: Types.Maybe<{
                      regular_price: Pick<Types.Money, 'currency' | 'value'>
                      discount?: Types.Maybe<
                        Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                      >
                      final_price: Pick<Types.Money, 'currency' | 'value'>
                    }>
                    minimum_price: {
                      regular_price: Pick<Types.Money, 'currency' | 'value'>
                      discount?: Types.Maybe<
                        Pick<Types.ProductDiscount, 'amount_off' | 'percent_off'>
                      >
                      final_price: Pick<Types.Money, 'currency' | 'value'>
                    }
                  }
                })
          >
        >
      >
    }
  >
  filters?: Types.Maybe<{
    aggregations?: Types.Maybe<
      Array<
        Types.Maybe<
          Pick<Types.Aggregation, 'label' | 'count' | 'attribute_code'> & {
            options?: Types.Maybe<
              Array<Types.Maybe<Pick<Types.AggregationOption, 'label' | 'value'>>>
            >
          }
        >
      >
    >
  }>
}
