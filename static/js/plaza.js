var map = L.map('map', {
    crs: L.CRS.Simple
});

var bounds = [[-26.5,-25], [1021.5,1023]];
var image = L.imageOverlay('static/lib/images/plaza.jpg', bounds).addTo(map);

map.fitBounds(bounds);

var vidIcon = L.icon({
    iconUrl: 'static/lib/images/vid3.png'
});

L.marker([400, 708], {
  icon: vidIcon
}).addTo(map).bindLabel('Vietnam Memorial').bindPopup("<img src='static/lib/images/bovaNam.gif' alt='bovaNam' height='300' width='400'>");

L.marker([625, 730], {
  icon: vidIcon
}).addTo(map).bindLabel("stairs").bindPopup("<img src='static/lib/images/bova.gif' alt='bovaNam' height='300' width='400'>");

L.marker([650, 790], {
  icon: vidIcon
}).addTo(map).bindLabel("RIP rail").bindPopup("<img src='static/lib/images/danny.gif' alt='bovaNam' height='300' width='400'>");

L.marker([430, 450], {
  icon: vidIcon
}).addTo(map).bindLabel("grate-gap").bindPopup("<img src='static/lib/images/trev.gif' alt='bovaNam' height='300' width='400'>");

L.marker([469,190], {
  icon: vidIcon
}).addTo(map).bindLabel("Museum").bindPopup("<img src='static/lib/images/jj.gif' alt='bovaNam' height='300' width='400'>");

L.marker([370,890], {
  icon: vidIcon
}).addTo(map).bindLabel('Horses Balls').bindPopup("<img src='static/lib/images/rt.gif' alt='bovaNam' height='300' width='400'>");

L.marker([420,490], {
  icon: vidIcon
}).addTo(map).bindLabel('Wall Ride').bindPopup("<img src='static/lib/images/cut.gif' alt='bovaNam' height='300' width='400'>");

L.marker([900,890], {
  icon: vidIcon
}).addTo(map).bindLabel('Horses Balls').bindPopup("<img src='static/lib/images/evan.gif' alt='bovaNam' height='300' width='400'>");

L.marker([370,790], {
  icon: vidIcon
}).addTo(map).bindLabel('Vietnam Entrance').bindPopup("<img src='static/lib/images/todd.gif' alt='bovaNam' height='300' width='400'>");
