var clicks = 0;
function myFunction() {
    clicks++;
    document.getElementById("clicks").innerHTML = clicks;
}

async function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 34.0699, lng: -118.4501}
    })
    
    const marker = new google.maps.Marker({
        position: {lat: 34.0699, lng: -118.4501},
        map: map
    })
}