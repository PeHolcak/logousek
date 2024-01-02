type SchemeInfoTableProps = {
  name: string
  description: string
}

const SchemeInfoTable: React.FC<SchemeInfoTableProps> = ({
  name,
  description,
}) => {
  return (
    <>
      <h2>Basic Info</h2>
      <table style={{ width: '100%' }}>
        <tr>
          <th>Name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{description}</td>
        </tr>
      </table>
    </>
  )
}

export default SchemeInfoTable
