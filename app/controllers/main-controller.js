function MainController($scope) {
  var vm = this;
  SimpleWallet.deployed().then(function(instance) {
    vm.instance=instance;
    web3.eth.getBalance(instance.address, function(error, result) {
      if (!error) {
        vm.balance = result.toNumber();
        vm.balanceInEther = web3.fromWei(vm.balance, "ether");
        
      } else {
        console.log(error);
      }
    })
  }).then(function(){
    return vm.instance.lastDay.call();
  }).then(function(timestamp){
    vm.lastDay=timeConverter(timestamp);
    return vm.instance.dailyLimit.call();
  }).then(function(limitInWei){
    vm.dailyLimit=web3.fromWei(limitInWei, "ether");
    return vm.instance.spentToday.call();
  }).then(function(spentInWei){
    vm.spentToday=web3.fromWei(spentInWei, "ether");
    $scope.$apply();
  });
}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = "0"+a.getMinutes();
  var sec = "0"+a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min.substr(-2) + ':' + sec.substr(-2) ;
  return time;
}