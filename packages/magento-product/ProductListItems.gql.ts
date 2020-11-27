// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

import {
  ProductListItemConfigurableFragment,
  ProductListItemConfigurableFragmentDoc,
} from '../magento-product-configurable/ProductListITemConfigurable.gql'
import {
  ProductListItemSimpleFragment,
  ProductListItemSimpleFragmentDoc,
} from '../magento-product-simple/ProductListItemSimple.gql'
import {
  ProductListItem_VirtualProduct_Fragment,
  ProductListItem_SimpleProduct_Fragment,
  ProductListItem_DownloadableProduct_Fragment,
  ProductListItem_BundleProduct_Fragment,
  ProductListItem_GroupedProduct_Fragment,
  ProductListItem_ConfigurableProduct_Fragment,
  ProductListItemFragmentDoc,
} from './ProductListItem.gql'

export const ProductListItemsFragmentDoc: DocumentNode<ProductListItemsFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductListItems' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Products' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductListItem' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'ProductListItemSimple' } },
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ProductListItemConfigurable' },
                },
              ],
            },
          },
        ],
      },
    },
    ...ProductListItemFragmentDoc.definitions,
    ...ProductListItemSimpleFragmentDoc.definitions,
    ...ProductListItemConfigurableFragmentDoc.definitions,
  ],
}
export type ProductListItemsFragment = {
  items?: Types.Maybe<
    Array<
      Types.Maybe<
        | ({ __typename: 'VirtualProduct' } & Pick<Types.VirtualProduct, 'id'> &
            ProductListItem_VirtualProduct_Fragment)
        | ({ __typename: 'SimpleProduct' } & Pick<Types.SimpleProduct, 'id'> &
            ProductListItem_SimpleProduct_Fragment &
            ProductListItemSimpleFragment)
        | ({ __typename: 'DownloadableProduct' } & Pick<Types.DownloadableProduct, 'id'> &
            ProductListItem_DownloadableProduct_Fragment)
        | ({ __typename: 'BundleProduct' } & Pick<Types.BundleProduct, 'id'> &
            ProductListItem_BundleProduct_Fragment)
        | ({ __typename: 'GroupedProduct' } & Pick<Types.GroupedProduct, 'id'> &
            ProductListItem_GroupedProduct_Fragment)
        | ({ __typename: 'ConfigurableProduct' } & Pick<Types.ConfigurableProduct, 'id'> &
            ProductListItem_ConfigurableProduct_Fragment &
            ProductListItemConfigurableFragment)
      >
    >
  >
}
