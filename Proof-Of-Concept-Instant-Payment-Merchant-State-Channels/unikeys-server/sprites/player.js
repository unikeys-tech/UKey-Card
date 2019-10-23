/**
 * Copyright by xxxx xxxx
 */
const Payment = require('./payment')

class Player {
    receive_payment(payment) {
        // verify payment signature + deposits of other party

    }

    make_payment(recipient, channel_id, amount) {
        return new Payment(recipient, )
    }
}

module.exports = Player