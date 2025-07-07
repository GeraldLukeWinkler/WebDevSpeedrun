const userType = document.getElementById("user-dropdown")
const typeEntryBtn = document.getElementById("add-entry")
const userSpecificInfo = document.getElementById("changing-info")

const testContainer = document.getElementById("test-container")
const testBtn = document.getElementById("test-button")

/* the only way to access the elements added by the inputs
 * in the innerHTML additions is via a function that 
 * accesses a list of them via a for loop. 
 * 
 * this is because the compiler thoughs an error if you 
 * have a section of code that tries to reference something that 
 * doen't exist in every moment unless there is a condition in place
 * to prevent its reference untill it loggically must be created
 * or in existence (or maybe is insured in some other way, i.e. an if 
 * statement or checker of some kind)
 * Thus the updateTest() function was concieved*/ 
function updateTest(){
    const testInput = document.querySelectorAll("#inputTest")
    //setInterval(updateTest,1000)
    //testContainer.innerHTML += `<p>running</p>`
    for (const input of testInput) {
        testContainer.innerHTML = `<p>the value in question: ${input.value} </p>`
    }
    setInterval(updateTest,1000)
}

testBtn.addEventListener("click",updateTest)
//testBtn.addEventListener("click",updateUserSpecificData(dataClass))
function updateUserSpecificData(dataClass) {
    const classInputs = document.querySelectorAll(`#changing-info input[class="${dataClass}"]`)

}

function logPatientDataUpdates() {
    let entryType = userType.value
    const ruralSelect = document.querySelectorAll("#origin")
    let patientIsRural = ""
    const diagnosisInput = document.querySelectorAll("#diagnosis")
    let diagnosisString = ""
    for (const input of ruralSelect) {
        isrural = input.value
    }
    for (const input of diagnosisInput) {
        diagnosisString = input.value
    }
    testContainer.innerHTML = `
    <p>The ${entryType} Rural status is: ${patientIsRural}</p>
    <br>
    <p>the diagnosis is ${diagnosisString}</p>
    `
}
function logProviderDataUpdates() {
    let entryType = userType.value
    const ruralSelect = document.querySelectorAll("#origin")
    let providerIsRural = ""
    const diagnosisInput = document.querySelectorAll("#diagnosis")
    let diagnosisString = ""
    const providerSpecialty = document.querySelectorAll("#specialty")
    let providerSpecialtyString = ""
    for (const input of ruralSelect) {
        providerIsRural = input.value
    }
    for (const input of diagnosisInput) {
        diagnosisString = input.value
    }
    for (const input of providerSpecialty) {
        providerSpecialtyString = input.value
    }
    testContainer.innerHTML = `
    <p>The ${entryType} Rural status is: ${providerIsRural}</p>
    <br>
    <p>the diagnosis is: ${diagnosisString}</p>
    <br>
    <p>the provider specialty is: ${providerSpecialtyString}</p>
    `
}

function entryBtnPress() {
    let entryType = userType.value 
    // adding a custom field snd a custom variable(input) save/update function for each onee
    if (entryType == "") {
        userSpecificInfo.innerHTML = `
        <h1>change to display functionality</h1>
        <label for="inputTest">test field</label>
        <input id="inputTest" type="text">`
        setInterval(updateTest,1000)
    } else if (entryType == "patient"){
        userSpecificInfo.innerHTML = `
            <legend> Please provide some information about yourself</legend>
            <label for="origin">do you live in a rural area?</label>
            <select id="origin" name="origin">
                <option value="yes" selected>Yes</option>
                <option value="no" selected>No</option>
            </select>
            <label for="diagnosis">what is the indication (the diagnosis) for the test: </label>
            <input id="diagnosis" name="diagnosis" type="text" placeholder="ex). chest pain">`
            setInterval(logPatientDataUpdates,1000)

    } else if (entryType == "healthcare-prodiver"){
        userSpecificInfo.innerHTML = `
            <legend> Please provide some information about yourself</legend>
            <label for="origin">do you practice in a rural area?</label>
            <select id="origin" name="origin">
                <option value="yes" selected>Yes</option>
                <option value="no" selected>No</option>
            </select>
            <label for="specialty">what is your specialty?</label>
            <select id="specialty" name="specialty">
                <option value="e-r-physician" selected>ER Physician</option>
                <option value="f-m-physician" selected>Family Medicine Physiciann</option>
                <option value="app" selected>APP</option>
                <option value="other" selected>Other</option>
            </select>
            <label for="diagnosis">what is the indication for the test: </label>
            <input id="diagnosis" name="diagnosis" type="text" placeholder="ex). chest pain">`
            setInterval(logProviderDataUpdates,1000)
    } else if (entryType == "radiologist"){
        userSpecificInfo.innerHTML = `
            <label for="sub-specialty">what is your sub-specialty?</label>
            <select id="sub-specialty" name="sub-specialty">
                <option value="e-r-physician" selected>ER Physician</option>
                <option value="f-m-physician" selected>Family Medicine Physiciann</option>
                <option value="app" selected>APP</option>
                <option value="other" selected>Other</option>
            </select>
            <legend> Please provide some information about yourself</legend>
            <label for="origin">do you practice in a rural area?</label>
            <select id="origin" name="origin">
                <option value="yes" selected>Yes</option>
                <option value="no" selected>No</option>
            </select>
            
            <label for="diagnosis">what is the indication for the test: </label>
            <input id="diagnosis" name="diagnosis" type="text" placeholder="ex). chest pain">`
            setInterval(logRadiologistDataUpdates,1000)
    }
}

function logProviderDataUpdates() {
    let entryType = userType.value
    const ruralSelect = document.querySelectorAll("#origin")
    let providerIsRural = ""
    const diagnosisInput = document.querySelectorAll("#diagnosis")
    let diagnosisString = ""
    const providerSpecialty = document.querySelectorAll("#sub-specialty")
    let providerSpecialtyString = ""
    for (const input of ruralSelect) {
        providerIsRural = input.value
    }
    for (const input of diagnosisInput) {
        diagnosisString = input.value
    }
    for (const input of providerSpecialty) {
        providerSpecialtyString = input.value
    }
    testContainer.innerHTML = `
    <p>The ${entryType} Rural status is: ${providerIsRural}</p>
    <br>
    <p>the diagnosis is: ${diagnosisString}</p>
    <br>
    <p>the provider specialty is: ${providerSpecialtyString}</p>
    `
}

typeEntryBtn.addEventListener("click", entryBtnPress)


