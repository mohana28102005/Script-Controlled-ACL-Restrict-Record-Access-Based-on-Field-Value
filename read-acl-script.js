// Paste into the Script field of the table-level READ ACL.
// Configure the ACL role as bb1 and the condition as: u_branch is EEE.
// The condition filters the records; this script checks the role.
answer = gs.hasRole('bb1');
