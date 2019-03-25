import main from './main';

const routes = (app) => {
  const router = app.get('router');

  router.get('/get-rooms', (req, res) => {
    main.getRoom({}, (cb) => {
      res.send(cb);
    });
  });

  router.get('/get-bookings', (req, res) => {
    main.getAllBooking({}, (cb) => {
      res.send(cb);
    });
  });

  router.post('/book-room', (req, res) => {
    const data = req.body;

    main.bookRoom(data, (cb) => {
      res.send(cb.res);
    });
  });

  router.post('/add-room', (req, res) => {
    const data = req.body;

    main.addRoom(data, (cb) => {
      res.send(cb.res);
    });
  });

  app.use('/api', router);
};

module.exports = routes;
