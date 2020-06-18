import mongoose from 'mongoose';

export default async (config) => {
    await mongoose.connect(config, { useNewUrlParser: true });

    mongoose.connection.on('connected', function () {
        console.log('Mongoose default connection open to ' + config);
    });

    mongoose.connection.on('error', function (err) {
        console.log('Mongoose default connection error: ' + err);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });
};
