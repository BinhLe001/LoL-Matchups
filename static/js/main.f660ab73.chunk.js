(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,a,l){},190:function(e,a,l){},192:function(e,a,l){},194:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),i=l(15),s=l.n(i),r=(l(76),l(29)),c=l(9),o=l(10),u=l(12),m=l(11),d=l(13),p=l(38),v=l.n(p),h=l(21),b=(l(96),function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=""===this.props.top?n.a.createElement("div",{className:"Champ-empty"},"top"):n.a.createElement("img",{className:"Champ-icon",src:"/LoL-Matchups/ChampionIcons/"+this.props.top+".png",alt:"champion icon"}),a=""===this.props.jungle?n.a.createElement("div",{className:"Champ-empty"},"jgl"):n.a.createElement("img",{className:"Champ-icon",src:"/LoL-Matchups/ChampionIcons/"+this.props.jungle+".png",alt:"champion icon"}),l=""===this.props.middle?n.a.createElement("div",{className:"Champ-empty"},"mid"):n.a.createElement("img",{className:"Champ-icon",src:"/LoL-Matchups/ChampionIcons/"+this.props.middle+".png",alt:"champion icon"}),t=""===this.props.adc?n.a.createElement("div",{className:"Champ-empty"},"adc"):n.a.createElement("img",{className:"Champ-icon",src:"/LoL-Matchups/ChampionIcons/"+this.props.adc+".png",alt:"champion icon"}),i=""===this.props.support?n.a.createElement("div",{className:"Champ-empty"},"sup"):n.a.createElement("img",{className:"Champ-icon",src:"/LoL-Matchups/ChampionIcons/"+this.props.support+".png",alt:"champion icon"});return n.a.createElement("div",{className:"List"},n.a.createElement("div",{className:"Position"},n.a.createElement("div",{className:"Champ"},e),n.a.createElement(h.a,{id:"top",placeholder:"top",onChange:this.props.handleChange(this.props.team+"Top"),value:{value:this.props.top,label:this.props.top},options:y,isClearable:!0,isSearchable:!0})),n.a.createElement("div",{className:"Position"},n.a.createElement("div",{className:"Champ"},a),n.a.createElement(h.a,{name:"jungle",placeholder:"jungle",onChange:this.props.handleChange(this.props.team+"Jungle"),value:{value:this.props.jungle,label:this.props.jungle},options:y,isClearable:!0,isSearchable:!0})),n.a.createElement("div",{className:"Position"},n.a.createElement("div",{className:"Champ"},l),n.a.createElement(h.a,{name:"middle",placeholder:"middle",onChange:this.props.handleChange(this.props.team+"Middle"),value:{value:this.props.middle,label:this.props.middle},options:y,isClearable:!0,isSearchable:!0})),n.a.createElement("div",{className:"Position"},n.a.createElement("div",{className:"Champ"},t),n.a.createElement(h.a,{name:"adc",placeholder:"adc",onChange:this.props.handleChange(this.props.team+"Adc"),value:{value:this.props.adc,label:this.props.adc},options:y,isClearable:!0,isSearchable:!0})),n.a.createElement("div",{className:"Position"},n.a.createElement("div",{className:"Champ"},i),n.a.createElement(h.a,{name:"support",placeholder:"support",onChange:this.props.handleChange(this.props.team+"Support"),value:{value:this.props.support,label:this.props.support},options:y,isClearable:!0,isSearchable:!0})))}}]),a}(t.Component)),y=[{label:"Aatrox",value:"Aatrox"},{label:"Ahri",value:"Ahri"},{label:"Akali",value:"Akali"},{label:"Alistar",value:"Alistar"},{label:"Amumu",value:"Amumu"},{label:"Anivia",value:"Anivia"},{label:"Annie",value:"Annie"},{label:"Ashe",value:"Ashe"},{label:"Aurelion Sol",value:"AurelionSol"},{label:"Azir",value:"Azir"},{label:"Bard",value:"Bard"},{label:"Blitzcrank",value:"Blitzcrank"},{label:"Brand",value:"Brand"},{label:"Braum",value:"Braum"},{label:"Caitlyn",value:"Caitlyn"},{label:"Camille",value:"Camille"},{label:"Cassiopeia",value:"Cassiopeia"},{label:"Cho'Gath",value:"Cho'Gath"},{label:"Corki",value:"Corki"},{label:"Darius",value:"Darius"},{label:"Diana",value:"Diana"},{label:"Dr. Mundo",value:"Dr. Mundo"},{label:"Draven",value:"Draven"},{label:"Ekko",value:"Ekko"},{label:"Elise",value:"Elise"},{label:"Evelynn",value:"Evelynn"},{label:"Ezreal",value:"Ezreal"},{label:"Fiddlesticks",value:"Fiddlesticks"},{label:"Fiora",value:"Fiora"},{label:"Fizz",value:"Fizz"},{label:"Galio",value:"Galio"},{label:"Gangplank",value:"Gangplank"},{label:"Garen",value:"Garen"},{label:"Gnar",value:"Gnar"},{label:"Gragas",value:"Gragas"},{label:"Graves",value:"Graves"},{label:"Hecarim",value:"Hecarim"},{label:"Heimerdinger",value:"Heimerdinger"},{label:"Illaoi",value:"Illaoi"},{label:"Irelia",value:"Irelia"},{label:"Ivern",value:"Ivern"},{label:"Janna",value:"Janna"},{label:"Jarvan IV",value:"Jarvan IV"},{label:"Jax",value:"Jax"},{label:"Jayce",value:"Jayce"},{label:"Jhin",value:"Jhin"},{label:"Jinx",value:"Jinx"},{label:"Kai'Sa",value:"Kai'Sa"},{label:"Kalista",value:"Kalista"},{label:"Karma",value:"Karma"},{label:"Karthus",value:"Karthus"},{label:"Kassadin",value:"Kassadin"},{label:"Katarina",value:"Katarina"},{label:"Kayle",value:"Kayle"},{label:"Kayn",value:"Kayn"},{label:"Kennen",value:"Kennen"},{label:"Kha'Zix",value:"Kha'Zix"},{label:"Kindred",value:"Kindred"},{label:"Kled",value:"Kled"},{label:"Kog'Maw",value:"Kog'Maw"},{label:"LeBlanc",value:"LeBlanc"},{label:"LeeSin",value:"Lee Sin"},{label:"Leona",value:"Leona"},{label:"Lissandra",value:"Lissandra"},{label:"Lucian",value:"Lucian"},{label:"Lulu",value:"Lulu"},{label:"Lux",value:"Lux"},{label:"Malphite",value:"Malphite"},{label:"Malzahar",value:"Malzahar"},{label:"Maokai",value:"Maokai"},{label:"Master Yi",value:"Master Yi"},{label:"Miss Fortune",value:"Miss Fortune"},{label:"Mordekaiser",value:"Mordekaiser"},{label:"Morgana",value:"Morgana"},{label:"Nami",value:"Nami"},{label:"Nasus",value:"Nasus"},{label:"Nautilus",value:"Nautilus"},{label:"Nidalee",value:"Nidalee"},{label:"Nocturne",value:"Nocturne"},{label:"Nunu",value:"Nunu"},{label:"Olaf",value:"Olaf"},{label:"Orianna",value:"Orianna"},{label:"Ornn",value:"Ornn"},{label:"Pantheon",value:"Pantheon"},{label:"Poppy",value:"Poppy"},{label:"Pyke",value:"Pyke"},{label:"Quinn",value:"Quinn"},{label:"Rakan",value:"Rakan"},{label:"Rammus",value:"Rammus"},{label:"Rek'Sai",value:"Rek'Sai"},{label:"Renekton",value:"Renekton"},{label:"Rengar",value:"Rengar"},{label:"Riven",value:"Riven"},{label:"Rumble",value:"Rumble"},{label:"Ryze",value:"Ryze"},{label:"Sejuani",value:"Sejuani"},{label:"Shaco",value:"Shaco"},{label:"Shen",value:"Shen"},{label:"Shyvana",value:"Shyvana"},{label:"Singed",value:"Singed"},{label:"Sion",value:"Sion"},{label:"Sivir",value:"Sivir"},{label:"Skarner",value:"Skarner"},{label:"Sona",value:"Sona"},{label:"Soraka",value:"Soraka"},{label:"Swain",value:"Swain"},{label:"Syndra",value:"Syndra"},{label:"Tahm Kench",value:"Tahm Kench"},{label:"Taliyah",value:"Taliyah"},{label:"Talon",value:"Talon"},{label:"Taric",value:"Taric"},{label:"Teemo",value:"Teemo"},{label:"Thresh",value:"Thresh"},{label:"Tristana",value:"Tristana"},{label:"Trundle",value:"Trundle"},{label:"Tryndamere",value:"Tryndamere"},{label:"Twisted Fate",value:"Twisted Fate"},{label:"Twitch",value:"Twitch"},{label:"Udyr",value:"Udyr"},{label:"Urgot",value:"Urgot"},{label:"Varus",value:"Varus"},{label:"Vayne",value:"Vayne"},{label:"Veigar",value:"Veigar"},{label:"Vel'Koz",value:"Vel'Koz"},{label:"Viktor",value:"Viktor"},{label:"Vi",value:"Vi"},{label:"Vladimir",value:"Vladimir"},{label:"Volibear",value:"Volibear"},{label:"Warwick",value:"Warwick"},{label:"Wukong",value:"Wukong"},{label:"Xayah",value:"Xayah"},{label:"Xerath",value:"Xerath"},{label:"Xin Zhao",value:"Xin Zhao"},{label:"Yasuo",value:"Yasuo"},{label:"Yorick",value:"Yorick"},{label:"Zac",value:"Zac"},{label:"Zed",value:"Zed"},{label:"Ziggs",value:"Ziggs"},{label:"Zilean",value:"Zilean"},{label:"Zoe",value:"Zoe"},{label:"Zyra",value:"Zyra"}],g=l(39),E=l.n(g),k=l(68),S=l.n(k),N=l(8),f=l.n(N),C=l(40),T=l.n(C),A=l(31),L=l.n(A),O=l(28),M=l.n(O),w=(l(108),function(e){function a(){var e,l;Object(c.a)(this,a);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(l=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).createData=function(e){var a=0,l=[];if(null!=e&&e.length>0)for(var t=0;t<e.length;t++){var n=e[t],i=n[0],s=n[1],r=n[2];l.push({id:a,name:i,role:r,winProb:s}),a+=1}return l},l}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.createData(this.props.recommendedPicks),a=this.props.picksLoading?n.a.createElement("div",null,n.a.createElement(E.a,null,n.a.createElement(T.a,null,n.a.createElement(L.a,null,n.a.createElement(f.a,{className:"Table-column"},"champion"),n.a.createElement(f.a,{className:"Table-column"},"role"),n.a.createElement(f.a,{className:"Table-column"},"advantage")))),n.a.createElement(M.a,{className:"picks-loader",size:70})):n.a.createElement("div",null,n.a.createElement(E.a,null,n.a.createElement(T.a,null,n.a.createElement(L.a,null,n.a.createElement(f.a,{className:"Table-column"},"champion"),n.a.createElement(f.a,{className:"Table-column"},"role"),n.a.createElement(f.a,{className:"Table-column"},"advantage"))),n.a.createElement(S.a,null,e.map(function(e){return n.a.createElement(L.a,{className:"Table-row",key:e.id},n.a.createElement(f.a,{className:"Table-cell"},e.name),n.a.createElement(f.a,{className:"Table-cell"},e.role),n.a.createElement(f.a,{className:"Table-cell"},e.winProb+" %"))}))));return n.a.createElement("div",{className:"picks-table"},a)}}]),a}(t.Component)),P=l(69),j=l.n(P),R=(l(190),function(e){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.timesLoading?n.a.createElement("div",null,n.a.createElement(M.a,{className:"times-loader",size:70})):n.a.createElement("div",null,n.a.createElement(j.a,{data:[{x:[15,20,25,30,35,40,45],y:this.props.winTimes,type:"scatter",mode:"lines+points",marker:{color:"#54d7c7"}}],layout:{width:600,height:480,color:"#FFFFFF",title:"<b>Relative Win Probabilties vs. Match Length</b>",titlefont:{color:"#54d7c7",size:22},xaxis:{title:"Match Length (minutes)",color:"#FFFFFF"},yaxis:{title:"Relative Win Probability",color:"#FFFFFF"},paper_bgcolor:"#232222",plot_bgcolor:"#232222"}}),n.a.createElement("div",{className:"Plot-description"},"Number of games analyzed:  "+this.props.gamesAnalyzed));return n.a.createElement("div",{className:"times-plot"},e)}}]),a}(t.Component)),J=(l(192),"https://jennyxue.ngrok.io/"),K=function(e){function a(e){var l;return Object(c.a)(this,a),(l=Object(u.a)(this,Object(m.a)(a).call(this,e))).checkTeamsSelected=function(e){var a=[];""===l.state.friendlyTop&&a.push("friendlyTop"),""===l.state.friendlyJungle&&a.push("friendlyJungle"),""===l.state.friendlyMiddle&&a.push("friendlyMiddle"),""===l.state.friendlyAdc&&a.push("friendlyAdc"),""===l.state.friendlySupport&&a.push("friendlySupport"),""===l.state.enemyTop&&a.push("enemyTop"),""===l.state.enemyJungle&&a.push("enemyJungle"),""===l.state.enemyMiddle&&a.push("enemyMiddle"),""===l.state.enemyAdc&&a.push("enemyAdc"),""===l.state.enemySupport&&a.push("enemySupport"),a.splice(a.indexOf(e),1);var t=!(a.length>0);l.setState({teamsSelected:t})},l.handleChange=function(e){return function(a){var t;null!==a?(l.checkTeamsSelected(e),l.setState(Object(r.a)({},e,a.label))):l.setState((t={},Object(r.a)(t,e,""),Object(r.a)(t,"teamsSelected",!1),t))}},l.getWinTimes=function(){try{return v.a.post(J+"time",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},team:{TOP:l.state.friendlyTop,JUNGLE:l.state.friendlyJungle,MIDDLE:l.state.friendlyMiddle,DUO_CARRY:l.state.friendlyAdc,DUO_SUPPORT:l.state.friendlySupport},opponent:{TOP:l.state.enemyTop,JUNGLE:l.state.enemyJungle,MIDDLE:l.state.enemyMiddle,DUO_CARRY:l.state.enemyAdc,DUO_SUPPORT:l.state.enemySupport}})}catch(e){alert(e),console.error(e)}},l.handleCalculateWinTimeClick=function(){l.setState({showPicks:!1,timesLoading:!0}),l.getWinTimes().then(function(e){console.log(e),l.setState({winTimes:e.data.win_rates,timesLoading:!1,gamesAnalyzed:e.data.count})}).catch(function(e){l.setState({timesLoading:!1,winTimes:[],gamesAnalyzed:0}),alert(e),console.log(e)})},l.getSuggestedChampions=function(){try{return v.a.post(J,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},team:{TOP:l.state.friendlyTop,JUNGLE:l.state.friendlyJungle,MIDDLE:l.state.friendlyMiddle,DUO_CARRY:l.state.friendlyAdc,DUO_SUPPORT:l.state.friendlySupport},enemy:{TOP:l.state.enemyTop,JUNGLE:l.state.enemyJungle,MIDDLE:l.state.enemyMiddle,DUO_CARRY:l.state.enemyAdc,DUO_SUPPORT:l.state.enemySupport},num:10})}catch(e){alert(e),console.error(e)}},l.handleGenerateSelectionClick=function(){l.setState({showPicks:!0,recommendedPicks:[],picksLoading:!0}),l.getSuggestedChampions().then(function(e){console.log("Recommended Picks:  "+e),l.setState({recommendedPicks:e.data,picksLoading:!1})}).catch(function(e){l.setState({picksLoading:!1,recommendedPicks:[]}),alert(e),console.log(e)})},l.state={picksLoading:!1,timesLoading:!1,friendlyTop:"Aatrox",friendlyJungle:"Warwick",friendlyMiddle:"",friendlyAdc:"Ashe",friendlySupport:"Leona",enemyTop:"Jax",enemyJungle:"Udyr",enemyMiddle:"Galio",enemyAdc:"Ezreal",enemySupport:"Nami",recommendedPicks:[],winTimes:[],teamsSelected:!1,gamesAnalyzed:0,showPicks:!0},l}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.showPicks?n.a.createElement(w,{recommendedPicks:this.state.recommendedPicks,picksLoading:this.state.picksLoading}):n.a.createElement(R,{winTimes:this.state.winTimes,timesLoading:this.state.timesLoading,gamesAnalyzed:this.state.gamesAnalyzed});return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App-header"},n.a.createElement("div",{className:"Header-title"},"matchups.gg"),n.a.createElement("div",{className:"Header-stroke"})),n.a.createElement("div",{className:"App-body"},n.a.createElement("div",{className:"Select"},n.a.createElement("div",{className:"Select-bans"},"bans: under construction",n.a.createElement("div",{className:"Ban-list"},n.a.createElement("div",{className:"Ban-champ"}),n.a.createElement("div",{className:"Ban-champ"}),n.a.createElement("div",{className:"Ban-champ"}),n.a.createElement("div",{className:"Ban-champ"}),n.a.createElement("div",{className:"Ban-champ"}))),n.a.createElement("div",{className:"Teams"},n.a.createElement("div",{className:"Blue-team"},n.a.createElement("div",{className:"Blue-title"},"blue team"),n.a.createElement(b,{handleChange:this.handleChange,team:"friendly",top:this.state.friendlyTop,jungle:this.state.friendlyJungle,middle:this.state.friendlyMiddle,adc:this.state.friendlyAdc,support:this.state.friendlySupport})),n.a.createElement("div",{className:"Red-team"},n.a.createElement("div",{className:"Red-title"},"red team"),n.a.createElement(b,{handleChange:this.handleChange,team:"enemy",top:this.state.enemyTop,jungle:this.state.enemyJungle,middle:this.state.enemyMiddle,adc:this.state.enemyAdc,support:this.state.enemySupport}))),n.a.createElement("div",{className:"Submit"},n.a.createElement("button",{size:"medium",variant:"contained",color:"primary",onClick:this.handleGenerateSelectionClick,disabled:this.state.picksLoading||this.state.teamsSelected,className:"Submit-button"},"Get Suggestions"),n.a.createElement("button",{size:"medium",variant:"contained",color:"primary",onClick:this.handleCalculateWinTimeClick,disabled:!this.state.teamsSelected,className:"Submit-button"},"Plot Win Times"))),n.a.createElement("div",{className:"Results"},e)))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,a,l){e.exports=l(194)},76:function(e,a,l){},96:function(e,a,l){}},[[71,2,1]]]);
//# sourceMappingURL=main.f660ab73.chunk.js.map