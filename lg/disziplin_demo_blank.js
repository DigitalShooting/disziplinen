var scheibe = require("./scheibe_blank.js");

module.exports = {
	_id: "lg_demo_blank",
	title: "LG Demo Blank",
	interface: {
		name: "demo",
		time: 1000,
		limit: 40,
	},
	time: { enabled: false, duration: 0, instantStart: false },
	scheibe: scheibe,
	partsOrder: ["probe"],
	parts: {
		probe: {
			title: "Probe",
			probeEcke: false,
			mainPart: true,
			neueScheibe: true,
			serienLength: 50,
			anzahlShots: 0,
			showInfos: false,
			zehntel: false,
			time: {
				enabled: false,
				duration: 0,
				instantStart: false,
			},
			average: {
				enabled: false,
				anzahl: 0,
			},
			exitType: "",
		},
	},
};
