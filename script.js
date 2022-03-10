const request = new XMLHttpRequest();

    request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    
    request.send();
    
    

    request.onload = () => {
        var data = JSON.parse(request.response);

        const asianCountries = data.filter((data) => data.region ==="Asia").map((data) => data.name)
       
        const twolakCountries = data.filter((data)=>data.population < 2_00_000)
        .map((data)=> ({name : data.name, population :data.population}));
        
        const totPop = data.map((data) => data.population)
         .reduce((sum , curr) => sum + curr, 0);

         const usCurrency = data.filter((data) => data.currencies && data.currencies[0].code==="USD")
         .map((data) => data.name)
        

        
        console.log(asianCountries);

        console.log(twolakCountries)

        data.forEach((datas) => console.log(`name : ${datas.name}, flag : ${datas.flag}, capital : ${datas.capital}`));
        
        console.log(`4.Total Population in the world : ${totPop}`)
        
        console.log("5.Usd used countries list below") // just for understand purpose only in console..
        
        for(let usd of usCurrency){
        console.log(usd)
        }
    
    }
