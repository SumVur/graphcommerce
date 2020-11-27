// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '@reachdigital/magento-graphql'

export const ProductListPaginationFragmentDoc: DocumentNode<
  ProductListPaginationFragment,
  unknown
> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ProductListPagination' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Products' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
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
        ],
      },
    },
  ],
}
export type ProductListPaginationFragment = {
  page_info?: Types.Maybe<Pick<Types.SearchResultPageInfo, 'current_page' | 'total_pages'>>
}
