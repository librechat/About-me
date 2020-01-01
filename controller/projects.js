const projects = [
	{
		name: {
			en: "Gerritory",
			zhtw: "Gerritory 給地偷地",
		},
		intro: {
			en: "Gerritory is an indie multiplayer party game I made with three of my friends using Unity3D, which has won Best Design Price in Taipei Game Show IGA 2019. We plan to release it in 2020.",
			zhtw: "給地偷地是我和我的三位朋友共同製作的一款多人派對遊戲，曾於 2019 台北電玩展獲得最佳遊戲設計獎。預計於 2020 釋出。",
		},
		account: {
			en: "Game Programmer, Game Art Designer",
			zhtw: "遊戲程式、遊戲美術",
		},
		date: "Jan 2017 - Present",
		link: {
			github: "",
			website: "https://partygoosestudio.wixsite.com/gerritorythegame"
		},
		media: {
			img: "GerritoryAirRaid.png",
			gif: "GerritoryAirRaid.gif",
			video: "https://www.youtube.com/watch?v=wZ_4xxnEhlU"
		}	
	},
	{
		name: {
			en: "Effects of Peripheral Blur on Cybersickness in Immersive Virtual Environments",
			zhtw: "視野周圍模糊對虛擬實境暈眩的影響",
		},
		intro: {
			en: "Investigate cybersickness reduction with different styles of peripheral blur of the image.",
			zhtw: "研究視野周圍模糊的大小與位置是否會影響減輕 VR 暈眩的效果。",
		},
		account: {
			en: "Master Thesis",
			zhtw: "碩士論文",
		},
		date: "May 2018 - Nov 2019",
		link: {
			github: "https://github.com/librechat/ExperimentProject-PeripheralBlurVR",
			website: ""
		},
		media: {
			img: "Blur.png",
			gif: "Blur.gif",
			video: ""
		}	
	},
	{
		name: {
			en: "Game Data Converter",
			zhtw: "遊戲資料轉換工具",
		},
		intro: {
			en: "An Unity3D editor tool converts game data between ScriptableObject, Excel, and JSON. Easy to organize game data in different data editors.",
			zhtw: "將 ScriptableObject 格式的遊戲資料和 Excel 與 Json 格式互相轉換的 Unity3D 編輯器工具。",
		},
		account: {
			en: "",
			zhtw: "",
		},
		date: "Nov 2019",
		link: {
			github: "https://github.com/librechat/GameDataConverter",
			website: ""
		},
		media: {
			img: "GameDataConverter.png",
			gif: "GameDataConverter.gif",
			video: ""
		}
	},
	{
		name: {
			en: "A3! Calculator",
			zhtw: "A3! 組隊計算機",
		},
		intro: {
			en: "A front-end team-up system of mobile card game A3! (Traditional Chinese), which forms a player’s cards into a team with maximum batle value automatically. Implemented with Vue.js and AngularJS.",
			zhtw: "前端練習：手機遊戲 A3! 的卡牌自動組隊推薦工具，使用 Vue.js 和 AngularJS。",
		},
		account: {
			en: "",
			zhtw: "",
		},
		date: "Sep 2018 - Present",
		link: {
			github: "https://github.com/librechat/a3-calculator",
			website: "https://librechat.github.io/a3-calculator/view/index.html"
		},
		media: {
			img: "A3.png",
			gif: "A3.gif",
			video: ""
		}
	},
	{
		name: {
			en: "Magic Monopoly (WIP)",
			zhtw: "Magic Monopoly (製作中)",
		},
		intro: {
			en: "A monopoly-like game. Players can build magic circles on their territory to attack the other players who stepped on the circle. Players should kill each other to win.",
			zhtw: "類大富翁機制的遊戲。玩家可在領地建設魔法陣，踩到魔法陣的玩家會損失血量，遊戲目標是盡可能殺死其他玩家。",
		},
		account: {
			en: "",
			zhtw: "",
		},
		date: "Nov 2019",
		link: {
			github: "https://github.com/librechat/MagicMonopoly",
			website: ""
		},
		media: {
			img: "MagicMonopoly.png",
			gif: "MagicMonopoly.gif",
			video: ""
		}
	}
];
const GetProjByLang = function(langkey){
	return projects.map(function(project){
		return {
			name: project.name[langkey],
			intro: project.intro[langkey],
			account: project.account[langkey],
			date: project.date,
			link: project.link,
			media: project.media
		};
	});
}

module.exports = {
	GetProjByLang: GetProjByLang
};