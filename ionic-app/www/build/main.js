webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the SocketProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var SocketProvider = (function () {
    function SocketProvider(http) {
        this.http = http;
        this.BASE_URL = 'http://ec2-52-11-34-4.us-west-2.compute.amazonaws.com:8080';
    }
    /*
  * Method to connect the users to socket
  */
    SocketProvider.prototype.connectSocket = function (userId) {
        console.log("socket || connectSocket trace id:-" + userId);
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(this.BASE_URL, { query: "userId=" + userId });
    };
    /*
  * Method to emit the add-messages event.
  */
    SocketProvider.prototype.sendMessage = function (message) {
        console.log("socket || sendMessage trace id:-" + message);
        this.socket.emit('add-message', message);
    };
    SocketProvider.prototype.receiveMessages = function () {
        var _this = this;
        console.log("socket || receiveMessages trace id:-");
        var observable = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('add-message-response', function (data) {
                console.log(data);
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    /*
  * Method to receive chat-list-response event.
  */
    SocketProvider.prototype.getChatList = function (userId) {
        var _this = this;
        console.log("socket || getChatList trace id:-" + userId);
        this.socket.emit('chat-list', { userId: userId });
        var observable = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('chat-list-response', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return SocketProvider;
}());
SocketProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], SocketProvider);

//# sourceMappingURL=socket.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_login__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, loginProvider, navParams) {
        this.navCtrl = navCtrl;
        this.loginProvider = loginProvider;
        this.navParams = navParams;
    }
    // nextpage(){
    //   if(this.email=="subham", this.password=="subham"){
    //      this.navCtrl.push(ListPage)
    //   }
    //  else{
    //      console.log('enter right password');
    //    }
    // }
    //   
    HomePage.prototype.submit = function (value) {
        var _this = this;
        // const value={
        //   email = this.email,
        //   password=this.password
        // }
        this.loginProvider.checkValidation({
            'username': this.username,
            'password': this.password
        }, function (error, data) {
            if (error) {
                throw error;
            }
            else {
                if (!data.error) {
                    debugger;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */], { id: data.userId });
                }
                else {
                    alert('Error');
                }
            }
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"F:\server\New folder (2)\chatMeMe\ionic-app\src\pages\home\home.html"*/'<!--<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n <ion-item>\n\n    <ion-label floating>email</ion-label>\n\n    <ion-input [(ngModel)]="email" type="text" value="email"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>Password</ion-label>\n\n    <ion-input [(ngModel)]="password"  type="password" value="password"></ion-input>\n\n  </ion-item>\n\n<button primary block (click)="submit()">click to go next page</button>\n\n</ion-list>\n\n\n\n</ion-content>-->\n\n<ion-content>\n\n  <header class="gradient-bg">\n\n    <div class="topbar"></div>\n\n    <p class="margin-0">Live Support <span>|</span> Online</p>\n\n    <div class="logo">\n\n      <img src="assets/images/logo.png" />\n\n    </div>\n\n    <div class="line-green"></div>\n\n  </header>\n\n\n\n  <section class="login_section" text-center>\n\n   \n\n    <form class="custom_form">\n\n       <p>Please login to your dashboard</p>\n\n       <div class="form-group">\n\n          <input type [(ngModel)]="username" name="username" class="form-control" placeholder="Username"/>\n\n       </div>\n\n       <div class="form-group">\n\n          <input type [(ngModel)]="password"  type="password" name="password" class="form-control" placeholder="Password"/>\n\n       </div>\n\n       <div class="form-group">\n\n          <button type="submit" class="gradient-bg custom_btn" (click)="submit(value)" ion-button round>Login</button>\n\n       </div>\n\n    </form>\n\n  </section>\n\n</ion-content>'/*ion-inline-end:"F:\server\New folder (2)\chatMeMe\ionic-app\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_login_login__["a" /* LoginProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ListPage = (function () {
    function ListPage(navCtrl, navParams, socketProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socketProvider = socketProvider;
        this.username = null;
        this.userId = null;
        this.socketId = null;
        this.chatListUsers = [];
        this.message = '';
        this.messages = [];
        this.selectedSocketId = null;
        this.selectedUserName = null;
        this.id = this.navParams.get('id');
        this.socketProvider.connectSocket(this.id);
        console.log("list || constructor trace id:-" + this.id);
        this.socketProvider.getChatList(this.id).subscribe(function (response) {
            if (!response.error) {
                if (response.singleUser) {
                    /*
                    * Removing duplicate user from chat list array.
                    */
                    if (_this.chatListUsers.length > 0) {
                        _this.chatListUsers = _this.chatListUsers.filter(function (obj) {
                            return obj._id !== response.chatList._id;
                        });
                    }
                    /*
                    * Adding new online user into chat list array
                    */
                    _this.chatListUsers.push(response.chatList);
                }
                else if (response.userDisconnected) {
                    _this.chatListUsers = _this.chatListUsers.filter(function (obj) {
                        return obj.socketId !== response.socketId;
                    });
                }
                else {
                    /*
                    * Updating entire chatlist if user logs in.
                    */
                    _this.chatListUsers = response.chatList;
                    console.log("chatlist length:-" + _this.chatListUsers.length);
                }
            }
            else {
                alert("Chat list failure.");
            }
        });
        /*
                    * subscribing for messages statrts
                    */
        this.socketProvider.receiveMessages().subscribe(function (response) {
            if (_this.selectedUserId && _this.selectedUserId == response.fromUserId) {
                _this.messages.push(response);
                setTimeout(function () {
                    document.querySelector(".message-thread").scrollTop = document.querySelector(".message-thread").scrollHeight;
                }, 100);
            }
        });
    }
    /*
        * Method to select the user from the Chat list starts
        */
    ListPage.prototype.selectedUser = function (user) {
        this.selectedUserId = user._id;
        console.log("list || selectedUser end user  id:-" + user._id + "end user socketid" + user.socketId);
        this.selectedSocketId = user.socketId;
        this.selectedUserName = user.username;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */], { userId: this.id, toUserId: this.selectedUserId, toSocketId: this.selectedSocketId });
        /*
            * calling method to get the messages
            */
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"F:\server\New folder (2)\chatMeMe\ionic-app\src\pages\list\list.html"*/'<!--\n  Generated template for the ListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n\n  <ion-navbar>\n    <ion-title>Chat list</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  	<div class="col-md-4">\n			<div class="user-list-wrapper">\n				<ul class="user-list">\n					<li *ngFor="let user of chatListUsers"\n						>\n						{{ user.username}}\n					</li>\n				</ul>\n			</div>\n		</div>\n\n</ion-content>-->\n\n\n\n<!--\n  Generated template for the ListofchatsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="bg-gray">\n	<header class="gradient-bg headerheight-90">\n		<div class="topbar"></div>\n		<ion-grid text-center>\n			<ion-row>\n				<ion-col col-3 padding-top>\n					<div class="menu" text-left>\n						<svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;"\n						 xml:space="preserve" width="21px">\n							<g>\n								<g>\n									<path d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03    c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"\n									 fill="#FFFFFF" />\n									<path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03    S379.58,180.455,372.939,180.455z"\n									 fill="#FFFFFF" />\n									<path d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606    c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"\n									 fill="#FFFFFF" />\n								</g>\n								<g>\n								</g>\n								<g>\n								</g>\n								<g>\n								</g>\n								<g>\n								</g>\n								<g>\n								</g>\n								<g>\n								</g>\n							</g>\n						</svg>\n\n					</div>\n				</ion-col>\n				<ion-col col-6>\n					<p class="margin-0"><small>Live Support <span>|</span> Online</small></p>\n					<p class="user-name">List of Chats</p>\n				</ion-col>\n				<ion-col col-3 padding-top text-right>\n					<div class="notifications">\n						<svg x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="25px">\n							<g>\n								<g>\n									<g>\n										<path d="M65.192,272.872c-3.979-4.342-10.727-4.641-15.071-0.659c-1.233,1.13-2.509,2.27-3.825,3.427     c-4.425,3.888-4.862,10.627-0.975,15.053c2.111,2.401,5.056,3.628,8.019,3.628c2.5,0,5.01-0.874,7.036-2.653     c1.431-1.257,2.817-2.498,4.156-3.726C68.876,283.963,69.172,277.215,65.192,272.872z"\n										 fill="#FFFFFF" />\n										<path d="M72.339,265.417c1.856,1.292,3.979,1.913,6.083,1.913c3.373,0,6.692-1.597,8.765-4.575     c17.563-25.238,20.206-50.18,23.705-95.725c0.452-5.874-3.943-11.002-9.819-11.453c-5.891-0.451-11.001,3.946-11.452,9.819     c-3.296,42.902-5.519,64.445-19.943,85.174C66.309,255.404,67.503,262.053,72.339,265.417z"\n										 fill="#FFFFFF" />\n										<path d="M398.336,147.832c1.069,5.012,5.495,8.446,10.422,8.446c0.735,0,1.484-0.077,2.234-0.237     c5.76-1.228,9.438-6.894,8.208-12.655c-0.439-2.064-0.925-4.142-1.442-6.177c-1.452-5.709-7.259-9.162-12.966-7.71     c-5.709,1.452-9.161,7.257-7.709,12.966C397.532,144.233,397.954,146.039,398.336,147.832z"\n										 fill="#FFFFFF" />\n										<path d="M465.484,275.453c-31.224-25.969-38.083-51.269-42.433-101.768c-0.507-5.87-5.679-10.221-11.543-9.711     c-5.869,0.506-10.217,5.674-9.711,11.542c4.698,54.531,13.383,85.849,50.046,116.339c1.994,1.658,4.411,2.466,6.815,2.466     c3.06,0,6.098-1.31,8.208-3.846C470.632,285.945,470.013,279.22,465.484,275.453z"\n										 fill="#FFFFFF" />\n										<path d="M441.904,314.239c-0.142-0.284-0.295-0.559-0.463-0.828c-2.579-4.601-5.867-8.114-9.823-10.396     c-28.787-16.613-46.208-61.816-51.781-134.352c-4.133-53.8-42.494-97.895-92.406-111.187c3.738-5.813,5.915-12.72,5.915-20.129     C293.347,16.754,276.592,0,255.998,0c-20.592,0-37.346,16.754-37.346,37.348c0,7.409,2.179,14.315,5.915,20.129     c-49.912,13.291-88.273,57.387-92.408,111.187c-5.573,72.536-22.994,117.738-51.779,134.352     c-8.337,4.811-13.755,15.027-15.665,29.548c-1.239,9.426-1.621,29.217,5.817,36.649c2,1.999,4.713,3.122,7.539,3.122h113.823     c5.104,30.781,31.9,54.332,64.107,54.332c32.206,0,59.001-23.551,64.107-54.332h113.821c2.827,0,5.539-1.123,7.539-3.122     c7.44-7.437,7.056-27.234,5.814-36.663C446.33,325.338,444.513,319.191,441.904,314.239z M255.998,21.333     c8.831,0,16.015,7.184,16.015,16.015c0,8.83-7.183,16.014-16.015,16.014c-8.829,0-16.013-7.184-16.013-16.014     C239.986,28.517,247.17,21.333,255.998,21.333z M255.998,405.333c-20.398,0-37.569-14.061-42.341-32.998h84.681     C293.567,391.272,276.396,405.333,255.998,405.333z M426.234,351.002H85.763c-0.442-3.487-0.675-8.542-0.067-14.235     c1.021-9.532,3.756-14.356,5.346-15.275c35.748-20.631,56.156-70.087,62.387-151.194c4.118-53.609,49.173-95.603,102.568-95.603     c53.396,0,98.45,41.995,102.568,95.603c2.998,39.019,9.285,70.691,18.975,95.374h-40.1c-5.889,0-10.667,4.775-10.667,10.667     s4.778,10.667,10.667,10.667h50.323c4.822,8.249,10.221,15.35,16.197,21.333H297.596c-5.889,0-10.667,4.775-10.667,10.667     c0,5.891,4.778,10.667,10.667,10.667H425.05c0.512,1.988,0.953,4.338,1.248,7.093     C426.909,342.459,426.675,347.514,426.234,351.002z"\n										 fill="#FFFFFF" />\n\n\n									</g>\n								</g>\n							</g>\n						</svg>\n						<svg class="margin-bottom-4 margin-right-0" x="0px" y="0px" viewBox="0 0 54 54" style="enable-background:new 0 0 54 54;"\n						 xml:space="preserve" width="21px">\n							<g>\n								<path d="M53.188,23.518l-3.128-0.602c-1.842-0.354-3.351-1.607-4.035-3.354c-0.686-1.745-0.433-3.69,0.677-5.203l1.964-2.679   c0.292-0.397,0.249-0.949-0.1-1.298l-4.242-4.242c-0.339-0.339-0.871-0.39-1.268-0.121l-2.638,1.786   c-1.552,1.052-3.505,1.231-5.224,0.482c-1.719-0.75-2.916-2.305-3.201-4.158l-0.505-3.282C31.413,0.36,30.994,0,30.5,0h-6   c-0.479,0-0.892,0.34-0.982,0.812l-0.777,4.04c-0.347,1.801-1.565,3.296-3.26,3.997c-1.694,0.704-3.613,0.507-5.131-0.521   L10.944,6.02c-0.397-0.268-0.929-0.218-1.268,0.121l-4.243,4.242c-0.349,0.349-0.391,0.9-0.1,1.299l1.964,2.679   c1.109,1.512,1.362,3.457,0.677,5.203c-0.686,1.745-2.194,2.999-4.036,3.353l-3.128,0.602C0.34,23.608,0,24.021,0,24.5v6   c0,0.493,0.36,0.913,0.848,0.988l3.283,0.505c1.853,0.285,3.408,1.481,4.157,3.2c0.75,1.72,0.57,3.673-0.482,5.226L6.02,43.057   c-0.269,0.396-0.218,0.929,0.121,1.268l4.242,4.242c0.349,0.348,0.899,0.393,1.298,0.1l2.679-1.964   c1.512-1.109,3.457-1.365,5.202-0.677c1.746,0.685,3,2.193,3.354,4.035l0.602,3.128C23.608,53.66,24.021,54,24.5,54h6   c0.494,0,0.914-0.36,0.988-0.848l0.355-2.309c0.292-1.896,1.523-3.465,3.294-4.198c1.771-0.73,3.751-0.495,5.297,0.64l1.884,1.381   c0.399,0.293,0.95,0.248,1.298-0.1l4.242-4.242c0.339-0.339,0.39-0.871,0.121-1.268l-1.786-2.638   c-1.052-1.553-1.232-3.506-0.482-5.225c0.75-1.72,2.304-2.916,4.158-3.201l3.282-0.505C53.64,31.413,54,30.993,54,30.5v-6   C54,24.021,53.66,23.608,53.188,23.518z M52,29.642l-2.435,0.375c-2.535,0.39-4.661,2.026-5.687,4.378   c-1.025,2.351-0.779,5.022,0.66,7.146l1.323,1.954l-3.052,3.052l-1.192-0.874c-2.115-1.551-4.822-1.875-7.246-0.874   c-2.422,1.004-4.107,3.149-4.505,5.741L29.642,52h-4.316l-0.446-2.316c-0.484-2.52-2.2-4.583-4.588-5.521   c-2.385-0.937-5.047-0.589-7.115,0.926l-1.987,1.457l-3.052-3.052l1.324-1.954c1.438-2.123,1.685-4.795,0.659-7.146   c-1.026-2.351-3.152-3.987-5.687-4.377L2,29.642v-4.315l2.317-0.445c2.519-0.484,4.582-2.199,5.52-4.587   c0.937-2.388,0.591-5.048-0.926-7.117L7.454,11.19l3.052-3.052l2.723,1.845c2.077,1.407,4.701,1.675,7.018,0.713   c2.317-0.96,3.984-3.004,4.458-5.468L25.326,2h4.316l0.375,2.435c0.39,2.535,2.027,4.661,4.378,5.687   c2.351,1.026,5.022,0.778,7.146-0.659l1.954-1.323l3.052,3.052l-1.457,1.986c-1.517,2.068-1.863,4.729-0.925,7.117   c0.937,2.388,3,4.103,5.52,4.587L52,25.326V29.642z"\n								 fill="#FFFFFF" />\n								<path d="M27.5,17C21.71,17,17,21.71,17,27.5S21.71,38,27.5,38S38,33.29,38,27.5S33.29,17,27.5,17z M27.5,36   c-4.687,0-8.5-3.813-8.5-8.5s3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5S32.187,36,27.5,36z"\n								 fill="#FFFFFF" />\n								<path d="M27.5,22c-3.033,0-5.5,2.468-5.5,5.5s2.467,5.5,5.5,5.5s5.5-2.468,5.5-5.5S30.533,22,27.5,22z M27.5,31   c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S29.43,31,27.5,31z"\n								 fill="#FFFFFF" />\n							</g>\n						</svg>\n					</div>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n		<div class="line-green"></div>\n	</header>\n	<section padding>\n		<ul class="notification-list">\n			<!--<li class="active">Nandan Mishra <span class="gradient-bg notification-count" float-right>3</span></li>\n			<li>Sukanta Sinha</li>\n			<li>Satyajit Das</li>\n			<li class="active">Sourav Das <span class="gradient-bg notification-count" float-right>11</span></li>\n			<li>Abhijit Banerjee</li>\n			<li>Sanjay Sinha</li>-->\n\n			<li class="active" *ngFor="let user of chatListUsers" (click)="selectedUser(user)">\n				{{ user.username}} <span class="gradient-bg notification-count" float-right>3</span>\n			</li>\n\n		</ul>\n\n	</section>\n</ion-content>'/*ion-inline-end:"F:\server\New folder (2)\chatMeMe\ionic-app\src\pages\list\list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__["a" /* SocketProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__["a" /* SocketProvider */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, socketProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socketProvider = socketProvider;
        this.chats = [];
        this.selectedUserId = null;
        this.selectedSocketId = null;
        this.selectedUserName = null;
        this.username = null;
        this.userId = null;
        this.socketId = null;
        this.chatListUsers = [];
        this.message = '';
        this.messages = [];
        this.selectedSocketId = this.navParams.get('toSocketId');
        this.selectedUserId = this.navParams.get('toUserId');
        this.id = this.navParams.get('userId');
        console.log("chat ts || constructor end user  id:-" + this.selectedUserId + "end user socketid" + this.selectedSocketId + " user id " + this.id);
        this.socketProvider.connectSocket(this.id);
        console.log("list || constructor trace id:-" + this.id);
        this.socketProvider.receiveMessages().subscribe(function (response) {
            if (_this.selectedUserId && _this.selectedUserId == response.fromUserId) {
                _this.messages.push(response);
                setTimeout(function () {
                    document.querySelector(".message-thread").scrollTop = document.querySelector(".message-thread").scrollHeight;
                }, 100);
            }
        });
        ;
    }
    ChatPage.prototype.isUserSelected = function (id) {
        if (!this.selectedUserId) {
            return false;
        }
        return this.selectedUserId === id ? true : false;
    };
    ChatPage.prototype.alignMessage = function (id) {
        return this.id === id ? false : true;
    };
    ChatPage.prototype.sendMessage = function (event) {
        if (this.message === '' || this.message === null) {
            alert("Message can't be empty.");
        }
        else {
            if (this.message === '') {
                alert("Message can't be empty.");
            }
            else if (this.id === '') {
                this.navCtrl.push('/');
            }
            else if (this.selectedUserId === '') {
                alert("Select a user to chat.");
            }
            else {
                debugger;
                var data = {
                    fromUserId: this.id,
                    message: (this.message).trim(),
                    toUserId: this.selectedUserId,
                };
                this.messages.push(data);
                setTimeout(function () {
                    document.querySelector(".message-thread").scrollTop = document.querySelector(".message-thread").scrollHeight;
                }, 100);
                /*
                * calling method to send the messages
                */
                this.message = null;
                this.socketProvider.sendMessage(data);
            }
        }
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"F:\server\New folder (2)\chatMeMe\ionic-app\src\pages\chat\chat.html"*/'<!--\n\n  Generated template for the ChatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>chat room</ion-title>\n\n  </ion-navbar>\n\n  <div class="welcome-user">\n\n    <span>Hello {{username}}</span>\n\n  </div>\n\n\n\n\n\n</ion-header>\n\n\n\n<!--<ion-content padding>\n\n\n\n<ion-list>\n\n    <ion-item *ngFor="let message of chats">{{message}}</ion-item>\n\n  </ion-list>\n\n\n\n  <ion-item>\n\n    <ion-input type="text" [(ngModel)]="chat_input" placeholder="Enter message"></ion-input>\n\n  </ion-item>\n\n  <button ion-button block (click)="send(chat_input)">Send</button>\n\n\n\n  -->\n\n<ion-content>\n\n  <div class="col-md-8">\n\n    <div class="massege-wrapper">\n\n      <div class="massege-container">\n\n\n\n        <div *ngIf="selectedUserName" class="opposite-user">\n\n          Chatting with {{selectedUserName}}\n\n        </div>\n\n\n\n        <ul class="message-thread">\n\n\n\n          <li *ngFor="let message of messages" [class.align-right]="alignMessage(message.toUserId)">\n\n            {{ message.message}}\n\n          </li>\n\n        </ul>\n\n\n\n      </div>\n\n      <div class="message-typer">\n\n\n\n        <div class="message form-control">\n\n          <ion-input type="text" [(ngModel)]="message" placeholder="Enter message"></ion-input>\n\n          <button ion-button block (click)="sendMessage($event)">Send</button>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"F:\server\New folder (2)\chatMeMe\ionic-app\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_socket_socket__["a" /* SocketProvider */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LoginProvider = (function () {
    function LoginProvider(http) {
        this.http = http;
        //private url='http://localhost:3000';
        this.agents = [];
        // console.log('Hello LoginProvider Provider');
    }
    // loginfun(pdata) 
    // {
    //       var link = 'http://localhost:3000/api/agent/login';
    //       var data = JSON.stringify({ email: pdata.email, password: pdata.password });
    //       this.http.post(link, data)
    //       .subscribe(data => {
    //           console.log('success');
    //       }, error => {
    //           console.log("Oooops!");
    //       });
    // }
    LoginProvider.prototype.checkValidation = function (value, callback) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(value.username + value.password);
        return this.http.post('http://ec2-52-11-34-4.us-west-2.compute.amazonaws.com:8080/login', value, { headers: headers }).map(function (response) { return response.json(); })
            .subscribe(function (data) {
            callback(false, data);
        }, function (error) {
            callback(true, 'Error');
        });
    };
    return LoginProvider;
}());
LoginProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], LoginProvider);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_login_login__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_socket_socket__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_login_login__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_socket_socket__["a" /* SocketProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\server\New folder (2)\chatMeMe\ionic-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\server\New folder (2)\chatMeMe\ionic-app\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[219]);
//# sourceMappingURL=main.js.map