const name = {
	en: "Yun-Xuan Lin",
	zhtw: "林 芸萱"
};
const intro = {
	en: "Game Development, Virtual Reality, HCI Research",
	zhtw: "遊戲開發、虛擬實境、HCI研究"
};
const education = [
	{
		name: {
			en: "National Chiao Tung University",
			zhtw: "國立交通大學"
		},
		degree: {
			en: "Master in Computer Science",
			zhtw: "碩士 / 多媒體工程研究所"
		},
		account: {
			en: "Teacher Assistant of Comuter Graphics",
			zhtw: "計算機圖學助教",
			date: "Sep 2017 - Jan 2018"
		},
		date: "Aug 2017 - Oct 2019"
	},
	{
		name: {
			en: "National Chiao Tung University",
			zhtw: "國立交通大學"
		},
		degree: {
			en: "B.S in Computer Science",
			zhtw: "學士 / 資訊工程學系"
		},
		account: {
			en: "Director of NCTU Game Design Club",
			zhtw: "電腦遊戲設計社 社長",
			date: "July 2014 - June 2015"
		},
		date: "Aug 2013 - July 2017"
	}
];
const experience = {
	name: {
		en: "Cherri Tech, Inc.",
		zhtw: "喬睿科技"
	},
	account: {
		en: "Intern of Web Development",
		zhtw: "實習生 / Web 開發"
	},
	date: "Sep 2015 - Sep 2016"
};
const programming = ["C#", "JavaScript", "HTML", "C++"];
const tools = ["Unity3D", "Git", "Vue.js", "Node.js"];
const language = {
	en: ["Mandarin", "English"],
	zhtw: ["中文", "英文"]
};
const GetInfoByLang = function(langkey){

	var edu = education.map(function(edu){
		return {
			name: edu.name[langkey],
			degree: edu.degree[langkey],
			account: {
				name: edu.account[langkey],
				date: edu.account.date
			},
			date: edu.date
		};
	});
	var exp = {
		name: experience.name[langkey],
		account: experience.account[langkey],
		date: experience.date,
	};

	return {
		name: name[langkey],
		intro: intro[langkey],
		education: edu,
		experience: exp,
		programming: programming,
		tools: tools,
		language: language[langkey]
	}
}


module.exports = {
	GetInfoByLang: GetInfoByLang
};