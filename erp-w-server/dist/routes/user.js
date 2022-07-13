const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.get('/profile', function (req, res, next) {
    res.send(req.user);
});
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInJvdXRlcy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFHaEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDdEMsR0FBRyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBR0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDN0MsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyk7XG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4vKiBHRVQgdXNlcnMgbGlzdGluZy4gKi9cbnJvdXRlci5nZXQoJy8nLCBmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbiAgcmVzLnNlbmQoJ3Jlc3BvbmQgd2l0aCBhIHJlc291cmNlJyk7XG59KTtcblxuLyogR0VUIHVzZXIgcHJvZmlsZS4gKi9cbnJvdXRlci5nZXQoJy9wcm9maWxlJywgZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4gIHJlcy5zZW5kKHJlcS51c2VyKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcbiJdfQ==