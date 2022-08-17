$(readyNow);

function readyNow() {
    // Click handler on #add-student to call addStudent() - Jennifer
    $('#add-student').on('click', addStudent);

}

// Function addStudent() adds an li to #student-list - Oscar

function addStudent() {
    console.log('in addStudent');
    let newStudent = $('#add-student').val();
    console.log('newStudent', newStudent);
    $('#student-list').append(`
        <ul>
        <li>${newStudent}</li>
        </ul>
    `);
}