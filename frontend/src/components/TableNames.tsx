import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TableNames: React.FC = () => {
  const [tableNames, setTableNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchTableNames = async () => {
      try {
        const response = await axios.get('/database/tables');
        setTableNames(response.data);
      } catch (error) {
        console.error('Error fetching table names:', error);
      }
    };

    fetchTableNames();
  }, []);

  return (
    <div>
      <h2>Noms de tables</h2>
      <ul>
        {tableNames.map(tableName => (
          <li key={tableName}>{tableName}</li>
        ))}
      </ul>
    </div>
  );
};

export default TableNames;
