class Weather {
  apiKey = '4367fce12d38f4cdafbc3e4b3d957571';
 
   fiveDay = async (name) => {
     const result = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&appid=${this.apiKey}`);
     return await result.json();
   }
}
export default Weather;



