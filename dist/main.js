"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const User_1 = require("./entities/User");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", userRoutes_1.default);
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "cruddb",
    entities: [User_1.User],
    synchronize: true,
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => console.log("Server running on port 3000"));
})
    .catch((error) => console.log("Database connection error:", error));
