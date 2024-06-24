import app from "./app";
// import './model/db/db_sync';

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});
