import React from "react";



const FlapComponent = () => {
const contnents = [
	{
		"continent": "Africa",
		"countries": [
			{
				"name": "Nigeria",
				"flag": "🇳🇬"
			},
			{
				"name": "Ethiopia",
				"flag": "🇪🇹"
			},
			{
				"name": "Egypt",
				"flag": "🇪🇬"
			},
			{
				"name": "DR Congo",
				"flag": "🇨🇩"
			},
			{
				"name": "South Africa",
				"flag": "🇿🇦"
			}
		]
	},
	{
		"continent": "America",
		"countries": [
			{
				"name": "USA",
				"flag": "🇺🇸"
			},
			{
				"name": "Brazil",
				"flag": "🇧🇷"
			},
			{
				"name": "Mexico",
				"flag": "🇲🇽"
			},
			{
				"name": "Colombia",
				"flag": "🇨🇴"
			},
			{
				"name": "Argentina",
				"flag": "🇦🇷"
			}
		]
	},
	{
		"continent": "Asia",
		"countries": [
			{
				"name": "China",
				"flag": "🇨🇳"
			},
			{
				"name": "India",
				"flag": "🇮🇳"
			},
			{
				"name": "Indonesia",
				"flag": "🇮🇩"
			},
			{
				"name": "Pakistan",
				"flag": "🇵🇰"
			},
			{
				"name": "Bangladesh",
				"flag": "🇧🇩"
			}
		]
	},
	{
		"continent": "Europe",
		"countries": [
			{
				"name": "Russia",
				"flag": "🇷🇺"
			},
			{
				"name": "Germany",
				"flag": "🇩🇪"
			},
			{
				"name": "UK",
				"flag": "🇬🇧"
			},
			{
				"name": "France",
				"flag": "🇫🇷"
			},
			{
				"name": "Italy",
				"flag": "🇮🇹"
			}
		]
	},
	{
		"continent": "Oceania",
		"countries": [
			{
				"name": "Australia",
				"flag": "🇦🇺"
			},
			{
				"name": "Papua New Guinea",
				"flag": "🇵🇬"
			},
			{
				"name": "New Zealand",
				"flag": "🇳🇿"
			},
			{
				"name": "Fiji",
				"flag": "🇫🇯"
			},
			{
				"name": "Solomon Islands",
				"flag": "🇸🇧"
			}
		]
	}
]
function getContinentsList() {
    let list = [];
    for (var i in contnents) {
       list.push(<li id="continentList">{contnents[i].continent}</li>);
    }
    return list;
}
function getContriesList() {
    let list = [];
    for (var i in contnents) {
        let con = contnents[i].countries
        for(var j in con)
    list.push(<li id="contriesList">{con[j].name}</li>);
       console.log('list', list)
    }
    return list;
}
function getFlagsList() {
    let list = [];
    for (var i in contnents) {
        let con = contnents[i].countries
        for(var j in con)
    list.push(<li id="contriesList">{con[j].flag}</li>);
       console.log('list', list)
    }
    return list;
}
  return (
    <div >
        <div>
        {getContinentsList()}
        </div>
        <p>contries</p>
       <div>
        {getContriesList()}
    </div>
    <div>
        {getFlagsList()}
    </div>
    </div>
   
    

);
}

export default FlapComponent;