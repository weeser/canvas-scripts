
function update_scores (e){
    document.getElementsByClassName('btn btn-primary update-scores').click();
    console.log("Scores updated");
}

// Select the node that will be observed for mutations
const target = document.getElementsByTagName('body')[0];

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
    let questions = document.querySelectorAll(".question_input");
    for (var i = 0; i < questions.length; i++){
        if (element.getAttribute('listener') !== 'true') {
            document.querySelector(".question_input").addEventListener('change', update_scores);
        }
    }
    
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(target, config);
