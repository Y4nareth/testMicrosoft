/**
 * Script: yesno_buttons.js
 * Author: Andres Calandin Vega
 * 
 * Description:
 * Provides functions to create and manage a radio button question
 * with yes/no answers to the main script.
 * 
 * Question JSON structure:
 * {
    "type": 1,
    "question": "Elije la verdadera",
    "answers": [
        { "text": "I am the fourth", "correct":false},
        { "text": "I am the second", "correct":true},
        { "text": "I am the third", "correct":false},
        { "text": "I am the first", "correct":false}
        ]
    }
 * 
 * Question HTML structure:
 * <div class="control" id="control">
        <table>
            <tr class="btn">
                <th>
                    <span class="radio-label-text">Sentence</span>
                </th>
                <th>
                    <span class="options-label-text">Yes</span>
                </th>
                <th>
                    <span class="options-label-text">No</span>
                </th>
            </tr>
            <tr class="btn">
                <th>
                    <span class="radio-label-text">Opción 1</span>
                </th>
                <th>
                    <input required type="radio" class="radio-dot-yesno" name="group1" value="1">
                <th>
                    <input required type="radio" class="radio-dot-yesno" name="group1" value="2">
                </th>
            </tr>
            <tr class="btn">
                <th>
                    <span class="radio-label-text">Opción 2</span>
                </th>
                <th>
                    <input required type="radio" class="radio-dot-yesno" name="group2" value="1">
                </th>
                <th>
                    <input required type="radio" class="radio-dot-yesno" name="group2" value="2">
                </th>
            </tr>
            <tr class="btn">
                <th>
                    <span class="radio-label-text">Opción 3</span>
                </th>
                <th>
                    <input required type="radio" class="radio-dot-yesno" name="group3" value="1">
                </th>
                <th>
                    <input required type="radio" class="radio-dot-yesno" name="group3" value="2">
                </th>
            </tr>
            <tr class="btn">
                <th>
                    <span class="radio-label-text">Opción 4</span>
                </th>
                <th>
                    <input required type="radio" class="radio-dot-yesno" name="group4" value="1">
                </th>
                <th>
                    <input required type="radio" class="radio-dot-yesno" name="group4" value="2">
                </th>
            </tr>A
        </table>
    </div>
* 
*/

/**
 * Returns HTML table as the following:
 * 
 * Sentence column title | Yes title | No title
 * ---------------------------------------------
 *             Sentence1 | radioYes1 | radioNo1
 * ---------------------------------------------
 *             Sentence2 | radioYes2 | radioNo2
 * ---------------------------------------------
 *             . . .     |   . . .   |  . . . 
 * ---------------------------------------------
 *             SentenceN | radioYesN | radioNoN
 * ---------------------------------------------
 * 
 * @param {*} options 
 * @param {*} parent 
 */
export function createYesNo(options, parent){
    var table = document.createElement('table');

    var headerRow = table.insertRow();
    headerRow.classList.add('btn');
    var headerCell = headerRow.insertCell(0);
    var headerSentence = document.createElement('span');
    headerCell.appendChild(headerSentence);
    headerSentence.classList.add('radio-label-text');
    headerSentence.textContent = 'Sentece';
    
    var optionYesCell = headerRow.insertCell(1);
    var headerYes = document.createElement('span');
    optionYesCell.appendChild(headerYes);
    headerYes.classList.add('options-label-text');
    headerYes.textContent = 'Yes';

    var optionNoCell = headerRow.insertCell(2);
    var headerNo = document.createElement('span');
    optionNoCell.appendChild(headerNo);
    headerNo.classList.add('options-label-text');
    headerNo.textContent = 'No';

    let idx = 0;
    options.forEach(option => {
        var row = table.insertRow();
        row.dataset.correct = option.correct;
        row.classList.add('btn');

        var sentenceCell = row.insertCell(0);
        var sentence = document.createElement('span');
        sentenceCell.appendChild(sentence);
        sentence.classList.add('radio-label-text');
        sentence.textContent = option.text;

        var yesCell = row.insertCell(1);
        var yesButton = document.createElement('input');
        yesCell.appendChild(yesButton);
        yesButton.setAttribute("required", "");
        yesButton.classList.add("radio-dot-yesno");
        yesButton.setAttribute("type", "radio");
        yesButton.setAttribute("name", `group${idx}`);
        yesButton.setAttribute("value", 1);

        var noCell = row.insertCell(2);
        var noButton = document.createElement('input');
        noCell.appendChild(noButton);
        noButton.setAttribute("required", "");
        noButton.classList.add("radio-dot-yesno");
        noButton.setAttribute("type", "radio");
        noButton.setAttribute("name", `group${idx}`);
        noButton.setAttribute("value", 2);

        idx++;
    });

    parent.appendChild(table);
}

/**
 * Validates the users selection and updates the score.
 * @param {*} score Score of the user.
 */
export function validateAnswer(score){

    var next_button = document.getElementById("next-btn");
    var val_button = document.getElementById("validate-btn");
    var control = document.getElementById("control");

    // Get the value of the selected radio button
    var selectedOption = document.querySelectorAll('input:checked');

    //                     table      tbody       rows
    var answers = control.children[0].children[0].children;
        
    // Check if an option is selected
    if (selectedOption.length === (answers.length-1)) {

        for(var i=0;i<selectedOption.length;i++){
            var selected = selectedOption[i].value;
            var correctAnswer = answers[i+1].dataset.correct;
            let correct = false;
            if(correctAnswer === "true"){
                if(selected === "1"){
                    correct = true;
                    score++;
                }
            }else{
                if (selected === "2"){
                    correct = true;
                    score++;
                }
            }
            if(correct){
                answers[i+1].classList.add("correct");
            }else{
                answers[i+1].classList.add("incorrect");
            }
        }
        next_button.style.display = "inline";
    } else {
        alert("Por favor seleccione una opción"); // No option selected
    }

    val_button.disabled = true;
}