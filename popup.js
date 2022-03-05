document.addEventListener('DOMContentLoaded', documentLoaded);

function documentLoaded() {
    
    let checkbox = document.getElementById('trim-nonprinting');

    //load values from storage and enforce.
    chrome.storage.sync.get(['zwspCheck'], (result) => {
        if(result.zwspCheck != 'undefined'){
            checkbox.checked = result.zwspCheck;
        }
    });
    //change value in storage on change in checkbox state
    checkbox.addEventListener('change', (event) =>{
        if (event.currentTarget.checked){
            chrome.storage.sync.set({zwspCheck:true});
        }else{
            chrome.storage.sync.set({zwspCheck:false});
        }
    });
}