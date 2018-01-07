function initMap(){


var styles = [
{
	stylers: [
	{hue: '#00ffe6' },
	{ saturation: -20 }
]
	}, {

	featureType: 'road',
	elementType: 'geometry'
	stylers: [
	{lightness: 100},
	{ visibility: 'simplified'}
	]
}, {
	featureType: 'road',
	elementType: 'labels',
	stylers: [
	{ visbility: 'off'}
	]
}

];



	var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 0,
    zoomControl: false,
    fullscreenControl: true,
    styles: styles
 });

var marker = new google.maps.Marker({
	position: {lat: 36.965787, lng: -122.016346},
	map: map

});


}


