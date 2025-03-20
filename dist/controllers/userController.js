"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const main_1 = require("../main");
const User_1 = require("../entities/User");
const getRepositorySafely = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!main_1.AppDataSource.isInitialized) {
        yield main_1.AppDataSource.initialize();
    }
    return main_1.AppDataSource.getRepository(User_1.User);
});
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = yield getRepositorySafely();
    const users = yield userRepository.find();
    res.json(users);
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = yield getRepositorySafely();
    const user = yield userRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    res.json(user);
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = yield getRepositorySafely();
    const user = userRepository.create(req.body);
    const savedUser = yield userRepository.save(user);
    res.json(savedUser);
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = yield getRepositorySafely();
    const user = yield userRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    userRepository.merge(user, req.body);
    const updatedUser = yield userRepository.save(user);
    res.json(updatedUser);
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = yield getRepositorySafely();
    const result = yield userRepository.delete(req.params.id);
    res.json(result);
});
exports.deleteUser = deleteUser;
