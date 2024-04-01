import clsx from 'clsx';
import css from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tableBody} key={id}>
            <td className={css.tableBodyRow}>{type}</td>
            <td className={clsx(css.tableBodyRow, css.tableBodyRowType)}>
              {amount}
            </td>
            <td className={clsx(css.tableBodyRow, css.tableBodyRowType)}>
              {currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
