//Copyright Alexander Jordan, 2018
//No license for use permitted.


//listen for copy event. Should only fire on copying text.
document.addEventListener('copy', function(e) {
		
		let highlight = window.getSelection();

		chrome.storage.sync.get(['zwspCheck'], (result) => {
			let zwsp = false;
			if(result.zwspCheck != 'undefined'){
				zwsp = result.zwspCheck;
			}
			//Do we have anything highlighted? Since we're hijacking copy, we need
			//to fetch what the user is attempting to copy.
			if(highlight !== null && highlight.type !== 'None'){
				
				highlight = highlight.toString().trim();
				if (zwsp){
					highlight = highlight.replace(/[\u200B-\u200D\uFEFF]/g,"");
				}
				//console.log(highlight);
				//write on modified string to the clipboard.
				navigator.clipboard.writeText(highlight);
				
				//console.log(navigator.clipboard.readText());
			
				//prevent the default copy action from overwriting our changes
				e.preventDefault();
			}
		})	
});


