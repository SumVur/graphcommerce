// Do not edit this file: autogenerated by graphql-code-generator
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import * as Types from '../../generated/types'

import { AssetFragment, AssetFragmentDoc } from '../Asset/Asset.gql'
import { RowBlogContentFragment, RowBlogContentFragmentDoc } from '../Blog/RowBlogContent.gql'
import {
  RowButtonLinkListFragment,
  RowButtonLinkListFragmentDoc,
} from '../RowButtonLinkList/RowButtonLinkList.gql'
import { RowColumnOneFragment, RowColumnOneFragmentDoc } from '../RowColumnOne/RowColumnOne.gql'
import {
  RowColumnThreeFragment,
  RowColumnThreeFragmentDoc,
} from '../RowColumnThree/RowColumnThree.gql'
import { RowColumnTwoFragment, RowColumnTwoFragmentDoc } from '../RowColumnTwo/RowColumnTwo.gql'
import {
  RowContentLinksFragment,
  RowContentLinksFragmentDoc,
} from '../RowContentLinks/RowContentLinks.gql'
import { RowHeroBannerFragment, RowHeroBannerFragmentDoc } from '../RowHeroBanner/RowHeroBanner.gql'
import {
  RowProductBackstoryFragment,
  RowProductBackstoryFragmentDoc,
} from '../RowProductBackstory/RowProductBackstory.gql'
import {
  RowProductGridFragment,
  RowProductGridFragmentDoc,
} from '../RowProductGrid/RowProductGrid.gql'
import { RowQuoteFragment, RowQuoteFragmentDoc } from '../RowQuote/RowQuote.gql'
import {
  RowServiceOptionsFragment,
  RowServiceOptionsFragmentDoc,
} from '../RowServiceOptions/RowServiceOptions.gql'
import {
  RowSpecialBannerFragment,
  RowSpecialBannerFragmentDoc,
} from '../RowSpecialBanner/RowSpecialBanner.gql'
import {
  RowSwipeableGridFragment,
  RowSwipeableGridFragmentDoc,
} from '../RowSwipeableGrid/RowSwipeableGrid.gql'

export const PageFragmentDoc: DocumentNode<PageFragment, unknown> = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Page' },
      typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Page' } },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'InlineFragment',
                  typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Node' } },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RowColumnOne' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RowColumnTwo' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RowColumnThree' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RowBlogContent' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RowHeroBanner' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RowProductGrid' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RowSpecialBanner' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RowQuote' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RowSwipeableGrid' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RowProductBackstory' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RowButtonLinkList' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RowServiceOptions' } },
                { kind: 'FragmentSpread', name: { kind: 'Name', value: 'RowContentLinks' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'asset' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'Asset' } }],
            },
          },
        ],
      },
    },
    ...RowColumnOneFragmentDoc.definitions,
    ...RowColumnTwoFragmentDoc.definitions,
    ...RowColumnThreeFragmentDoc.definitions,
    ...RowBlogContentFragmentDoc.definitions,
    ...RowHeroBannerFragmentDoc.definitions,
    ...RowProductGridFragmentDoc.definitions,
    ...RowSpecialBannerFragmentDoc.definitions,
    ...RowQuoteFragmentDoc.definitions,
    ...RowSwipeableGridFragmentDoc.definitions,
    ...RowProductBackstoryFragmentDoc.definitions,
    ...RowButtonLinkListFragmentDoc.definitions,
    ...RowServiceOptionsFragmentDoc.definitions,
    ...RowContentLinksFragmentDoc.definitions,
    ...AssetFragmentDoc.definitions,
  ],
}
export type PageFragment = Pick<Types.Page, 'title'> & {
  content: Array<
    | ({ __typename: 'RowBlogContent' } & Pick<Types.RowBlogContent, 'id'> & RowBlogContentFragment)
    | ({ __typename: 'RowButtonLinkList' } & Pick<Types.RowButtonLinkList, 'id'> &
        RowButtonLinkListFragment)
    | ({ __typename: 'RowColumnOne' } & Pick<Types.RowColumnOne, 'id'> & RowColumnOneFragment)
    | ({ __typename: 'RowColumnThree' } & Pick<Types.RowColumnThree, 'id'> & RowColumnThreeFragment)
    | ({ __typename: 'RowColumnTwo' } & Pick<Types.RowColumnTwo, 'id'> & RowColumnTwoFragment)
    | ({ __typename: 'RowContentLinks' } & Pick<Types.RowContentLinks, 'id'> &
        RowContentLinksFragment)
    | ({ __typename: 'RowHeroBanner' } & Pick<Types.RowHeroBanner, 'id'> & RowHeroBannerFragment)
    | ({ __typename: 'RowProductBackstory' } & Pick<Types.RowProductBackstory, 'id'> &
        RowProductBackstoryFragment)
    | ({ __typename: 'RowProductGrid' } & Pick<Types.RowProductGrid, 'id'> & RowProductGridFragment)
    | ({ __typename: 'RowQuote' } & Pick<Types.RowQuote, 'id'> & RowQuoteFragment)
    | ({ __typename: 'RowServiceOptions' } & Pick<Types.RowServiceOptions, 'id'> &
        RowServiceOptionsFragment)
    | ({ __typename: 'RowSpecialBanner' } & Pick<Types.RowSpecialBanner, 'id'> &
        RowSpecialBannerFragment)
    | ({ __typename: 'RowSwipeableGrid' } & Pick<Types.RowSwipeableGrid, 'id'> &
        RowSwipeableGridFragment)
  >
  asset?: Types.Maybe<AssetFragment>
}
