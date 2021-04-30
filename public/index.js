

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.270558 , lng: -73.721458 },
    zoom: 16,
  });



  var myLatLng = [
    {lat: 41.270558 ,lng: -73.721458 },{lat: 41.272778,lng: -73.715813 }
  ]
  var type = "Largemouth Bass";

  for(var i = 0; i < myLatLng.length; i++){
  new google.maps.Marker({
    position: myLatLng[i],
    map,
    title: type,
  });
}

}
