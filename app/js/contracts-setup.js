var SimpleWallet = TruffleContract({
  "contract_name": "SimpleWallet",
  "abi": [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "required",
        "type": "uint256"
      }
    ],
    "name": "RequirementChange",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "addOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnerRemoval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnerAddition",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Deposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "name": "ExecutionFailure",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "transactionId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "toAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Execution",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "name": "Submission",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "name": "Revocation",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "name": "Confirmation",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_required",
        "type": "uint256"
      }
    ],
    "name": "changeRequirement",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "dailyLimit",
        "type": "uint256"
      }
    ],
    "name": "DailyLimitChange",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "name": "confirmTransaction",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "name": "executeTransaction",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "removeOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "replaceOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "name": "revokeConfirmation",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "destination",
        "type": "address"
      },
      {
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "submitTransaction",
    "outputs": [
      {
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_owners",
        "type": "address[]"
      },
      {
        "name": "_required",
        "type": "uint256"
      },
      {
        "name": "_dailyLimit",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "calcMaxWithdraw",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "confirmations",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "dailyLimit",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "name": "getConfirmationCount",
    "outputs": [
      {
        "name": "count",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "name": "getConfirmations",
    "outputs": [
      {
        "name": "_confirmations",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getOwners",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "pending",
        "type": "bool"
      },
      {
        "name": "executed",
        "type": "bool"
      }
    ],
    "name": "getTransactionCount",
    "outputs": [
      {
        "name": "count",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "from",
        "type": "uint256"
      },
      {
        "name": "to",
        "type": "uint256"
      },
      {
        "name": "pending",
        "type": "bool"
      },
      {
        "name": "executed",
        "type": "bool"
      }
    ],
    "name": "getTransactionIds",
    "outputs": [
      {
        "name": "_transactionIds",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "name": "isConfirmed",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "isOwner",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "lastDay",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MAX_OWNER_COUNT",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "owners",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "required",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "spentToday",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "transactionCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "transactions",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "destination",
        "type": "address"
      },
      {
        "name": "value",
        "type": "uint256"
      },
      {
        "name": "executed",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
],
  "unlinked_binary": "0x606060405234156200001057600080fd5b6040516200161b3803806200161b8339810160405280805182019190602001805191906020018051915083905082600082518260328211806200005257508181115b806200005c575080155b8062000066575081155b156200007157600080fd5b600092505b84518310156200013e57600260008685815181106200009157fe5b90602001906020020151600160a060020a0316815260208101919091526040016000205460ff1680620000e15750848381518110620000cc57fe5b90602001906020020151600160a060020a0316155b15620000ec57600080fd5b600160026000878681518110620000ff57fe5b90602001906020020151600160a060020a031681526020810191909152604001600020805460ff19169115159190911790556001929092019162000076565b6003858051620001539291602001906200018e565b505050600591909155505060048054600160a060020a03191633600160a060020a031617905566038d7ea4c680000260075550620002249050565b828054828255906000526020600020908101928215620001e8579160200282015b82811115620001e85782518254600160a060020a031916600160a060020a039190911617825560209290920191600190910190620001af565b50620001f6929150620001fa565b5090565b6200022191905b80821115620001f6578054600160a060020a031916815560010162000201565b90565b6113e780620002346000396000f3006060604052600436106101485763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663025e7c278114610191578063173825d9146101c35780631d43b653146101e257806320ea8d86146102165780632f54bf6e1461022c5780633411c81c1461025f5780634bc9fdc214610281578063547415251461029457806367eeba0c146102b15780636b0c932d146102c45780637065cb48146102d7578063784547a7146102f65780638b51d13f1461030c5780639ace38c214610322578063a0e67e2b1461036c578063a8abe69a146103d2578063b5dc40c3146103f5578063b77bf6001461040b578063ba51a6df1461041e578063c01a8c8414610434578063d74f8edd1461044a578063dc8452cd1461045d578063e20056e614610470578063ee22610b14610495578063f059cf2b146104ab575b600034111561018f5733600160a060020a03167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c3460405190815260200160405180910390a25b005b341561019c57600080fd5b6101a76004356104be565b604051600160a060020a03909116815260200160405180910390f35b34156101ce57600080fd5b61018f600160a060020a03600435166104e6565b34156101ed57600080fd5b610204600160a060020a0360043516602435610677565b60405190815260200160405180910390f35b341561022157600080fd5b61018f600435610694565b341561023757600080fd5b61024b600160a060020a0360043516610772565b604051901515815260200160405180910390f35b341561026a57600080fd5b61024b600435600160a060020a0360243516610787565b341561028c57600080fd5b6102046107a7565b341561029f57600080fd5b610204600435151560243515156107e1565b34156102bc57600080fd5b61020461084d565b34156102cf57600080fd5b610204610853565b34156102e257600080fd5b61018f600160a060020a0360043516610859565b341561030157600080fd5b61024b600435610988565b341561031757600080fd5b610204600435610a0c565b341561032d57600080fd5b610338600435610a7b565b604051938452600160a060020a03909216602084015260408084019190915290151560608301526080909101905180910390f35b341561037757600080fd5b61037f610aaf565b60405160208082528190810183818151815260200191508051906020019060200280838360005b838110156103be5780820151838201526020016103a6565b505050509050019250505060405180910390f35b34156103dd57600080fd5b61037f60043560243560443515156064351515610b17565b341561040057600080fd5b61037f600435610c3f565b341561041657600080fd5b610204610da3565b341561042957600080fd5b61018f600435610da9565b341561043f57600080fd5b61018f600435610e2f565b341561045557600080fd5b610204610f20565b341561046857600080fd5b610204610f25565b341561047b57600080fd5b61018f600160a060020a0360043581169060243516610f2b565b34156104a057600080fd5b61018f6004356110d5565b34156104b657600080fd5b610204611223565b60038054829081106104cc57fe5b600091825260209091200154600160a060020a0316905081565b60045460009033600160a060020a0390811691161461050457600080fd5b600160a060020a038216600090815260026020526040902054829060ff16151561052d57600080fd5b600160a060020a0383166000908152600260205260408120805460ff1916905591505b600354600019018210156106105782600160a060020a031660038381548110151561057757fe5b600091825260209091200154600160a060020a03161415610605576003805460001981019081106105a457fe5b60009182526020909120015460038054600160a060020a0390921691849081106105ca57fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055610610565b600190910190610550565b6003805460001901906106239082611362565b50600354600554111561063c5760035461063c90610da9565b82600160a060020a03167f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b9060405160405180910390a2505050565b60006106838383611229565b905061068e81610e2f565b92915050565b33600160a060020a03811660009081526002602052604090205460ff1615156106bc57600080fd5b600082815260016020908152604080832033600160a060020a038116855292529091205483919060ff1615156106f157600080fd5b600084815260208190526040902060030154849060ff161561071257600080fd5b6000858152600160209081526040808320600160a060020a033316808552925291829020805460ff1916905586917ff6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e9905160405180910390a35050505050565b60026020526000908152604090205460ff1681565b600160209081526000928352604080842090915290825290205460ff1681565b600060085462015180014211156107c157506007546107de565b60095460075410156107d5575060006107de565b50600954600754035b90565b6000805b6006548110156108465783801561080e575060008181526020819052604090206003015460ff16155b806108325750828015610832575060008181526020819052604090206003015460ff165b1561083e576001820191505b6001016107e5565b5092915050565b60075481565b60085481565b60045433600160a060020a0390811691161461087457600080fd5b600160a060020a038116600090815260026020526040902054819060ff161561089c57600080fd5b81600160a060020a03811615156108b257600080fd5b60038054905060010160055460328211806108cc57508181115b806108d5575080155b806108de575081155b156108e857600080fd5b600160a060020a0385166000908152600260205260409020805460ff1916600190811790915560038054909181016109208382611362565b506000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387169081179091557ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d60405160405180910390a25050505050565b600080805b600354811015610a0557600084815260016020526040812060038054919291849081106109b657fe5b6000918252602080832090910154600160a060020a0316835282019290925260400190205460ff16156109ea576001820191505b6005548214156109fd5760019250610a05565b60010161098d565b5050919050565b6000805b600354811015610a755760008381526001602052604081206003805491929184908110610a3957fe5b6000918252602080832090910154600160a060020a0316835282019290925260400190205460ff1615610a6d576001820191505b600101610a10565b50919050565b60006020819052908152604090208054600182015460028301546003909301549192600160a060020a039091169160ff1684565b610ab761138b565b6003805480602002602001604051908101604052809291908181526020018280548015610b0d57602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610aef575b5050505050905090565b610b1f61138b565b610b2761138b565b600080600654604051805910610b3a5750595b9080825280602002602001820160405250925060009150600090505b600654811015610bcf57858015610b7f575060008181526020819052604090206003015460ff16155b80610ba35750848015610ba3575060008181526020819052604090206003015460ff165b15610bc75780838381518110610bb557fe5b60209081029091010152600191909101905b600101610b56565b878703604051805910610bdf5750595b908082528060200260200182016040525093508790505b86811015610c3457828181518110610c0a57fe5b906020019060200201518489830381518110610c2257fe5b60209081029091010152600101610bf6565b505050949350505050565b610c4761138b565b610c4f61138b565b6003546000908190604051805910610c645750595b9080825280602002602001820160405250925060009150600090505b600354811015610d2c5760008581526001602052604081206003805491929184908110610ca957fe5b6000918252602080832090910154600160a060020a0316835282019290925260400190205460ff1615610d24576003805482908110610ce457fe5b600091825260209091200154600160a060020a0316838381518110610d0557fe5b600160a060020a03909216602092830290910190910152600191909101905b600101610c80565b81604051805910610d3a5750595b90808252806020026020018201604052509350600090505b81811015610d9b57828181518110610d6657fe5b90602001906020020151848281518110610d7c57fe5b600160a060020a03909216602092830290910190910152600101610d52565b505050919050565b60065481565b60045433600160a060020a03908116911614610dc457600080fd5b600354816032821180610dd657508181115b80610ddf575080155b80610de8575081155b15610df257600080fd5b60058390557fa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a8360405190815260200160405180910390a1505050565b33600160a060020a03811660009081526002602052604090205460ff161515610e5757600080fd5b6000828152602081905260409020600101548290600160a060020a03161515610e7f57600080fd5b600083815260016020908152604080832033600160a060020a038116855292529091205484919060ff1615610eb357600080fd5b6000858152600160208181526040808420600160a060020a033316808652925292839020805460ff191690921790915586917f4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef905160405180910390a3610f19856110d5565b5050505050565b603281565b60055481565b60045460009033600160a060020a03908116911614610f4957600080fd5b600160a060020a038316600090815260026020526040902054839060ff161515610f7257600080fd5b600160a060020a038316600090815260026020526040902054839060ff1615610f9a57600080fd5b600092505b6003548310156110335784600160a060020a0316600384815481101515610fc257fe5b600091825260209091200154600160a060020a031614156110285783600384815481101515610fed57fe5b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055611033565b600190920191610f9f565b600160a060020a03808616600081815260026020526040808220805460ff199081169091559388168252908190208054909316600117909255907f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b90905160405180910390a283600160a060020a03167ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d60405160405180910390a25050505050565b6000818152602081905260408120600301548190839060ff16156110f857600080fd5b6000848152602081905260409020925061111184610988565b915081806111275750611127836002015461131a565b1561121d5760038301805460ff191660011790558115156111515760028301546009805490910190555b60018301546002840154600160a060020a039091169080156108fc0290604051600060405180830381858888f19350505050156111cd5760028301546001840154600160a060020a0316857f5500acec7deb8f6f31b06640ee727f8de4ac037b37e80ea92a8ce714eb70a35060405160405180910390a461121d565b837f526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b7923660405160405180910390a260038301805460ff1916905581151561121d576002830154600980549190910390555b50505050565b60095481565b600082600160a060020a038116151561124157600080fd5b600654915060806040519081016040908152838252600160a060020a038616602080840191909152818301869052600060608401819052858152908190522081518155602082015160018201805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055604082015181600201556060820151600391909101805460ff191691151591909117905550600680546001019055817fc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e5160405160405180910390a25092915050565b60006008546201518001421115611335574260085560006009555b6007548260095401118061134c5750600954828101105b156113595750600061135d565b5060015b919050565b8154818355818115116113865760008381526020902061138691810190830161139d565b505050565b60206040519081016040526000815290565b6107de91905b808211156113b757600081556001016113a3565b50905600a165627a7a72305820e2289652e35b20ae7d0ecca4292de9045fcb398ddcbb09ca8fd7e247b7746f870029",
  "networks": {
    "4": {
      "links": {},
      "address": "0xadb23ff307c7b264f92710946e0a1f4b51ff603c"
    },
    "1": {
      "links": {},
      "address": "0x0"
    },
  }
}
);
