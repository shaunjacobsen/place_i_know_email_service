const amqp = require('amqplib/callback_api');
require('./config/config');

amqp.connect(process.env.AMQP_SERVER, (err, connection) => {
  connection.createChannel((err, channel) => {
    const queue = 'emails';

    channel.assertQueue(queue, { durable: true });

    channel.consume(
      queue,
      message => {
        console.log('message received', message.content.toString());
        setTimeout(() => {
          console.log('message processed', message.content.toString());
          channel.ack(message);
        });
      },
      { noAck: false }
    );
  });
});
