import React from 'react'
/** To make renderers customizable we need to be able to provide renders for all types */
type TypeObject = { __typename: string; [index: string]: unknown }

export type FilterTypeByTypename<A extends TypeObject, Typename extends string> = A extends unknown
  ? A['__typename'] extends Typename
    ? A
    : never
  : never

type TypeRenderMethod<P> = (props: P) => React.ReactElement | null

type TypeRenderMap<
  T extends TypeObject,
  TypeNames extends string,
  TAdd extends Record<string, unknown>,
> = {
  [K in TypeNames]: TypeRenderMethod<FilterTypeByTypename<T, K> & TAdd>
}

export type TypeRenderer<
  T extends TypeObject,
  TAdd extends Record<string, unknown> = Record<string, unknown>,
> = TypeRenderMap<T, T['__typename'], TAdd>

/**
 * A simple array with renderers but with strict typing that validates of the provided Renderer is
 * actually able to render the Type
 */
export function RenderType<
  T extends TypeObject,
  A extends Record<string, unknown> = Record<string, unknown>,
>(props: { renderer: TypeRenderer<T, A> } & FilterTypeByTypename<T, T['__typename']> & A) {
  const { renderer, __typename, ...typeItemProps } = props
  const TypeItem: TypeRenderMethod<typeof typeItemProps> = renderer[__typename]
    ? renderer[__typename]
    : () => <>{process.env.NODE_ENV !== 'production' ? __typename : ''}</>

  return <TypeItem {...typeItemProps} __typename={__typename} />
}

export function isTypename<T extends TypeObject, Typename extends string>(
  typename: Typename,
  type: T,
): type is FilterTypeByTypename<T, Typename> {
  return type.__typename === typename
}

export function isNotNullOrUndefined<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined
}

export function findByTypename<T extends TypeObject, Typename extends string>(
  typename: Typename,
  type: (T | undefined | null)[] | undefined | null,
) {
  if (!type) return undefined

  return type.filter(isNotNullOrUndefined).find((item) => isTypename(typename, item)) as
    | FilterTypeByTypename<T, Typename>
    | undefined
}
