const link = {
	github: {
		address: "https://github.com/librechat",
		icon: ""
	},
	email: {
		address: "mailto: librechat2514@gmail.com",
		icon: ""
	},
	linkedin: {
		address: "https://www.linkedin.com/in/yun-xuan-lin-67036518a/",
		icon: ""
	}
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
	programming: {
		en: "Programming Skills",
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
const GetHeadersByLang = function(langkey){
	var obj = Object.fromEntries(Object.entries(headers).map(function([key, value]){
		return [key, value[langkey]];
	}));
	return obj;
}

module.exports = {
	link: link,
	language: language,
	GetHeadersByLang: GetHeadersByLang
};