const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(db);  // Ensure db.json is in the root directory
const middlewares = jsonServer.defaults();

// Use middlewares and router for mock API
server.use(middlewares);
server.use(router);

// Export the handler for Vercel to use
module.exports = (req, res) => {
  server(req, res);
};


const db = {
    "users": [
        {
            "id": "9c30c7d4-1180-4b8b-8a95-fae7a3e6f4a2",
            "firstName": "Admin",
            "lastName": "User",
            "isDeleted": false,
            "roleId": "5cfd3b38-fd0b-4b2d-aee4-b69f7e7bbfc1",
            "createdAt": "2024-11-01T10:00:00Z",
            "updatedAt": "2024-11-28T14:30:00Z"
        },
        {
            "id": "b1e92bb4-5de3-4fe5-bf4b-f84f10e60a8b",
            "firstName": "John",
            "lastName": "Doe",
            "isDeleted": false,
            "roleId": "55d0f27d-944f-4fc4-bb39-e268912b9df0",
            "classId": "a9f12b7c-c9b4-429b-b184-31901d0ef0b7",
            "createdAt": "2024-11-01T10:30:00Z",
            "updatedAt": "2024-11-28T14:00:00Z"
        },
        {
            "id": "3f7e83d9-0495-45d0-8c6a-05e66b9ef2db",
            "firstName": "Jane",
            "lastName": "Smith",
            "isDeleted": false,
            "roleId": "d02a5134-8a0a-4da9-9fe4-9bc8d3202d9c",
            "classId": "7b597ad0-e68d-42db-b72e-2f52b4d759fa",
            "createdAt": "2024-11-05T09:30:00Z",
            "updatedAt": "2024-11-28T13:50:00Z"
        }
    ],
    "user-classes" : [
        {
            "userId" : "b1e92bb4-5de3-4fe5-bf4b-f84f10e60a8b",
            "classId" : "7b597ad0-e68d-42db-b72e-2f52b4d759fa"
        },
        {
            "userId" : "d02a5134-8a0a-4da9-9fe4-9bc8d3202d9c",
            "classId" : "a9f12b7c-c9b4-429b-b184-31901d0ef0b7"
        }
    ],
    "classes": [
        {
            "id": "a9f12b7c-c9b4-429b-b184-31901d0ef0b7",
            "name": "Class A",
            "grade": "10",
            "section": "A",
            "teacherId": "b1e92bb4-5de3-4fe5-bf4b-f84f10e60a8b"
        },
        {
            "id": "7b597ad0-e68d-42db-b72e-2f52b4d759fa",
            "name": "Class B",
            "grade": "11",
            "section": "B",
            "teacherId": "3f7e83d9-0495-45d0-8c6a-05e66b9ef2db"
        }
    ],
    "subjects": [
        {
            "id": "eb076a83-5644-455f-bc2f-1e896da29580",
            "name": "Mathematics",
            "classId": ["a9f12b7c-c9b4-429b-b184-31901d0ef0b7", "7b597ad0-e68d-42db-b72e-2f52b4d759fa"]
        },
        {
            "id": "82c5db45-6e98-46b8-bf74-25d04f1255bb",
            "name": "Science",
            "classId": ["a9f12b7c-c9b4-429b-b184-31901d0ef0b7"]
        }
    ],
    "attendance": [
        {
            "id": "fd219fcb-c82c-4e48-a820-2d4c9eaaef73",
            "userId": "3f7e83d9-0495-45d0-8c6a-05e66b9ef2db",
            "classId": "a9f12b7c-c9b4-429b-b184-31901d0ef0b7",
            "date": "2024-11-28",
            "status": "present"
        },
        {
            "id": "c6e3f2c8-bb90-44b2-8b6f-d7e2769062be",
            "userId": "b1e92bb4-5de3-4fe5-bf4b-f84f10e60a8b",
            "classId": "7b597ad0-e68d-42db-b72e-2f52b4d759fa",
            "date": "2024-11-29",
            "status": "absent"
        }
    ],
    "timeTables": [
        {
            "id": "fd219fcb-c82c-4e48-a820-2d4c9eaaef73",
            "classId": "a9f12b7c-c9b4-429b-b184-31901d0ef0b7",
            "day": "Monday",
            "time": "08:00 - 09:00",
            "subjectId": "eb076a83-5644-455f-bc2f-1e896da29580",
            "teacherId": "b1e92bb4-5de3-4fe5-bf4b-f84f10e60a8b"
        },
        {
            "id": "c6e3f2c8-bb90-44b2-8b6f-d7e2769062be",
            "classId": "7b597ad0-e68d-42db-b72e-2f52b4d759fa",
            "day": "Tuesday",
            "time": "09:00 - 10:00",
            "subjectId": "82c5db45-6e98-46b8-bf74-25d04f1255bb",
            "teacherId": "3f7e83d9-0495-45d0-8c6a-05e66b9ef2db"
        }
    ],
    "roles": [
        {
            "id": "5cfd3b38-fd0b-4b2d-aee4-b69f7e7bbfc1",
            "name": "Admin",
            "isDeleted": false,
            "permissions": [
                {"module": "profile", "action": "view", "id": "73b42187-f79d-4002-b410-9a35f2c5c7a7"},
                {"module": "attendance", "action": "view", "id": "eb3b2e42-b0c5-45a9-9449-92ed4f14c650"},
                {"module": "attendance", "action": "manage", "id": "ad28c56f-1323-437f-baf1-0d65dbe62b92"},
                {"module": "classes", "action": "view", "id": "b6a3b42b-b602-42d0-b7a7-e4e0b079dff5"},
                {"module": "subjects", "action": "manage", "id": "56d6ff3a-368d-4a91-b7fc-9c64abfa11a4"},
                {"module": "timeTable", "action": "manage", "id": "d7f54c73-5e61-47a1-92c3-2a3ed322b0c3"}
            ]
        },
        {
            "id": "55d0f27d-944f-4fc4-bb39-e268912b9df0",
            "name": "Teacher",
            "isDeleted": false,
            "permissions": [
                {"module": "profile", "action": "view", "id": "73b42187-f79d-4002-b410-9a35f2c5c7a7"},
                {"module": "attendance", "action": "view", "id": "eb3b2e42-b0c5-45a9-9449-92ed4f14c650"},
                {"module": "attendance", "action": "take", "id": "6e741d2f-22bc-4874-a5b2-31d2f5ea46d5"},
                {"module": "classes", "action": "view", "id": "b6a3b42b-b602-42d0-b7a7-e4e0b079dff5"},
                {"module": "timeTable", "action": "view", "id": "d7f54c73-5e61-47a1-92c3-2a3ed322b0c3"}
            ]
        },
        {
            "id": "d02a5134-8a0a-4da9-9fe4-9bc8d3202d9c",
            "name": "Student",
            "isDeleted": false,
            "permissions": [
                {"module": "profile", "action": "view", "id": "73b42187-f79d-4002-b410-9a35f2c5c7a7"},
                {"module": "attendance", "action": "view", "id": "eb3b2e42-b0c5-45a9-9449-92ed4f14c650"}
            ]
        }
    ],
    "permissions": [
        {"id": "73b42187-f79d-4002-b410-9a35f2c5c7a7", "name": "view profile"},
        {"id": "eb3b2e42-b0c5-45a9-9449-92ed4f14c650", "name": "view attendance"},
        {"id": "ad28c56f-1323-437f-baf1-0d65dbe62b92", "name": "manage attendance"},
        {"id": "b6a3b42b-b602-42d0-b7a7-e4e0b079dff5", "name": "view classes"},
        {"id": "56d6ff3a-368d-4a91-b7fc-9c64abfa11a4", "name": "manage subjects"},
        {"id": "d7f54c73-5e61-47a1-92c3-2a3ed322b0c3", "name": "manage timetable"},
        {"id": "6e741d2f-22bc-4874-a5b2-31d2f5ea46d5", "name": "take attendance"}
    ],
    "appSetting": {
        "attendanceThreshold": 75,
        "semesterStart": "2024-09-01",
        "semesterEnd": "2025-06-30",
        "schoolName": "Springfield High School"
    }
}
