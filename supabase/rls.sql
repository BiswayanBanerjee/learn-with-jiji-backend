-- allow read for all
create policy "Public read access"
on resources
for select
using (true);
