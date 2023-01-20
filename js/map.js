var map = L.map('map',{scrollWheelZoom: false}).setView([-7.2754438,112.6426438],11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let rs = [["-7.2754417","112.6302828","RS Sby",""],
["-7.0417772", "112.7289972","RS Bkl",""],["-7.2096436","112.7335234","RS PHC",""]];

for (let index = 0; index < rs.length; index++) {
    marker = new L.marker([rs[index][0], rs[index][1]])
    .addTo(map)
    .bindPopup(rs[index][2],{closeOnClick:false, autoClose:false}).openPopup();

    // onMapClick(rs[index][3]);
}

function onMapClick(e) {
    var win = window.open(e, "_blank");
}

map.on('click');