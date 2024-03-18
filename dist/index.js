"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = __importDefault(require("./router"));
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)({
    credentials: true,
}));
exports.app.use((0, compression_1.default)());
exports.app.use((0, cookie_parser_1.default)());
exports.app.use(body_parser_1.default.json());
const server = http_1.default.createServer(exports.app);
server.listen(8080, () => {
    console.log("Server is running on http://localhost:8080/");
});
const MONGO_URL = "mongodb+srv://chenqiua:beandenzel123333@cluster0.acdfvww.mongodb.net/Todo_App_API";
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect(MONGO_URL);
mongoose_1.default.connection.on("connected", () => console.log("mongoose connected"));
mongoose_1.default.connection.on("error", (error) => console.log(error));
exports.app.use("/", (0, router_1.default)());
//# sourceMappingURL=index.js.map