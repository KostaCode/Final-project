var app = angular.module('indexApp', ['ngRoute']);

app.factory('ContactService', function ($window) {
    //metal index 0, fuel index 1, food index 2, time index 3, crystal index 4
// var mineArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
// var refineryArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
// var farmArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
// var livingQArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
// var storageArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
// var barracksArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
// var machineryArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
// var meleeAttack1 = [[], [], [], [], [], [], [], [], [], []];
// var meleeHealth1 = [[], [], [], [], [], [], [], [], [], []];
// var rangeAttack1 = [[], [], [], [], [], [], [], [], [], []];
// var rangeHealth1 = [[], [], [], [], [], [], [], [], [], []];
// var machineryAttack1 = [[], [], [], [], [], [], [], [], [], []];
// var machineryHealth1 = [[], [], [], [], [], [], [], [], [], []];
// var specResearchArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
// var wallArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
// var meleeArr = [[]];
// var rangeArr = [[]];
// var machineArr = [[]];


function User() {
    this.username = "koko";
    this.password = "koko";
    this.race = null;
    this.coordinates = {
        x: "",
        y: ""
    };
    this.structures = {
        mine: 0,
        refinery: 0,
        farm: 0,
        livingQ: 0,
        storage: 0,
        barracks: 0,
        range: 0,
        machinery: 0,
        research: 0,
        specResearch: 0,
        wall: 0
    };
    this.storage = {
        population: 200,
        resources: 500
    };
    this.resources = {
        metal: 500,
        fuel: 500,
        food: 500,
        crystal: 0,
        population: 0,
    };
    this.army = {
        melee1: 0,
        range1: 0,
        machine1: 0
    };
    this.researches = {
        Melee1: {
            attack: 0,
            health: 0
        },
        Range1: {
            attack: 0,
            health: 0
        },
        Machine1: {
            attack: 0,
            health: 0
        }
    };
    this.specResearches = {

    };
    this.upgradeStructureProcess = {
        process: null,
        type: undefined,
        level: 0,
        time: 0
    };
    this.trainMeleeProcess = {
        process: null,
        type: 0,
        count: 0,
        time: 0
    };
    this.trainRangeProcess = {
        process: null,
        type: 0,
        count: 0,
        time: 0
    };
    this.trainMachineryProcess = {
        process: null,
        type: 0,
        count: 0,
        time: 0
    };
    this.researchProcess = {
        process: null,
        level: 0,
        time: 0,
        type: null
    };
    // this.specResearchProcess = null;
    this.attackProcess = {
        process: null,
        army: null,
        type: null,
        where: null,
        time: 0
    };
    this.startUpgradingStructure = function (structure) {
        // if (this.upgradeStructureProcess.process != null) return;
        console.log(structure);
        var structurelvl, structuresResNeeded;
        switch (structure) {
            case "mine":
                structurelvl = this.structures.mine;
                structuresResNeeded = mineArr;
                break;
            case "refinery":
                structurelvl = this.structures.refinery;
                structuresResNeeded = refineryArr;
                break;
            case "farm":
                structurelvl = this.structures.farm;
                structuresResNeeded = farmArr;
                break;
            case "livingQ":
                structurelvl = this.structures.livingQ;
                structuresResNeeded = livingQArr;
                break;
            case "storage":
                structurelvl = this.structures.storage;
                structuresResNeeded = storageArr;
                break;
            case "barracks":
                structurelvl = this.structures.barracks;
                structuresResNeeded = barracksArr;
                break;
            case "range":
                structurelvl = this.structures.range;
                structuresResNeeded = rangeArr;
                break;
            case "machinery":
                structurelvl = this.structures.machinery;
                structuresResNeeded = machineryArr;
                break;
            case "research":
                structurelvl = this.structures.research;
                structuresResNeeded = researchArr;
                break;
            case "specResearch":
                structurelvl = this.structures.specResearch;
                structuresResNeeded = specResearchArr;
                break;
            case "wall":
                structurelvl = this.structures.wall;
                structuresResNeeded = wallArr;
                break;
        }
        console.log(structuresResNeeded[structurelvl][0]);
        if (this.resources.metal >= structuresResNeeded[structurelvl][0] && this.resources.fuel >= structuresResNeeded[structurelvl][1] && this.resources.food >= structuresResNeeded[structurelvl][2]) {
            this.resources.metal -= structuresResNeeded[structurelvl][0];
            this.resources.fuel -= structuresResNeeded[structurelvl][1];
            this.resources.food -= structuresResNeeded[structurelvl][2];
            this.upgradeStructureProcess.level = structurelvl + 1;
            this.upgradeStructureProcess.time = structuresResNeeded[structurelvl][3];
            this.upgradeStructureProcess.type = structure;
            this.upgradeStructureProcess.process = function (){
                window.setTimeout.call(this, User.upgradeStructure.bind(this,structure), structuresResNeeded[structurelvl][3] * 1000)};
            this.upgradeStructureProcess.process();
        }
    }
    this.upgradeStructure = function (structure) {
        switch (structure) {
            case "mine":
                this.structures.mine++;
                break;
            case "refinery":
                this.structures.refinery++;
                break;
            case "farm":
                this.structures.farm++;
                break;
            case "livingQ":
                this.structures.livingQ++;f
                this.structures.storage++;
                break;
            case "barracks":
                this.structures.barracks++;
                break;
            case "range":
                this.structures.range++;
                break;
            case "machinery":
                this.structures.machinery++;
                break;
            case "research":
                this.structures.research++;
                break;
            case "specResearch":
                this.structures.specResearch++;
                break;
            case "wall":
                this.structures.wall++;
                break;
        }
        this.upgradeStructureProcess.process = null;
        this.upgradeStructureProcess.level = 0;
        this.upgradeStructureProcess.type = undefined;
        this.upgradeStructureProcess.time = 0;
    }
    this.startTraining = function (unit, count) {
        var length = unit.length;
        var unitType;
        var unitSubType = unit.substr(length);
        switch (unit.substr(0, (length - 1))) {
case "melee" : unitType = meleeArr; break;
case "range" : unitType = rangeArr; break;
case "machinery" : unitType = machineryArr; break;
        }
        if (this.resources.food >= unitType[unitSubType][0] * count && this.resources.fuel >= unitType[unitSubType][1] * count && this.resources.metal >= unitType[unitSubType][2] * count) {
            this.resources.metal -= unitType[unitSubType][0];
            this.resources.fuel -= unitType[unitSubType][1];
            this.resources.food -= unitType[unitSubType][2];
            if (unit.substr(0, (length - 1)) === 'melee') {
                this.trainMeleeProcess.process = setTimeout.bind(this, trainMelee(unitSubType, count), unitType[unitSubType][3] * 1000);
                this.trainMeleeProcess.type = unitSubType;
                this.trainMeleeProcess.process();
            }
            if (unit.substr(0, (length - 1)) === 'range') {
                this.trainRangeProcess.process = setTimeout.bind(this, trainRange(unitSubType, count), unitType[unitSubType][3] * 1000);
                this.trainRangeProcess.type = unitSubType;
                this.trainRangeProcess.process();
            }
            if (unit.substr(0, (length - 1)) === 'machine') {
                this.trainMachineryProcess.process = setTimeout.bind(this, trainMachinery(unitSubType, count), unitType[unitSubType][3] * 1000);
                this.trainMachineryProcess.type = unitSubType;
                this.trainMachineryProcess.process();
            }
        }
    }
    this.trainMelee = function (unit, count) {
        switch (unit) {
            case 1:
                this.army.melee1++;
                break;
        }
        if (count === 0) {
            this.trainMeleeProcess.process = null;
            this.trainMeleeProcess.type = 0;
            this.trainMeleeProcess.count = 0;
            this.trainMeleeProcess.time = 0;
            return;
        }
        this.trainMeleeProcess.count = count;
        this.trainMeleeProcess.time = count * unitType[unitSubType][3];
        this.trainMeleeProcess.process = setTimeout.bind(this, trainMelee(unit, (count - 1)), unitType[unitSubType][3] * 1000);
        this.trainMeleeProcess.process();
    }
    this.trainRange = function (unit, count) {
        switch (unit) {
            case 1:
                this.army.range1++;
                break;
        }
        if (count === 0) {
            this.trainRangeProcess.process = null;
            this.trainRangeProcess.type = 0;
            this.trainRangeProcess.count = 0;
            this.trainRangeProcess.time = 0;
            return;
        }
        this.trainRangeProcess.count = count;
        this.trainRangeProcess.time = count * unitType[unitSubType][3];
        this.trainRangeProcess.process = setTimeout.bind(this, trainRange(unit, (count - 1)), unitType[unitSubType][3] * 1000);
        this.trainRangeProcess.process();
    }
    this.trainMachinery = function (unit, count) {
        switch (unit) {
            case 1:
                this.army.machine1++;
                break;
        }
        if (count === 0) {
            this.trainMachineryProcess.process = null;
            this.trainMachineryProcess.type = 0;
            this.trainMachineryProcess.count = 0;
            this.trainMachineryProcess.time = 0;
            return;
        }
        this.trainMachineryProcess.count = count;
        this.trainMachineryProcess.time = count * unitType[unitSubType][3];
        this.trainMachineryProcess.process = setTimeout.bind(this, trainMachinery(unit, (count - 1)), unitType[unitSubType][3] * 1000);
        this.trainMachineryProcess.process();
    }
    // meleeAttack1 meleeHealth1 rangeAttack1 rangeHealth1 machineryAttack1 machineryHealth1
    this.startUpgrading = function (type) {
        var typeArr = type.split("_");
        if (typeArr[0] === "melee1") {
            if (typeArr[1] === "attack") {
                this.researchProcess.level = this.research.melee1.attack + 1;
                this.resources.metal -= unitType[unitSubType][0];
                this.resources.fuel -= unitType[unitSubType][1];
                this.resources.food -= unitType[unitSubType][2];
                this.researchProcess.process = setTimeout.bind(this, upgrade(unit, (count - 1)), unitType[unitSubType][3] * 1000);
            }
            if (typeArr[1] === "health") {

            }
        }
        if (typeArr[0] === "range1") {
            if (typeArr[1] === "attack") {

            }
            if (typeArr[1] === "health") {

            }
        }
        if (typeArr[0] === "machinery1") {
            if (typeArr[1] === "attack") {

            }
            if (typeArr[1] === "health") {

            }
        }
    }
    this.upgrade = function () {

    }
    this.commenceAttack = function (army, target) {

    }
}
  return new User();
});
// app2.controller('ContactController', function ($scope, ContactService) {
    
    // ContactService.User.upgradeStructure(structure);
    // ContactService.User.startTraining(unit, count);
    // ContactService.User.trainMelee(unit, count);
    // ContactService.User.trainRange(unit, count);
    // ContactService.User.trainMachinery(unit, count);
    // ContactService.User.startUpgrading(type);
// });

app.controller('indexController', function ($scope, $http, ContactService, $window) {
var mineArr = [[100,100,100,1], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var refineryArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var farmArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var livingQArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var storageArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var barracksArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var machineryArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var meleeAttack1 = [[], [], [], [], [], [], [], [], [], []];
var meleeHealth1 = [[], [], [], [], [], [], [], [], [], []];
var rangeAttack1 = [[], [], [], [], [], [], [], [], [], []];
var rangeHealth1 = [[], [], [], [], [], [], [], [], [], []];
var machineryAttack1 = [[], [], [], [], [], [], [], [], [], []];
var machineryHealth1 = [[], [], [], [], [], [], [], [], [], []];
var specResearchArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var wallArr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var meleeArr = [[]];
var rangeArr = [[]];
var machineArr = [[]];
    console.log(ContactService);
    $scope.h = ContactService.startUpgradingStructure.bind(ContactService);
    console.log($scope.h);

    // var req = {
    //     method: 'POST',
    //     url: 'http://localhost:3000/structures',
    //     headers: {
    //         'Content-Type': undefined
    //     },
    //     data: { structure: '$mine.attr("id")' }
    // }
    // $http(req).then(function(){}, function(){});
    /*name of the varable that we get from db*/
    $scope.upgStructure = function () {
        var data = { mine: "mine" };
        $http.post('http://localhost:3000/structures', data).then(function (response) {
            console.log(response);
            console.log(response.data.junktion);
        });
    }
    $http.post('http://localhost:3000/index').then(function (response) {
        /*name of the varable that will be made in the scope e.x.*/
        $scope.user = null;
        $scope.user = response.data;
        console.log($scope.user);
        console.log($scope.user[0]);
        console.log($scope.user[0].username);
        // $scope.upgradeMeleHealth = function () {
        //     var data = "melee_health";
        //     $http.post('http//localhost:3000', data).then(
        //         function (response) {

        //         }, function (response) {

        //         });
        // };
    });
});
// structures config and controllers
app.config(function ($routeProvider) {
    $routeProvider
        .when("/structures", {
            templateUrl: "../html/structures.htm",
            controller: "structuresController"
        })
        .when("/army", {
            templateUrl: "../html/army.htm",
            controller: "armyController"
        })
        .when("/research", {
            templateUrl: "../html/research.htm",
            controller: "researchController"
        })
        .when("/training/meleTraining", {
            templateUrl: "../html/trainingMele.htm",
            // templateUrl:"../html/meleTraining.htm",
            controller: "trainingController"
        })
        .when("/training/rangeTraining", {
            templateUrl: "../html/trainingRange.htm",
            // templateUrl:"../html/meleTraining.htm",
            controller: "trainingController"
        })
        .when("/training/machineTraining", {
            templateUrl: "../html/trainingMachines.htm",
            // templateUrl:"../html/meleTraining.htm",
            controller: "trainingController"
        })
        .when("/research/meleResearch", {
            templateUrl: "../html/meleResearch.htm",
            controller: "researchController"
        })
        .when("/research/rangeResearch", {
            templateUrl: "../html/rangeResearch.htm",
            controller: "researchController"
        })
        .when("/research/machineResearch", {
            templateUrl: "../html/machineResearch.htm",
            controller: "researchController"
        })
});
app.controller("structuresController", function ($scope) {
    // mine && mine.level will be resived from the db
    $scope.mine = {};
    $scope.mine.level = "1";
});
// army controllers
app.controller("armyController", function ($scope) {
    $scope.mine = {};
    $scope.mine.level = "1";
});
// training controller
app.controller("trainingController", function ($scope) {
    $scope.mine = {};
    $scope.mine.level = "1";
});
app.controller("researchController", function ($scope) {
    $scope.mine = {};
    $scope.mine.level = "1";
});