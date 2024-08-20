// app.js
function submitForm() {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const section = document.getElementById('section').value;
    const monthlyTarget = document.getElementById('monthly-target').value;
    const perDayTarget = document.getElementById('perday-target').value;

    // Process the form data (e.g., send to a server or display in the console)
    console.log({
        id,
        name,
        section,
        monthlyTarget,
        perDayTarget
    });
}
