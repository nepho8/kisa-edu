import {
  Meteor
} from 'meteor/meteor';
import {
  Mongo
} from 'meteor/mongo';
client = new CoinStack('c7dbfacbdf1510889b38c01b8440b1', '10e88e9904f29c98356fd2d12b26de');

Wallets = new Mongo.Collection('wallets');

Meteor.startup(() => {
  var walletsCnt = Wallets.find().count();

  var privateKey = CoinStack.ECKey.createKey();
  var address = CoinStack.ECKey.deriveAddress(privateKey);

  if (walletsCnt == 0) {
    var documnet = {
      _id: address,
      privateKey: privateKey,
      createAt: new Date()
    };
    Wallets.insert(documnet);
    console.log('insert wallet');
  } else {
    console.log('ended');
  }

});

Meteor.methods({
  'getBalance' ({
    address
  }) {
    console.log('check balance: ' + address);
    var balance = CoinStack.Math.toBitcoin(client.getBalanceSync('1PqdoBL3YUjyPe4D2BugYfakW18Q57aWht'));
    console.log('check balance: ' + balance);
    return balance;
  },
  'getTxHistory' ({
    address
  }) {
    console.log('check balance: ' + address);
    client.getTransactionsSync(address);
    //console.log('check balance: ' + balance);
    return balance;
  }
});