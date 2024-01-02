type ApiErrorsProps = {
  apiErrorsList: [
    {
      type: string
      code: string
      message: string
    }
  ]
}

const ApiErrors: React.FC<ApiErrorsProps> = ({ apiErrorsList }) => {
  return (
    <>
      <h2>Error List</h2>
      <table style={{ width: '100%' }}>
        <tr>
          <th>Type</th>
          <th>Code</th>
          <th>Message</th>
        </tr>
        {Array.isArray(apiErrorsList) && apiErrorsList.length
          ? apiErrorsList.map((apiError) => (
              <tr key={`table_row${apiError.code}`}>
                <td>{apiError.type}</td>
                <td>{apiError.code}</td>
                <td>{apiError.message}</td>
              </tr>
            ))
          : 'No rules'}
      </table>
    </>
  )
}

export default ApiErrors
