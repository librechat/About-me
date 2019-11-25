const name = {
	en: "Yun-Xuan Lin",
	zhtw: "林 芸萱"
};
const intro = {
	en: "Game Development, Virtual Reality, HCI Research",
	zhtw: "Game Development, Virtual Reality, HCI Research"
};
const education = [
	{
		name: {
			en: "National Chiao Tung University",
			zhtw: "國立交通大學"
		},
		degree: {
			en: "Master in Computer Science",
			zhtw: "碩士"
		},
		date: "Aug 2017 - Oct 2019"
	},
	{
		name: {
			en: "National Chiao Tung University",
			zhtw: "國立交通大學"
		},
		degree: {
			en: "Bachelor of Engineering in Computer Science",
			zhtw: "學士"
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
		zhtw: "實習生"
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