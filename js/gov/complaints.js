document.addEventListener('DOMContentLoaded', function() {
    //console.log('Current page URL:', window.location.href);
    fetch('/js/gov/complaints.json')
        .then(response => response.json())
        .then(data => {
            const complaintsTable = document.getElementById('complainers');
            const urlParams = new URLSearchParams(window.location.search);
            const complaintId = urlParams.get('id');

            if (complaintId) {
                // Display the form with the complaint data if id is present in the URL
                loadComplaintForm(data, complaintId);
            } else {
                // Populate the table on the main page
                populateComplaintsTable(data);
            }
        })
        .catch(error => console.error('Error loading data:', error));
});

function populateComplaintsTable(complaints) {
    const tableBody = document.getElementById('complainers').getElementsByTagName('tbody')[0];

    complaints.forEach(complaint => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="complaint.html?id=${complaint.caseNumber}">${complaint.complaintDetails.summary}</a></td>
            <td>${complaint.complainerDetails.name}</td>
            <td>${complaint.caseNumber}</td>
            <td>${complaint.caseStatus}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to load the complaint data into the form on complaint.html
function loadComplaintForm(complaints, id) {
    const complaint = complaints.find(c => c.caseNumber === id);

    if (!complaint) {
        alert('Complaint not found.');
        return;
    }

    document.querySelector('input[placeholder="Enter Case Number"]').value = complaint.caseNumber;
    document.querySelector('input[placeholder="Enter Case Status"]').value = complaint.caseStatus;
    document.querySelector('input[placeholder="Enter Date"]').value = complaint.date;

    document.querySelector('input[placeholder="Enter Name"]').value = complaint.complainerDetails.name;
    document.querySelector('input[placeholder="Enter Occupation"]').value = complaint.complainerDetails.occupation;
    document.querySelector('input[placeholder="Enter Email"]').value = complaint.complainerDetails.email;
    document.querySelector('input[placeholder="Enter Phone Number"]').value = complaint.complainerDetails.phone;
    document.querySelector('input[placeholder="Enter Address"]').value = complaint.complainerDetails.address;

    document.getElementById('complainee').value = complaint.complaintDetails.complainee;
    document.getElementById('summary').value = complaint.complaintDetails.summary;
    document.getElementById('details').value = complaint.complaintDetails.details;

    document.querySelector(`input[name="justified"][value="${complaint.mayoralStaffResponse.isJustified}"]`).checked = true;
    document.querySelector(`input[name="follow_up"][value="${complaint.mayoralStaffResponse.followUp}"]`).checked = true;
    document.querySelector(`input[name="satisfied"][value="${complaint.mayoralStaffResponse.satisfied}"]`).checked = true;
    document.getElementById('final-comments').value = complaint.mayoralStaffResponse.response;

    // Dynamically adjust the height of the textareas
    const textareas = document.querySelectorAll('.auto-resize');
    textareas.forEach(textarea => { textarea.style.height = `${textarea.scrollHeight}px`; });
}
