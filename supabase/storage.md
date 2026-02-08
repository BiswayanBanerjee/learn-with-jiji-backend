# Supabase Storage Setup

Supabase Storage is used to store learning resources such as PPTs and videos.

## Bucket Created
Name: learning-resources  
Access: Public

## Files Uploaded
- 1 sample PPT file
- 1 sample video file

These files are used as learning resources returned by the backend API.

## Usage in Backend
The backend fetches resource metadata from the `resources` table.
Each record contains:
- title
- description
- type (ppt/video)
- file_url (public Supabase storage URL)

These URLs are returned in the API response to the frontend.

## Security
- Storage bucket is public for assignment simplicity.
- No secret keys are exposed.
- Access controlled via Supabase project settings.
