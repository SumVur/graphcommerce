import { useWatch } from '@graphcommerce/ecommerce-ui'
import type { ProductAttributeFilterInput } from '@graphcommerce/graphql-mesh'
import {
  ChipPanel,
  ActionCardListForm,
  ActionCard,
  filterNonNullableKeys,
  IconSvg,
  iconCirle,
} from '@graphcommerce/next-ui'
import { Box, Typography } from '@mui/material'
import { useMemo } from 'react'
import { isFilterTypeEqual } from '../ProductListItems/filterTypes'
import { useProductFiltersPro } from './ProductFiltersPro'
import { FilterProps } from './ProductFiltersProAggregations'

export function ProductFilterEqualChip(props: FilterProps) {
  const { attribute_code, label, options } = props
  const { form, submit, params } = useProductFiltersPro()
  const { control } = form
  const attrCode = attribute_code as keyof ProductAttributeFilterInput

  // We are casting the name, because filters can have other types than equal which dont have the in property
  const name = `filters.${attrCode}.in` as 'filters.category_id.in'
  const activeSort = useWatch({ control, name })

  const param = params.filters?.[attrCode]

  if (param && !isFilterTypeEqual(param)) throw new Error('Invalid filter type')

  const active = Boolean(param?.in?.length)
  const selectedLabel =
    filterNonNullableKeys(options)
      .filter((option) => param?.in?.includes(option.value))
      .map((option) => option && option.label) ?? []

  return (
    <ChipPanel
      chipProps={{ variant: 'outlined', label }}
      panelProps={{
        onApply: submit,
        onReset: activeSort
          ? () => {
              form.resetField(name, { defaultValue: null })
              return submit()
            }
          : undefined,
        onClose: submit,
        closeOnAction: true,
      }}
      selectedLabel={selectedLabel}
      selected={active}
    >
      <ActionCardListForm
        render={ActionCard}
        name={name}
        control={control}
        multiple
        layout='list'
        variant='default'
        size='medium'
        items={useMemo(
          () =>
            filterNonNullableKeys(options, ['count', 'label']).map((option) => ({
              ...option,
              title: (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ marginRight: 1 }}>{option.label}</Typography>
                  <Typography variant='caption' color='text.disabled'>
                    ({option.count})
                  </Typography>
                </Box>
              ),
              image: attrCode?.toLowerCase().includes('color') && (
                <IconSvg
                  src={iconCirle}
                  sx={{ color: `${option?.label}`, fill: 'currentcolor' }}
                  size='large'
                />
              ),
            })),
          [attrCode, options],
        )}
      />
    </ChipPanel>
  )
}
