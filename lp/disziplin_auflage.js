var scheibe = require("./scheibe.js");

module.exports = {
	_id: "lp_auflage",
	title: "Auflage",
	interface: {
		name: "esa",
		band: {
			onChangePart: 5,
			onShot: 3,
		},
	},
	time: {
		enabled: false,
		duration: 0,
		instantStart: false,
	},
	scheibe: scheibe,
	parts: {
		probe: {
			title: "Probe",
			probeEcke: true,
			mainPart: false,
			neueScheibe: true,
			serienLength: 10,
			anzahlShots: 0,
			showInfos: true,
			zehntel: true,
			time: {
				enabled: false,
				duration: 0,
				instantStart: false,
			},
			average: {
				enabled: true,
				anzahl: 30,
			},
			exitType: "",
		},
		match: {
			title: "Match",
			probeEcke: false,
			mainPart: true,
			neueScheibe: false,
			serienLength: 10,
			anzahlShots: 30,
			showInfos: true,
			zehntel: true,
			time: {
				enabled: false,
				duration: 0,
				instantStart: false,
			},
			average: {
				enabled: true,
				anzahl: 30,
			},
			exitType: "beforeFirst",
		},
	},
};
