let update_scores = document.getElementsByClassName('btn btn-primary update-scores');
document.querySelector(".question_input").addEventListener('change', (event) => {
    update_scores.click();
    console.log("Scores updated");
});
