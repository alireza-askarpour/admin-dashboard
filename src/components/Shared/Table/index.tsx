import { Children } from 'react'
import { classNames } from 'utils/classNames'
import styles from './table.module.css'

type IProps = {
  children: React.ReactNode
}

const getChildrenOnDisplayName = (children: any, displayName: string) => {
  return Children.map(children, (child) =>
    child.type.displayName === displayName ? child : null,
  )
}

const Table = ({ children }: IProps) => {
  const thead = getChildrenOnDisplayName(children, 'Header')
  const tbody = getChildrenOnDisplayName(children, 'Body')
  const tfoot = getChildrenOnDisplayName(children, 'Footer')
  const row = getChildrenOnDisplayName(children, 'Row')
  const headerCell = getChildrenOnDisplayName(children, 'HeaderCell')
  const cell = getChildrenOnDisplayName(children, 'Cell')

  return (
    <table className={styles.table}>
      {thead}
      {tbody}
      {tfoot}
      {row}
      {headerCell}
      {cell}
    </table>
  )
}

const TableHeader = ({ children, ...other }: any) => <thead {...other}>{children}</thead>

const TableBody = ({ children, ...other }: any) => <tbody {...other}>{children}</tbody>

const TableFooter = ({ children, ...other }: any) => <tfoot {...other}>{children}</tfoot>

const TableRow = ({ children, className, ...other }: any) => (
  <tr className={classNames(styles.tableRow, className)} {...other}>
    {children}
  </tr>
)

const TableHeaderCell = ({ collapsing, className, children, ...other }: any) => (
  <th
    className={classNames(
      styles.headerCell,
      collapsing && styles.collapsing,
      className && className,
    )}
    {...other}
  >
    {children}
  </th>
)

const TableCell = ({ collapsing, className, children, ...other }: any) => (
  <td
    className={classNames(
      styles.tableCell,
      collapsing && styles.collapsing,
      className && className,
    )}
    {...other}
  >
    {children}
  </td>
)

TableHeader.displayName = 'Header'
TableBody.displayName = 'Body'
TableRow.displayName = 'Row'
TableHeaderCell.displayName = 'HeaderCell'
TableCell.displayName = 'Cell'
TableFooter.displayName = 'Footer'

Table.Header = TableHeader
Table.Body = TableBody
Table.Footer = TableFooter
Table.Cell = TableCell
Table.HeaderCell = TableHeaderCell
Table.Row = TableRow

export default Table
