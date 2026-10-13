// ServiceNow ACL creation is security-sensitive and its record fields can vary by release.
// Run only in a test PDI with security_admin. If this script fails, create the ACLs manually
// using config/roles-and-acls.json and the ServiceNow Access Control (ACL) interface.
//
// Recommended manual ACL configuration:
// 1) READ: Type=record, Name=u_institution_details, Operation=read, Role=bb1,
//    Condition: u_branch is EEE, Script: answer = gs.hasRole('bb1');
// 2) CREATE: Type=record, Name=u_institution_details, Operation=create, Role=bb2.
// 3) WRITE: Type=record, Name=u_institution_details, Operation=write, Role=bb3.
// 4) DELETE: Type=record, Name=u_institution_details, Operation=delete, Role=bb4.
//
// ACL creation via direct GlideRecord writes is intentionally not automated here because
// incorrectly created ACLs can lock users out or expose records. Configure and test manually.
gs.info('Please create the ACLs manually as documented in config/roles-and-acls.json and README.md.');
