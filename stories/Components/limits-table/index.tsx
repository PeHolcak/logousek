type LimitsTableProps = {
  values: {
    maxNoi: number | 'unlimited'
  }
}

const LimitsTable: React.FC<LimitsTableProps> = ({ values }) => {
  return (
    <>
      <h2>Limits</h2>
      <table style={{ width: '100%' }}>
        <tr>
          <th>maxNoi</th>
          <td>{values.maxNoi}</td>
        </tr>
      </table>
    </>
  )
}

export default LimitsTable
