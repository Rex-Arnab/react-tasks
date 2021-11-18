import './App.css';
import {useState} from 'react'

const WeatherApp = ({setData}) => {
  const [place, setPlace] = useState("")


  const checkWeather = async () => {
    const resp = await fetch(`https://www.metaweather.com/api/location/search/?query=${place}`)
    const data = await resp.json()
    setData(data);
  }
  return (
    <div>
      <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
      <button
        onClick={checkWeather}
      >Check</button>
    </div>
  )
}

const ShowWeather = ({ data }) => {
  return (
    <div>
      {data.map(place => {
        return (
          <div className="card">
            <div className="card-title">{place.title}</div>
            <div>
              <p>latt_long: {place.latt_long}</p>
              <p>location_type: {place.location_type}</p>
              <p>woeid: {place.woeid}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function App() {
  const [data, setData] = useState([])
  return (
    <div className="App">
      <WeatherApp setData={setData} />
      <ShowWeather data={data} />
    </div>
  );
}

export default App;
