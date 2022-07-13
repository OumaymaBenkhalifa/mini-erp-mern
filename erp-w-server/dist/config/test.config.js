"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
let mongo;
beforeAll(async () => {
    mongo = await mongodb_memory_server_1.MongoMemoryServer.create();
    const mongoUri = mongo.getUri();
    await mongoose_1.default.connect(mongoUri);
});
beforeEach(async () => {
    const collections = await mongoose_1.default.connection.db.collections();
    for (const collection of collections) {
        await collection.deleteMany({});
    }
});
afterAll(async () => {
    await mongoose_1.default.connection.close();
    await mongo.stop();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb25maWcvdGVzdC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpRUFBMEQ7QUFDMUQsd0RBQWdDO0FBRWhDLElBQUksS0FBd0IsQ0FBQztBQUU3QixTQUFTLENBQUMsS0FBSyxJQUFJLEVBQUU7SUFDbkIsS0FBSyxHQUFHLE1BQU0seUNBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWhDLE1BQU0sa0JBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7SUFDcEIsTUFBTSxXQUFXLEdBQUcsTUFBTSxrQkFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFL0QsS0FBSyxNQUFNLFVBQVUsSUFBSSxXQUFXLEVBQUU7UUFDcEMsTUFBTSxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsS0FBSyxJQUFJLEVBQUU7SUFDbEIsTUFBTSxrQkFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxNQUFNLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvTWVtb3J5U2VydmVyIH0gZnJvbSAnbW9uZ29kYi1tZW1vcnktc2VydmVyJztcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmxldCBtb25nbzogTW9uZ29NZW1vcnlTZXJ2ZXI7XG5cbmJlZm9yZUFsbChhc3luYyAoKSA9PiB7XG4gIG1vbmdvID0gYXdhaXQgTW9uZ29NZW1vcnlTZXJ2ZXIuY3JlYXRlKCk7XG4gIGNvbnN0IG1vbmdvVXJpID0gbW9uZ28uZ2V0VXJpKCk7XG5cbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChtb25nb1VyaSk7XG59KTtcblxuYmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvbGxlY3Rpb25zID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdGlvbi5kYi5jb2xsZWN0aW9ucygpO1xuXG4gIGZvciAoY29uc3QgY29sbGVjdGlvbiBvZiBjb2xsZWN0aW9ucykge1xuICAgIGF3YWl0IGNvbGxlY3Rpb24uZGVsZXRlTWFueSh7fSk7XG4gIH1cbn0pO1xuXG5hZnRlckFsbChhc3luYyAoKSA9PiB7XG4gIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgYXdhaXQgbW9uZ28uc3RvcCgpO1xufSk7XG4iXX0=