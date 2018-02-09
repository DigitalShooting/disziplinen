var scheibe = require("./scheibe_gauKoenig.js");

module.exports = {
	_id: "lp_gauKoenig",
	title: "Gaukönigsschießen",
	interface: {
		// name: "esa",
		// band: {
		// 	onChangePart: 5,
		// 	onShot: 2,
		// },
		name: "demo",
		time: 2500,
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
			zehntel: false,
			time: {
				enabled: false,
				duration: 0,
				instantStart: false,
			},
			average: {
				enabled: true,
				anzahl: 20,
			},
			exitType: "",
		},
		match: {
			title: "König",
			probeEcke: false,
			mainPart: true,
			neueScheibe: false,
			serienLength: 10,
			anzahlShots: 20,
			showInfos: true,
			showDetails: false,
			zehntel: false,
			time: {
				enabled: false,
				duration: 0,
				instantStart: false,
			},
			average: {
				enabled: false,
				anzahl: 40,
			},
			exitType: "beforeFirst",
		},
	},
};
