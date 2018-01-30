/* http://jennamolby.com/how-to-display-dynamic-content-on-a-page-using-url-parameters
*/
<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
<script type="text/javascript">
	// Parse the URL parameter
	function getParameterByName(name, url) {
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	// Give the parameter a variable name
	var dynamicContent = getParameterByName('page');
 
	 $(document).ready(function() {
 
		// Check if the URL parameter is work
		if (dynamicContent == 'work') {
			$('.navbar').show();
		} 
		// Check if the URL parameter is play
		else if (dynamicContent == 'play') {
			$('.navbar').show();
		} 
		// Check if the URL parmeter is empty or not defined, display default content
		else {
			$('.navbar').show();
		}
	});
</script>