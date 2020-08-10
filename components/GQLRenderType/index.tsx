import React from 'react'
/**
 * To make renderers customizable we need to be able to provide renders for all types
 */
type TypeObject = { __typename: string; [index: string]: unknown }

type FilterTypeByTypename<A extends TypeObject, Typename extends string> = A extends unknown
  ? A['__typename'] extends Typename
    ? A
    : never
  : never

type TypeRenderMethod<P> = (props: P) => React.ReactElement | null

type EventTypeMap<
  T extends TypeObject,
  TypeNames extends string,
  A extends Record<string, unknown>
> = {
  [K in TypeNames]: TypeRenderMethod<FilterTypeByTypename<T, K> & A>
}

export type GQLTypeRenderer<
  T extends TypeObject,
  A extends Record<string, unknown> = Record<string, unknown>
> = EventTypeMap<T, T['__typename'], A>

/**
 * A simple array with renderers but with strict typing that validates of the
 * provided Renderer is actually able to render the Type
 */
export default function GQLRenderType<
  T extends TypeObject,
  A extends Record<string, unknown> = Record<string, unknown>
>(props: { renderer: GQLTypeRenderer<T, A> } & FilterTypeByTypename<T, T['__typename']> & A) {
  const { renderer, __typename, ...typeItemProps } = props
  const TypeItem: TypeRenderMethod<typeof typeItemProps> = renderer[__typename]
    ? renderer[__typename]
    : () => <div>{__typename}</div>

  return <TypeItem {...typeItemProps} />
}