var scheibe = require("./scheibe.js");

module.exports = {
	_id: "lg_training",
	title: "Training",
	interface: {
		name: "esa",
		band: {
			onChangePart: 5,
			onShot: 2,
		},
	},
	time: {
		enabled: false,
		duration: 0,
		instantStart: false,
	},
	scheibe: scheibe,
	partsOrder: ["probe", "match"],
	parts: {
		probe: {
			title: "Probe",
			probeEcke: true,
			mainPart: false,
			neueScheibe: true,
			serienLength: 10,
			anzahlShots: 0,
			showInfos: true,
			zehntel: false,
			time: {
				enabled: false,
				duration: 0,
				instantStart: false,
			},
			average: {
				enabled: true,
				anzahl: 40,
			},
			exitType: "",
		},
		match: {
			title: "Match",
			probeEcke: false,
			mainPart: true,
			neueScheibe: true,
			serienLength: 10,
			anzahlShots: 0,
			showInfos: true,
			zehntel: false,
			time: {
				enabled: false,
				duration: 0,
				instantStart: false,
			},
			average: {
				enabled: true,
				anzahl: 40,
			},
			exitType: "",
		},
	},
};
