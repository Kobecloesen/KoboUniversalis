import React, {useState} from 'react';
const api = {
  //key: "da715407ae031b4d63dffbe89af38921",
  base: "https://api.openweathermap.org/data/2.5/"}

function App() {

  const[query, setQuery] = useState('');
  //const[weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=da715407ae031b4d63dffbe89af38921`)
      .then(res => res.json())
      .then(result => {
        setQuery('')
        //setWeather(result)
        console.log(result)
      })
    }
  }


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" 
            className="search-bar"
            placeholder="search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}/>
            
        </div>
        <div>
          <div className="location-box">
            <div className="location">Brussel, Belgium</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              15°C
            </div>
            <div className="weather">
              Sunny
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default App;