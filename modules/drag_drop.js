/**
 * Script: drag_drop.js
 * Author: Andres Calandin Vega
 * 
 * Description:
 * Provides functions to create and manage a drag and drop question.
 * 
 * Question JSON structure:
 * {
        "type": 4,
        "question": "Elije la verdadera",
        "answers": [
            { 
                "initial": "Virtual Network peering", 
                "text": "Extends on-premise networks to the Microsoft cloud via private connection.",
                "correct": "Express Route" 
            },
            {
                "initial": "Express Route",
                "text": "Combines two or more Azure virtual networks into a single virtual network",
                "correct": "Virtual Network peering"
            },
            {
                "initial": "VPN Gateway",
                "text": "Provides an encrypted connection from on-premise networks to Azure via a public network.",
                "correct": "VPN Gateway"
            }
        ]
    }
 * 
 * Question HTML structure:
 * <div class="control" id="control">
        <div class="column" id="dragColumn">
            <h3 id="dragZoneLabel">Elementos</h3>
            <div id="dragZone" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="dragElement" id="dragElement1" draggable="true" ondragstart="drag(event)">Virtual Network peering.</div>
            </div>
            <div id="dragZone" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="dragElement" id="dragElement2" draggable="true" ondragstart="drag(event)">Express Route.</div>
            </div>
            <div id="dragZone" ondrop="drop(event)" ondragover="allowDrop(event)">
                <div class="dragElement" id="dragElement2" draggable="true" ondragstart="drag(event)">VPN Gateway.</div>
            </div>
        </div>
        <div class="column" id="dropColumn">
            <h3 id="dropZoneLabel">Respuestas</h3>
            <div id="dropZone" ondrop="drop(event)" ondragover="allowDrop(event)" data-correct="A"></div>
            <div id="dropZone" ondrop="drop(event)" ondragover="allowDrop(event)" data-correct="B"></div>
            <div id="dropZone" ondrop="drop(event)" ondragover="allowDrop(event)" data-correct="C"></div>
        </div>
        <div class="column" id="textColumn">
            <h3>Texto</h3>
            <div class="answerText">
                <span>Extends on-premise networks to the Microsoft cloud via private connection.</span>
            </div>
            <div class="answerText">
                <span>Combines two or more Azure virtual networks iunto a single logical virtual network.</span>
            </div>
            <div class="answerText">
                <span>Provides an encrypted connection from on-premise networks to Azure via a public network.</span>
            </div>
        </div>
    </div>
 *     
*/


/**
 * Returns HTML structur containing three div containers and columms:
 *     - 1st Column: Is the column with the drag zones and elements.
 *     - 2nd Column: Is the column with the drop zones.
 *     - 3rd Column: Is the column with the sentences.
 * 
 * @param {Array} options The options array with the text label and correct.
 * @param {HTMLDivElement} parent The parent element in the HTML file.
 */
export function createDragDrop(options, parent){
    return 0;
}

/**
 * Validates the users selection and updates the score.
 * 
 * @param {Int8Array} score Score of the user. 
 */
export function validateAnswer(score){
    return 0;
}