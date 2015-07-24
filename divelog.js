myFunction(myArray);

function myFunction(arr) {
	
	var out = '<table class="striped responsive-table"><thead><tr><th>Nr.</th><th>Locatie</th><th>Datum</th><th>Tijd instap</th><th>Duiktijd</th><th>Diepte</th><th>Buddy&#39;s</th><th>Opm</th></tr></thead>';
	var i;

	for(i = arr.length-1; i >= 0; i--) {
		j = i+1;
		out += "<tr><td>" +
		j +
		"</td><td>" +
		arr[i].place +
		"</td><td>" +
		arr[i].datum +
		"</td><td>" +
		arr[i].timeIn +
		"</td><td>" +
		arr[i].time +
		"</td><td>" +
		arr[i].depth +
		"</td><td>" +
		arr[i].buddys +
		"</td><td>" +
		arr[i].info +
		"</td></tr>";
	}
	out += "</table>";
	document.getElementById("lines").innerHTML = out;
}