# Script-Controlled ACL – Restrict Record Access Based on Field Value (ServiceNow)

This folder contains the project code for a ServiceNow Personal Developer Instance (PDI).

## Access design
- Table: `u_institution_details`
- Read: users with role `bb1` can read records where Branch is `EEE`; admins retain full access.
- Create: role `bb2`
- Write: role `bb3`
- Delete: role `bb4`

> Important: Review and test these scripts in a disposable ServiceNow PDI before using them. ServiceNow table/field names and ACL behavior can vary by instance. Do not run in production.

## Files
- `config/table-definition.json`: table and field specification
- `config/roles-and-acls.json`: role/ACL reference
- `scripts/01-create-user-roles.js`: creates roles and a sample user
- `scripts/02-create-sample-records.js`: creates sample ECE/EEE/CSE records
- `scripts/03-create-acls.js`: creates ACL records (requires `security_admin`)
- `acl/read-acl-script.js`: script for the Read ACL

## Setup
1. Create the `u_institution_details` table and fields according to `config/table-definition.json`.
2. Run `scripts/01-create-user-roles.js` in **System Definition > Scripts - Background**.
3. Run `scripts/02-create-sample-records.js`.
4. Elevate to `security_admin`, then run `scripts/03-create-acls.js`, or create the ACLs manually.
5. Test by imperso;
   6.nating users with different role combinations.
documentation link:https://docs.google.com/document/d/1IS2gqIcDP8qJ1eH7UlUyAcXORQcQWAEV/edit?usp=drivesdk&ouid=108842271138279259840&rtpof=true&sd=true

demo link:https://drive.google.com/file/d/1jN29ZR8VgCb8PWc24cky6SjkFYOPLmQL/view?usp=drivesdk


   
documentation link
The ACL creation API can differ between ServiceNow releases. If step 4 fails, create the ACLs manually in **System Security > Access Control (ACL)** using the configuration in `config/roles-and-acls.json`.
