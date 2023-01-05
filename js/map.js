var map = L.map('map',{scrollWheelZoom: false}).setView([-7.2754417,112.6302828],10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let rs = [["-7.2754417","112.6302828","RS Sbyyyyyyyyyyyyy",""],
["-7.0417772", "112.7289972","RS Bkl","https://www.google.com/maps/place/Hospital+Syarifah+Ambami+Rato+Ebu/@-7.0295905,112.7568064,17z/data=!4m12!1m6!3m5!1s0x2dd8057864d77839:0x73bf4e3ede9828a4!2sHospital+Syarifah+Ambami+Rato+Ebu!8m2!3d-7.0295958!4d112.7593813!3m4!1s0x2dd8057864d77839:0x73bf4e3ede9828a4!8m2!3d-7.0295958!4d112.7593813"],["-7.2096436","112.7335234","RS PHC","https://www.google.com/maps/place/PHC+Surabaya+Hospital/@-7.2096436,112.7335234,17z/data=!4m5!3m4!1s0x2dd7f8c0fc17b42b:0x85595a043d698089!8m2!3d-7.2096489!4d112.7360983"]];

for (let index = 0; index < rs.length; index++) {
    marker = new L.marker([rs[index][0], rs[index][1]])
    .addTo(map)
    .bindPopup(rs[index][2],{closeOnClick:false, autoClose:false}).openPopup();

    // onMapClick(rs[index][3]);
}

function onMapClick(e) {
    var win = window.open(e, "_blank");
}

map.on('click', onMapClick);