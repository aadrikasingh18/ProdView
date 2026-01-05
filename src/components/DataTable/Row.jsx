export default function Row({ row }) {
    return (
      <tr>
        <td className="border border-gray-300 px-2 py-1">{row.id}</td>
        <td className="border border-gray-300 px-2 py-1">{row.name}</td>
        <td className="border border-gray-300 px-2 py-1">{row.email}</td>
      </tr>
    );
  }  