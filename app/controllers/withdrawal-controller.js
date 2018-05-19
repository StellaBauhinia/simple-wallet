function WithdrawalController($scope) {
  var vm = this;
  vm.accounts = web3.eth.accounts;
  vm.isAllowedToWithdrawFunds=true;
  vm.selectedAccount = vm.accounts[0];

  vm.withdrawlFunds = function(address, amount) {
    vm.toAddress=address;

    SimpleWallet.deployed()
      .then(function(instance) {
        vm.instance = instance;
        //console.log("got deployed contract instance");
        //return instance.isOwner(address);
        return vm.instance.isOwner(vm.selectedAccount);
      })
      .then(function(result) {
        vm.isAllowedToWithdrawFunds=result;
        if(vm.isAllowedToWithdrawFunds){
        //console.log("is address is allowed to send funds? " + result);
        console.log("attempting transaction, please wait.");

        vm.instance.submitTransaction(vm.toAddress,web3.toWei(amount, "ether"), {
            from: web3.eth.accounts[0]
          })
          .then(function(transactionReceipt) {
            console.log(transactionReceipt.tx);
            vm.transfer_success = true;
            $scope.$apply();
          }).catch(function(error) {
            console.error(error);
            vm.has_errors = error;
            $scope.$apply();
          });
        }else{
          console.log("is address allowed to send ethers: "+vm.isAllowedToWithdrawFunds);
        }
        $scope.$apply();
      });
  }
}

function ApprovalController($scope) {
  var vm = this;
  vm.accounts = web3.eth.accounts;
  vm.pendingTxId = [];
  vm.pendingTransactions = [];

  vm.selectedAccount = vm.accounts[0];
  vm.isAllowedToConfirmTx=true;

  SimpleWallet.deployed().then(function(instance) {

    vm.instance = instance;

    return vm.instance.isOwner(vm.selectedAccount);
  }).then(function(res){
    // no records will be shown if the account is not an owner.
    if(res){
      vm.instance.transactionCount.call().then(function(txTotalCount){
        vm.txTotalCount=txTotalCount;
        return vm.instance.getTransactionCount.call(true,false);
      }).then(function(txPendingNum){
        vm.txPendingNum=txPendingNum;
        return vm.instance.getTransactionIds.call(0,vm.txTotalCount,true,false);
      }).then(function(idArray){
        
        var txPromises=idArray.slice(0,vm.txPendingNum).map(id => {
          vm.instance.getConfirmations.call(id.toNumber()).then(function(addresses){
            console.log("transaction id "+ id +" is already confirmed by "+ addresses.length+" user(s).");
            // filter the total pending transaction ids with the owner's confirmation status
            for (i=0;i<addresses.length;i++){
              if (addresses[i] == vm.selectedAccount){
                continue;
              }else{
                vm.pendingTxId.push(id.toNumber());
              }
            }
          });

          
          return vm.instance.transactions.call(id.toNumber());
        });
        
        Promise.all(txPromises).then(function(results){
          vm.pendingTransactions=results;
          //console.log(vm.pendingTransactions);
          //console.dir(vm.pendingTxId);
          for (i=0;i<results.length;i++){
            vm.pendingTransactions[i][2]=web3.fromWei(vm.pendingTransactions[i][2], "ether");
          }
          $scope.$apply();
        });
      });
    }
    
  });

  vm.confirm = function(txId) {
    vm.currentId=txId;
    console.log("Confirming transaction ID "+vm.currentId);

    SimpleWallet.deployed()
      .then(function(instance) {
        vm.instance = instance;
        return vm.instance.isOwner(vm.selectedAccount);
      })
      .then(function(result) {
        vm.isAllowedToConfirmTx=result;
        if(vm.isAllowedToConfirmTx){
        //console.log("is address is allowed to send funds? " + result);
        console.log("attempting transaction, please wait.");
        vm.instance.confirmTransaction(vm.currentId, {
            from: web3.eth.accounts[0]
          })
          .then(function(transactionReceipt) {
            console.log(transactionReceipt.tx);
            vm.transfer_success = true;
            $scope.$apply();
          }).catch(function(error) {
            console.error(error);
            vm.has_errors = error;
            $scope.$apply();
          });
        }else{
          console.log("is address allowed to send ethers: "+vm.isAllowedToConfirmTx);
        }
        $scope.$apply();
      });
  }
  
}
