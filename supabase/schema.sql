-- profiles table
create table profiles (
  id uuid primary key default uuid_generate_v4(),
  email text,
  created_at timestamp default now()
);

-- queries table
create table queries (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references profiles(id),
  query_text text,
  created_at timestamp default now()
);

-- resources table
create table resources (
  id uuid primary key default uuid_generate_v4(),
  title text,
  description text,
  type text, -- ppt or video
  file_url text,
  created_at timestamp default now()
);
