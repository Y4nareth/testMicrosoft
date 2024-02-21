/**
 * Script: dropdown.js
 * Author: Andres Calandin Vega
 * 
 * Description:
 * Provides functions to create and manage a dropdown question
 * with only one correct answer to the main script.
 * 
 * Question JSON structure:
 * {
        "type": 3,
        "question": "La computación en la nube es mejor por que puedes hacer muchas cosas en ",
        "answers": [
            { "text": "la nube", "correct":true},
            { "text": "el sol", "correct":false},
            { "text": "el mar", "correct":false},
            { "text": "la montaña", "correct":false}
        ]
    }
 * 
 * Question HTML structure:
 *  <div class="control" id="control">
        <label>Cuando se mezcla azul y amarillo se consigue:</label>
        <select name="colors" id="colors">
            <option value="magenta">magenta</option>
            <option value="marron">marrón</option>
            <option value="verde">verde</option>
            <option value="naranja">naranja</option>
        </select>
    </div>
 *
 */


/**
 * Creates a HTML label
 * @param {*} labelText 
 * @returns 
 */
function createLabel(labelText) {
    // Create label element
    var label = document.createElement('label');
    label.textContent = labelText;

    return label;
}

/**
 * Returns HTML structure containing a label with the question and
 * a HTML select element.
 * 
 * @param {Array} options The options array with the text label and correct.
 * @param {HTMLDivElement} parent The parent element in the HTML file.
 */
export function createDropdown(options, parent){

    const question_label = createLabel(document.getElementById("question").innerHTML);
    control.appendChild(question_label);

    var dropdown = document.createElement("select");

    dropdown.setAttribute("name","dropdown");
    dropdown.setAttribute("id", "dropdown");
    
    options.forEach(answer_option => {
        var option = document.createElement("option");
        option.setAttribute('value',answer_option.text);
        option.textContent = answer_option.text;
        option.dataset.correct = answer_option.correct;
        dropdown.appendChild(option);
    });

    parent.appendChild(dropdown);
}

/**
 * Validates the users selection and updates the score.
 * 
 * @param {Int8Array} score Score of the user. 
 */
export function validateAnswer(score){
    var next_button = document.getElementById("next-btn");
    var val_button = document.getElementById("validate-btn");

    var selectElement = document.getElementById('dropdown');
    var selectedOptionIdx = selectElement.selectedIndex;
    var selectedOption = selectElement.children[selectedOptionIdx];

    // Check if an option is selected
    if (selectedOption) {
        // Check if the selected value is correct
        if(selectedOption.dataset.correct === "true"){
            selectedOption.classList.add("correct");
            selectElement.classList.add("correct");
            score++;
        }else{
            selectedOption.classList.add("incorrect");
            selectElement.classList.add("incorrect");
        }
        next_button.style.display = "inline";
    } else {
        alert("Por favor seleccione una opción"); // No option selected
    }
}