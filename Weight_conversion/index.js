function convert() {
	value = parseInt(document.getElementById("input").value);
	var conversion = document.getElementById("convert");
	if(conversion.value == "kgtopounds") {
		value *= 2.20462262;
	} else {
		value *= 0.45359237;
	}
	document.getElementById("answer").innerHTML = value;
}