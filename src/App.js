import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [pagenumber, setPagenumber] = useState(1);
  const [inputval, setInputValue] = useState();

  const fetchPassenger = async () => {
    const res = await fetch(`https://api.instantwebtools.net/v1/passenger?page=1&size=10`);
    const result = await res.json();
    if (result && result.data)
      setData(result.data);
  };

  useEffect(() => {
    fetchPassenger();
  }, [pagenumber]);

  const setPages = (page) => {
    setPagenumber(page);
   
  };
  console.log(pagenumber)
  return (
    <div className="App">
      {data.length>0 &&  <div className='box'>
      <div className='btn'>
      
        <input type='text' placeholder='enter page number' onChange={(e) => setInputValue(e.target.value)
        } />
        <button style={{ backgroundColor: 'grey' }} onClick={() => setPages(inputval)}>Go</button>
      </div>

      <>{
        data.map((items, i) =>
          <div className='btn' key={i}>
            <div>{items.name}</div>
            <div>{items.trips}</div>
            <div>{items.airline[0].name}</div>
          </div>
        )
      }
      </>
      <button style={{ backgroundColor: 'aqua' }} onClick={() => pagenumber > 1 ? setPagenumber(pagenumber - 1) : setPagenumber(1)}> Previos Page</button>
      <button style={{ backgroundColor: 'aqua' }} onClick={() => setPagenumber(pagenumber + 1)}> Next Page</button>
      </div>
      }

    </div>
  );
}

export default App;
