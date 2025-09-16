var zoom = require("./zoom.js");

module.exports = {
	title: "Schnellfeuer 10m",
	ringe: [
		{ value: 10, width:  22.0, color: "black", text: false, textColor: "white", zoomScale: 4, zoom: zoom.z4, hitColor: "red" },
		{ value:  9, width:  48.5, color: "black", text: true,  textColor: "white", zoomScale: 3, zoom: zoom.z4, hitColor: "green" },
		{ value:  8, width:  75.0, color: "black", text: true,  textColor: "white", zoomScale: 2.7, zoom: zoom.z3, hitColor: "yellow" },
		{ value:  7, width:  101.5, color: "black", text: true,  textColor: "white", zoomScale: 2, zoom: zoom.z3, hitColor: "#00bffF" },
		{ value:  6, width:  128.0, color: "black", text: true,  textColor: "white", zoomScale: 1.5, zoom: zoom.z2, hitColor: "#00bffF" },
		{ value:  5, width:  154.5, color: "black", text: true,  textColor: "white", zoomScale: 1.25, zoom: zoom.z2, hitColor: "#00bffF" },
		{ value:  4, width: 181.0, color: "white", text: true,  textColor: "black", zoomScale: 1, zoom: zoom.z1, hitColor: "#00bffF" }, // Ab hier ist Spiegel weiß und eigentlich nicht mehr vorhanden
		{ value:  3, width: 207.5, color: "white", text: true,  textColor: "black", zoomScale: 1, zoom: zoom.z1, hitColor: "#00bffF" },
		{ value:  2, width: 234.0, color: "white", text: true,  textColor: "black", zoomScale: 1, zoom: zoom.z1, hitColor: "#00bffF" },
		{ value:  1, width: 260.5, color: "white", text: true,  textColor: "black", zoomScale: 1, zoom: zoom.z1, hitColor: "#00bffF" },
	],
	ringeDrawOnly: [
		{ width:  11.0, color: "black", textColor: "white" },
	],
	rechteckDrawOnly: [],
	defaultHitColor: "#000000",
	defaultZoom: zoom.z1,
	minZoom: zoom.z0,
	innenZehner: 475, //Was ist dies für ein Wert?
	probeEcke: { color: "#0f0", alpha: 0.7 },
	text: { size: 3.0, width: 0.9, up: 4.8, down: -2.6, left: 2.6, right: -4.8 },
	kugelDurchmesser: 4.5,
	interface: {
		reddot: {
			targetMode: "0",
		},
	},
};
