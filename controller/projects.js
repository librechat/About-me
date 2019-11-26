const projects = [
	{
		name: {
			en: "Gerritory",
			zhtw: "Gerritory 給地偷地",
		},
		intro: {
			en: "Gerritory is an indie multi-player party game I made with three of my friends using Unity3D.",
			zhtw: "給地偷地是我和我的三位朋友共同製作的一款多人派對遊戲。",
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
			en: "Investigate cybersickness reduction with different style of peripheral blur of the image.",
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
			en: "An Unity3D editor tool converts game datas between ScriptableObject, Excel, and Json. Easy to orgnanize game data in different data editors.",
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