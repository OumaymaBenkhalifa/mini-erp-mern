"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const mongoose_1 = __importDefault(require("mongoose"));
const db_config_1 = require("./config/db.config");
mongoose_1.default.connect(db_config_1.dbConfig.DB_URL).then(() => {
    console.log('Successfully connected to MongoDB.');
});
app_1.app.listen(3000, () => console.log('running on port 3000'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLHdEQUFnQztBQUNoQyxrREFBOEM7QUFHOUMsa0JBQVEsQ0FBQyxPQUFPLENBQUMsb0JBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUMsQ0FBQztBQUVILFNBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwIH0gZnJvbSAnLi9hcHAnO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IGRiQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGIuY29uZmlnJztcblxuLy9jb25uZWN0IHRvIG1vbmdvZGJcbm1vbmdvb3NlLmNvbm5lY3QoZGJDb25maWcuREJfVVJMKS50aGVuKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBjb25uZWN0ZWQgdG8gTW9uZ29EQi4nKTtcbn0pO1xuXG5hcHAubGlzdGVuKDMwMDAsICgpID0+IGNvbnNvbGUubG9nKCdydW5uaW5nIG9uIHBvcnQgMzAwMCcpKTtcbiJdfQ==