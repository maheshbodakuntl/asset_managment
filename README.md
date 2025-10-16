# Install frontend

cd frontend
npm install
npm start

# Install backend

cd backend
npm install
# then start backend (use one of these depending on your package.json)
node server.js
# or
npm start
# or if you use nodemon in dev:
npm run dev


# Database (local)

# 1. Create local database (Postgres)

# run in psql or the terminal
psql -U postgres -c "CREATE DATABASE ams_test;"


# 2. Import SQL dump (if you have a plain .sql file)

psql -U postgres -d ams_test -f db/ams_test.sql
