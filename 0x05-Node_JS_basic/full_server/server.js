import app from './routes/index';

const PORT = 1245;

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});

export default app;
module.exports = app;
