// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '../../generated/types'

export const RowColumnTwoFragmentDoc: DocumentNode<RowColumnTwoFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'RowColumnTwo' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'RowColumnTwo' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colOne' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'raw' } }],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'colTwo' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'Field', name: { kind: 'Name', value: 'raw' } }],
            },
          },
        ],
      },
    },
  ],
}
export type RowColumnTwoFragment = {
  colOne: Pick<Types.RichText, 'raw'>
  colTwo: Pick<Types.RichText, 'raw'>
}
