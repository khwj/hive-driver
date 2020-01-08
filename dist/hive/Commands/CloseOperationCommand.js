"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var BaseCommand_1 = __importDefault(require("./BaseCommand"));
var CloseOperationCommand = /** @class */ (function (_super) {
    __extends(CloseOperationCommand, _super);
    function CloseOperationCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloseOperationCommand.prototype.execute = function (data) {
        var request = new this.TCLIService_types.TCloseOperationReq(data);
        return this.executeCommand(request, this.client.CloseOperation);
    };
    return CloseOperationCommand;
}(BaseCommand_1["default"]));
exports["default"] = CloseOperationCommand;
