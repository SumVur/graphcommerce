import { Theme, makeStyles } from '@material-ui/core'
import responsiveVal from '@reachdigital/next-ui/Styles/responsiveVal'

const useCategoryPageStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      display: 'grid',
      gridTemplate: `
        "breadcrumb"
        "description"
        "children"
        "filters"
        "count"
        "items"
        "pagination"
      `,
      gridTemplateColumns: 'minmax(0, 1fr)',
      gridColumnGap: theme.spacings.md,
      gridRowGap: theme.spacings.sm,
    },
    breadcrumb: {
      gridArea: 'breadcrumb',
    },
    description: {
      gridArea: 'description',
      margin: '0 auto',
      textAlign: 'center',
      maxWidth: 732,
    },
    childCategories: {
      gridArea: 'children',
      margin: '0 auto',
      maxWidth: '100%',
    },
    pagination: {
      gridArea: 'pagination',
      margin: '32px auto 0 auto',
      marginBottom: responsiveVal(40, 80),
      display: 'flex',
      alignItems: 'left',
      '& span': {
        padding: '10px 10px 0 10px',
      },
      '& a': {
        transition: 'background .25s ease',
        borderRadius: '100%',
        height: 40,
        width: 40,
        '& svg': {
          color: '#000',
        },
        '&:hover': {
          background: 'rgba(0, 0, 0, 0.04)',
        },
      },
      '& svg': {
        borderRadius: '100%',
        padding: 6,
        height: 40,
        width: 40,
        color: '#ddd',
      },
    },
    sort: {
      gridArea: 'sort',
    },
    filters: {
      gridArea: 'filters',
      margin: '0 auto 32px auto',
      paddingLeft: 16,
      paddingRight: 16,
    },
    filterItem: {
      marginRight: 8,
      marginBottom: 16,
      marginLeft: 8,
    },
    items: {
      gridArea: 'items',
    },
  }),
  { name: 'ProductPageStyles' },
)

export default useCategoryPageStyles
