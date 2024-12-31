// script.js
function submitForm() {
    const radios = document.querySelectorAll('input[type="radio"]');
    let totalScore = 0;
    let group1Score = 0; // For questions 2, 11
    let group2Score = 0; // For questions 1, 5, 8, 10
    let group3Score = 0; // For questions 7, 11, 13
    let group4Score = 0; // For questions 3, 6, 12, 14
    let group5Score = 0; // For questions 4, 9

    const group1Questions = [2, 11];
    const group2Questions = [1, 5, 8, 10];
    const group3Questions = [7, 11, 13];
    const group4Questions = [3, 6, 12, 14];
    const group5Questions = [4, 9];

    const numQuestions = radios.length / 5;

    for (let i = 0; i < numQuestions; i++) {
        let questionScore = 0;
        const radioName = `question${i + 1}`;
        const selectedRadio = document.querySelector(`input[name="${radioName}"]:checked`);
        if (selectedRadio) {
            questionScore = parseInt(selectedRadio.value);
            totalScore += questionScore;
            if (group1Questions.includes(i + 1)) {
                group1Score += questionScore;
            } else if (group2Questions.includes(i + 1)) {
                group2Score += questionScore;
            } else if (group3Questions.includes(i + 1)) {
                group3Score += questionScore;
            } else if (group4Questions.includes(i + 1)) {
                group4Score += questionScore;
            } else if (group5Questions.includes(i + 1)) {
                group5Score += questionScore;
            }
        }
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Your total score is: ${totalScore} <br>`;

    let comment = "";
    if (totalScore <= 34) {
        comment = "Thank you for completing the assessment. Based on your score, it means you are performing at a low level in terms of your approach to stress management. In the assessment we asked you about how you react to stress, how well you cope with stress, and the confidence you have in your ability to handle stressful events in your life.";
    } else if (totalScore <= 56) {
        comment = "Thank you for completing the assessment. Based on your score, it means you are performing at a medium level in terms of your approach to stress management. In the assessment we asked you about how you react to stress, how well you cope with stress, and the confidence you have in your ability to handle stressful events in your life.";
    } else if (totalScore <= 70) {
        comment = "Thank you for completing the assessment. Based on your score, it means you are performing at a high level in terms of your approach to stress management. In the assessment we asked you about how you react to stress, how well you cope with stress, and the confidence you have in your ability to handle stressful events in your life.";
    } else {
        comment = "Thank you! We are thrilled that you loved our product.";
    }

    resultsDiv.innerHTML += `<strong>${comment}</strong> <br><br>`;

    resultsDiv.innerHTML += "Identifing and understanding your stress will reduce your stress<br><br>";

    resultsDiv.innerHTML += `Total Group Score: ${group1Score + group2Score + group3Score + group4Score + group5Score} <br><br>`;

    
    let barChartHTML = "<div style='display: flex;'>";
    for (let i = 0; i < scores.length; i++) {
        barChartHTML += `<div class="bar ${colors[i]}" style="height: ${scores[i] * 10}px;">${scores[i]}</div>`;
    }
    barChartHTML += "</div>";

    resultsDiv.innerHTML += barChartHTML;

    resultsDiv.innerHTML += "<button onclick='window.print()'>Print</button>";
}

