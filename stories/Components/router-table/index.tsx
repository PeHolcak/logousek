type RouterTableProps = {
  name: string
  description: string
  source: string
}

const RouterTable: React.FC<RouterTableProps> = ({
  name,
  description,
  source,
}) => {
  return (
    <>
      <h2>Basic Info</h2>
      <table>
        <tr>
          <th>Name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{description}</td>
        </tr>
        <tr>
          <th>Source</th>
          <td>{source}</td>
        </tr>
      </table>
    </>
  )
}

export default RouterTable
