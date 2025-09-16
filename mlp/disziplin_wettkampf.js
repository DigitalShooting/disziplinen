var scheibe = require("./scheibe.js");

module.exports = {
	_id: "mlp_schnellfeuer_wettkampf",
	title: "Wettkampf",
	interface: {
		name: "esa",
		band: {
			onChangePart: 5,
			onShot: 3,  //Was macht dieser Index?
		},
	},
	time: {
		enabled: true,
		duration: 0, //Keine Dauer da zusätzlich sowieso eine Ampel genutzt werden muss.
		instantStart: false,
	},
	scheibe: scheibe,
	partsOrder: ["probe", "match"],
	parts: {
		probe: {
			title: "Probe",
			probeEcke: true,
			mainPart: false,
			neueScheibe: false,
			serienLength: 5, //Üblich für MLP
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
				anzahl: 20, //Übliches Wettkampfprogramm im Schnellfeuerteil
			},
			exitType: "",
		},
		match: {
			title: "Match",
			probeEcke: false,
			mainPart: true,
			neueScheibe: false,
			serienLength: 5, //Standard MLP
			anzahlShots: 20, //Standard MLP
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
			exitType: "beforeFirst",
		},
	},
};
