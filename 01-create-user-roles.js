// ServiceNow > System Definition > Scripts - Background
// Run as admin in a test Personal Developer Instance (PDI).
(function () {
    var roleNames = ['bb1', 'bb2', 'bb3', 'bb4'];

    for (var i = 0; i < roleNames.length; i++) {
        var role = new GlideRecord('sys_user_role');
        role.addQuery('name', roleNames[i]);
        role.query();

        if (!role.next()) {
            role.initialize();
            role.setValue('name', roleNames[i]);
            role.setValue('description', 'Demo ACL role: ' + roleNames[i]);
            role.insert();
            gs.info('Created role: ' + roleNames[i]);
        } else {
            gs.info('Role already exists: ' + roleNames[i]);
        }
    }

    var user = new GlideRecord('sys_user');
    user.addQuery('user_name', 'eee.user');
    user.query();

    if (!user.next()) {
        user.initialize();
        user.setValue('user_name', 'eee.user');
        user.setValue('first_name', 'EEE');
        user.setValue('last_name', 'User');
        user.setValue('email', 'eee.user@example.invalid');
        var userId = user.insert();
        gs.info('Created demo user eee.user: ' + userId);
        gs.info('Assign roles manually in User > Roles, or use the role-assignment section below after confirming role IDs.');
    } else {
        gs.info('Demo user already exists: eee.user');
    }

    gs.info('Assign bb1-bb4 roles to test users using the ServiceNow user record.');
})();
