$(readyNow);

function readyNow() {
    // Click handler on #add-student to call addStudent() - Jennifer
    $('#add-student').on('click', addStudent);

}

// Function addStudent() adds an li to #student-list - Oscar