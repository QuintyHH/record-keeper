import type { NextPage } from 'next';
import { useCallback, useState } from 'react';

import * as Styled from './home.styles';

import type { Record, Vinyl } from '@customTypes/records';
import type { GetRecordResponse } from '@pages/api/get-record.api';

const defaultRecord: Record = { album: '', artist: '', cover: '' };

const Home: NextPage = () => {
  const [currentRecord, setCurrentRecord] = useState<Record>(defaultRecord);
  const [records, setRecords] = useState<readonly Vinyl[]>([]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = event.target;
      setCurrentRecord((previous) => ({ ...previous, [id]: value }));
    },
    [setCurrentRecord]
  );

  const handleGet = useCallback(() => {
    fetch('/api/get-record', {
      method: 'GET',
    })
      .then(async (result) => result.json())
      .then((result: GetRecordResponse) => {
        const { values } = result;
        if (values) {
          setRecords(values);
        }
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }, []);

  const handleAdd = useCallback(() => {
    fetch('/api/add-record', {
      body: JSON.stringify(currentRecord),
      method: 'POST',
    })
      .then(() => {
        handleGet();
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }, [currentRecord, handleGet]);

  const handleDelete = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const currentID = event.target.name;
      fetch('/api/delete-record', {
        body: JSON.stringify(currentID),
        method: 'POST',
      })
        .then(() => {
          handleGet();
        })
        .catch((error: Error) => {
          console.log(error);
        });
    },
    [handleGet]
  );

  return (
    <div>
      <Styled.Header>Test</Styled.Header>
      <div>
        {Object.keys(defaultRecord).map((field) => (
          <div key={field}>
            <label htmlFor={field}>{field}</label>
            <input id={field} onChange={handleChange} type="text" />
          </div>
        ))}
        <button onClick={handleAdd} type="button">
          Add Record
        </button>
        <button onClick={handleGet} type="button">
          Get All Records
        </button>
      </div>
      <div>
        {records.map((record) => {
          const { albumCoverURL, albumName, artistName, id } = record;

          return (
            <div key={id}>
              <br />
              <div>Album: {albumName}</div>
              <div>Artist: {artistName}</div>
              <div>Background: {albumCoverURL}</div>
              <button name={`${id}`} onClick={handleDelete} type="button">
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
