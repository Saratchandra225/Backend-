"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
process.on("uncaughtException", (e) => {
    console.error(e);
});
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "10mb", parameterLimit: 50000 }));
app.use((0, cors_1.default)({ origin: "*" }));
app.get("/", (req, res) => {
    return res.send("Welcome to the Insync Backend v1.0.0");
});
app.use("/", router_1.default);
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
//# sourceMappingURL=app.js.map