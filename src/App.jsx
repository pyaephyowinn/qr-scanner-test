import { useState } from 'react';
import QRCode from 'react-qr-code';
import { QrReader } from 'react-qr-reader';
import { QrScanner } from '@yudiel/react-qr-scanner';

const App = () => {
  const [openSacnner, setOpenScanner] = useState(false);
  const [openReader, setOpenReader] = useState(false);

  const [data, setData] = useState('No result');
  const [dataWithReader, setDataWithReader] = useState('No result');

  return (
    <div>
      {/* <QRCode value='hello world' /> */}

      {/* {openSacnner && (
        <QrReader
          onResult={(result, error) => {
            console.log('onResult');
            if (!!result) {
              setData(result?.text);
              setOpenScanner(false);
            }

            if (!!error) {
              console.info(error);
            }
          }}
          style={{ width: '100%' }}
        />
      )} */}

      {openReader && (
        <QrScanner
          onDecode={(result) => {
            setDataWithReader(result);
            setOpenReader(false);
          }}
          onError={(error) => console.log(error?.message)}
        />
      )}

      {/* <button
        onClick={() => {
          setOpenScanner((prev) => !prev);
        }}
      >
        open scanner
      </button> */}

      <button
        onClick={() => {
          setOpenReader((prev) => !prev);
        }}
      >
        open reader
      </button>

      {/* <p>Scanned {data}</p> */}
      <p>data with reader: {dataWithReader}</p>
    </div>
  );
};
export default App;
