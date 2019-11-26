const link = {
	github: "https://github.com/librechat",
	email: "mailto: librechat2514@gmail.com",
	linkedin: "https://www.linkedin.com/in/yun-xuan-lin-67036518a/"
};
const language = {
	en: {
		key: 'en',
		name: 'English'
	},
	zhtw: {
		key: 'zhtw',
		name: '繁體中文'
	}
};
const headers = {
	education: {
		en: "Education",
		zhtw: "學歷"
	},
	experience: {
		en: "Experience",
		zhtw: "經歷"
	},
	skills: {
		en: "Skills",
		zhtw: "相關技能"
	},
	programming: {
		en: "Programming",
		zhtw: "程式語言"
	},
	tools: {
		en: "Tools and Frameworks",
		zhtw: "工具"
	},
	language: {
		en: "Languages",
		zhtw: "語言"
	}
};
const intro = {
	recent: {
		en: "Recently working on ",
		zhtw: "近期參與："
	},
	projects: {
		en: "These are my projects lately.",
		zhtw: "近期專案"
	}
};
const getFromObjByLang = function(langkey, object){
	var obj = Object.fromEntries(Object.entries(object).map(function([key, value]){
		return [key, value[langkey]];
	}));
	return obj;
}
const GetHeadersByLang = function(langkey){
	return getFromObjByLang(langkey, headers);
}
const GetIntroByLang = function(langkey){
	return getFromObjByLang(langkey, intro);
}



module.exports = {
	link: link,
	language: language,
	GetHeadersByLang: GetHeadersByLang,
	GetIntroByLang: GetIntroByLang
};