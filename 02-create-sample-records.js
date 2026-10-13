// ServiceNow > System Definition > Scripts - Background
// Ensure u_institution_details, u_student_name and u_branch exist first.
(function () {
    var samples = [
        { name: 'Anitha', branch: 'ECE' },
        { name: 'Banu', branch: 'EEE' },
        { name: 'Charan', branch: 'CSE' },
        { name: 'Divya', branch: 'EEE' },
        { name: 'Farhan', branch: 'ECE' }
    ];

    for (var i = 0; i < samples.length; i++) {
        var rec = new GlideRecord('u_institution_details');
        rec.initialize();
        rec.setValue('u_student_name', samples[i].name);
        rec.setValue('u_branch', samples[i].branch);
        var id = rec.insert();
        gs.info('Inserted ' + samples[i].name + ' (' + samples[i].branch + '): ' + id);
    }
})();
