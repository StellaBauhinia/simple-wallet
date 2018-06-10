function EventsController($scope) {
  var vm = this;
  vm.depositEvents=[];
  vm.etherEvents = [];
  vm.pendingEvents = [];
  vm.adminEvents = [];
  vm.requireEvents = [];
  vm.otherEvents = [];
  console.log("fetching and watching for transactions, view will be updated.");
  SimpleWallet.deployed()
    .then(function(instance) {
      //console.log("contract instance aquired...");
      //console.log("requesting transactions, please wait.");
      var eventsToWatch = instance.allEvents({
        fromBlock: 2298742,
        toBlock: 'latest'
      });

      eventsToWatch.watch(function(error, result) {
        if (!error) {
          var eventType=result.event;
          SimpleWallet.detectNetwork().then(function(network_id,err){
            if (network_id=="4")
              prefix = "https://rinkeby.etherscan.io/tx/"
            else if (network_id=="1")
              prefix = "https://etherscan.io/tx/"

            result.url=prefix+result.transactionHash;
            switch(eventType){
              case "Deposit":
                result.args.value=web3.fromWei(result.args.value.toNumber(), "ether");
                vm.depositEvents.push(result);
                break;
              case "Execution":
                result.args.value=web3.fromWei(result.args.value, "ether");
                vm.etherEvents.push(result);
                break;
              case "Confirmation":
                vm.pendingEvents.push(result);
                break;
              case "Revocation":
                vm.pendingEvents.push(result);
                break;
              case "OwnerAddition":
                vm.adminEvents.push(result);
                break;
              case "OwnerRemoval":
                vm.adminEvents.push(result);
                break;
              case "RequirementChange":
                vm.requireEvents.push(result);
                break;
              default:
                vm.otherEvents.push(result);
            }

            //console.log(vm.events);
            $scope.$apply();
          });
          
        }else{
          console.log(error);
        }
      });

    });

  $scope.$on('destroy', function() {
    eventsToWatch.stopWatching();
  });

}

