function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 12.971599, lng: 77.594566};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Bangalore,India' // Title Location
    });
}