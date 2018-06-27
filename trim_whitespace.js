//Copyright Alexander Jordan, 2018
//No license for use permitted.

//This script attaches to the copy event, and trims whitespace.
//We should really check if the document is loaded first, but this will work

//listen for copy event
document.addEventListener('copy', function(e) {
		
		//Do we have anything highlighted? Since we're hijacking copy, we need
		//to fetch what the user is attempting to copy.
		if(window.getSelection){
			
			//Fetch the highlighted text, enforce type, and trim.
			var highlight = window.getSelection().toString().trim();
		
			//write on modified string to the clipboard.
			e.clipboardData.setData('text', highlight);

			//console.log(e.clipboardData.getData('text'));
		
			//prevent the default copy action from overwriting our changes
			e.preventDefault();
		}
	
});


