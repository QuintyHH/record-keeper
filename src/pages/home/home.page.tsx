import type { NextPage } from 'next';

import * as Styled from './home.styles';
import { fetchConfig } from '@helpers/fetch-config';
import { useCallback, useState } from 'react';
import { Record, Vinyl } from '@customTypes/records';
import { GetRecordResponse } from '@pages/api/get-record.api';

const defaultRecord: Record = { album: '', artist: '', cover: '' };

const Home: NextPage = () => {
  const [currentRecord, setCurrentRecord] = useState<Record>(defaultRecord);
  const [records, setRecords] = useState<Vinyl[]>([]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = event.target;
      setCurrentRecord((prev) => ({ ...prev, [id]: value }));
    },
    [setCurrentRecord]
  );

  const handleAdd = useCallback(() => {
    fetch('/api/add-record', {
      method: 'POST',
      body: JSON.stringify(currentRecord),
    }).then(() => {
      handleGet();
    });
  }, [currentRecord]);

  const handleGet = useCallback(() => {
    fetch('/api/get-record', {
      method: 'GET',
    })
      .then((result) => result.json())
      .then((result: GetRecordResponse) => {
        const { values } = result;
        values && setRecords(values);
      });
  }, []);

  const handleDelete = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const currentID = event.target.name;
    fetch('/api/delete-record', {
      method: 'POST',
      body: JSON.stringify(currentID),
    }).then(() => {
      handleGet();
    });
  }, []);

  return (
    <div>
      <Styled.Header>Test</Styled.Header>
      <div>
        {Object.keys(defaultRecord).map((field) => (
          <div key={field}>
            <label>{field}</label>
            <input type="text" onChange={handleChange} id={field} />
          </div>
        ))}
        <button onClick={handleAdd}>Add Record</button>
        <button onClick={handleGet}>Get All Records</button>
      </div>
      <div>
        {records.map((record) => {
          const { albumCoverURL, albumName, artistName, id } = record;

          return (
            <div key={id}>
              <br />
              <div>Album: {albumName}</div>
              <div>Artist: {artistName}</div>
              <button name={`${id}`} onClick={handleDelete}>
                Delete Record
              </button>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
