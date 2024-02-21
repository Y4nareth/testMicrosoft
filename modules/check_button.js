/**
 * Script: check_button.js
 * Author: Andres Calandin Vega
 * 
 * Description:
 * Provides functions to create and manage a checkbox button
 * question with multiple correct answer to the main script.
 * 
 * Question JSON structure:
 * {
        "type":2,
        "question": "Choose the correct",
        "answers": [
            { "text": "I am the fourth", "correct":false},
            { "text": "I am the second", "correct":true},
            { "text": "I am the third", "correct":tru},
            { "text": "I am the first", "correct":false}
        ]
    }
 * 
 * Question HTML structure:
 * <div class="control" id="control">
        <label class="btn">
            <input required type="checkbox" class="radio-dot" name="group1" value="1">
            <span class="radio-label-text">Opción 1</span>
        </label>
        <label class="btn">
            <input required type="checkbox" class="radio-dot" name="group2" value="2">
            <span class="radio-label-text">Opción 2</span>
        </label>
        <label class="btn">
            <input required type="checkbox" class="radio-dot" name="group3" value="3">
            <span class="radio-label-text">Opción 3</span>
        </label>
        <label class="btn">
            <input required type="checkbox" class="radio-dot" name="group4" value="5">
            <span class="radio-label-text">Opción 4</span>
        </label>
    </div>
 *
*/

/**
 * Adds HTML labels containing an input element checkboxes to the control element.
* @param {Array} options The options array with the text label and correct.
 * @param {HTMLDivElement} parent The parent element in the HTML file.
 */
export function createCheckbox(options,parent){
    var idx = 0;
    options.forEach(option => {
        var labelText = option.text;
        var correct = option.correct;

        // Create label element
        var label = document.createElement("label");
        label.classList.add("btn");
        
        // Create input element
        var input = document.createElement("input");
        input.setAttribute("required", "");
        input.classList.add("radio-dot");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", "group");
        input.setAttribute("value", idx);
        input.dataset.correct = correct;
        
        // Create span element for label text
        var span = document.createElement("span");
        span.classList.add("radio-label-text");
        span.textContent = labelText;
        
        // Append input and span elements to label
        label.appendChild(input);
        label.appendChild(span);

        // Append label to the parent
        parent.appendChild(label);

        idx++;
    });
}

/**
 * Validates the users selection and updates the score.
 * 
 * @param {Int8Array} score Score of the user. 
 */
export function validateAnswer(score){
    var next_button = document.getElementById("next-btn");
    var val_button = document.getElementById("validate-btn");
    var control = document.getElementById("control");

    // Changes visibiliry of the next button
    next_button.style.display = "inline";

    // Get the value of the selected radio button
    var selectedOption = document.querySelectorAll('input[name="group"]:checked');

    // Get the answer options
    var answers = control.children;

    // Check if an option is selected. If the answer is correct changes
    // the color two green. Else, red.
    selectedOption.forEach(option => {
        var value = option.value;
        var correct = option.dataset.correct;
        if(correct === "true"){
            answers[value].classList.add("correct");
            score++;
        }else{
            answers[value].classList.add("incorrect");
        }
    });

    val_button.disabled = true;
}