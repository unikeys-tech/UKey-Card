/**
 * Copyright by xxxx xxxx
 */
const sqlite = require('sqlite3').verbose();
const { utils }  = require('./sprites')
const assert = require('assert');
const BN = require('bignumber.js');
class Database {

    constructor() {
        this.db = new sqlite.Database(':memory:')
    }
    // set up database
    setup(customer, merchant) {
        assert (utils.isAddress(customer) && utils.isAddress(merchant))

        this.db.serialize(() => {
            this.db.run(`CREATE TABLE Account  (
                address VARCHAR(255) PRIMARY KEY NOT NULL,
                balance REAL NOT NULL,
                channelID REAL NOT NULL
            )`, async (err) => {
                if (!err) console.log("Database TABLE CREATE")
                this.db.run("INSERT OR IGNORE INTO Account VALUES (?, ?, ?)", customer, 0, -1);
                this.db.run("INSERT OR IGNORE INTO Account VALUES (?, ?, ?)", merchant, 0, -1);
            });
        });

    }

    getAccount(address, callback) {
        assert(utils.isAddress(address))
        this.db.get('SELECT * FROM Account WHERE address = ?', address, callback);
    }

    getBalance(address, callback) {
        assert(utils.isAddress(address))
        this.db.get('SELECT balance FROM Account WHERE address = ?', address, callback);
    }

    updateBalance(address, balance, callback) {
        assert(utils.isAddress(address))
        this.db.run('UPDATE Account SET Balance = ? WHERE address = ?', new BN(balance).toNumber(), address, callback);
    }

    getChannelID(address, callback) {
        assert(utils.isAddress(address))
        this.db.get('SELECT channelID FROM Account WHERE address = ?', address, callback);
    }

    updateChannelID(address, channelID, callback) {
        assert(utils.isAddress(address))
        this.db.run('UPDATE Account SET channelID = ? WHERE address = ?', channelID, address, callback);
    }

    payment(from, to, amount, callback) {
        try {
            assert(utils.isAddress(from))
            assert(utils.isAddress(to))
            assert(amount > 0)
            this.db.serialize( () => {
                this.db.get('SELECT balance FROM Account WHERE address = ?', from, (err, row) => {
                    if (err) return callback(err)
                    if (row.balance < amount) return callback('not enough fund')  // enough fund?
                    try {
                        this.db.run('BEGIN TRANSACTION')
                            .run('UPDATE Account SET balance = ? WHERE address = ?', new BN(row.balance).minus(amount).toNumber(), from)
                            .get('SELECT balance FROM Account WHERE address = ?', to, (err, row2) => {
                                assert(err == null);
                                this.db.run('UPDATE Account SET balance = ? WHERE address = ?', new BN(row2.balance).plus(amount).toNumber(), to)
                                    .run('COMMIT');
                                    callback(null)
                            })
                    }
                    catch (e) {
                        this.db.run('ROLLBACK');
                        callback(e)
                    }

                })


            });
        }
        catch (e) {
            callback(e)
        }
    }

    createOffChainAccount(address, balance, callback) {
        try {
            assert(utils.isAddress(address))
            this.db.run("INSERT OR IGNORE INTO Account VALUES (?, ?, ?)", address, balance, -1, callback)
        }
        catch (e) {
            callback(e)
        }
    }
}

module.exports = new Database()


