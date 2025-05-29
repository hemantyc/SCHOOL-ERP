document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const dashboard = document.getElementById("dashboard");
    const studentList = document.getElementById("studentList");
    const teacherList = document.getElementById("teacherList");
    const courseList = document.getElementById("courseList");
    const attendanceList = document.getElementById("attendanceList");
    const logoutBtn = document.getElementById("logoutBtn");

    // Sample user credentials
    const validUsername = "admin";
    const validPassword = "admin123";

    // Sample data
    const students = [
        { id: 1, name: "John Doe", grade: "10" },
        { id: 2, name: "Jane Smith", grade: "11" }
    ];
    
    const teachers = [
        { id: 1, name: "Mr. Brown", subject: "Math" },
        { id: 2, name: "Ms. Green", subject: "Science" }
    ];
    
    const courses = [
        { id: 1, name: "Mathematics", code: "MATH101" },
        { id: 2, name: "Biology", code: "BIO101" }
    ];
    
    const attendance = [
        { studentId: 1, date: "2025-05-01", status: "Present" },
        { studentId: 2, date: "2025-05-01", status: "Absent" }
    ];

    // Handle login
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === validUsername && password === validPassword) {
            dashboard.classList.remove("hidden");
            document.getElementById("login").classList.add("hidden");
            loadStudents();
            loadTeachers();
            loadCourses();
            loadAttendance();
        } else {
            document.getElementById("loginMessage").textContent = "Invalid credentials. Please try again.";
        }
    });

    // Logout functionality
    logoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        dashboard.classList.add("hidden");
        document.getElementById("login").classList.remove("hidden");
        loginForm.reset();
    });

    // Load student data
    function loadStudents() {
        studentList.innerHTML = '';
        students.forEach(student => {
            const studentItem = document.createElement("div");
            studentItem.textContent = ${student.name} (Grade: ${student.grade});
            studentList.appendChild(studentItem);
        });
    }

    // Load teacher data
    function loadTeachers() {
        teacherList.innerHTML = '';
        teachers.forEach(teacher => {
            const teacherItem = document.createElement("div");
            teacherItem.textContent = ${teacher.name} (Subject: ${teacher.subject});
            teacherList.appendChild(teacherItem);
        });
    }

    // Load course data
    function loadCourses() {
        courseList.innerHTML = '';
        courses.forEach(course => {
            const courseItem = document.createElement("div");
            courseItem.textContent = ${course.name} (Code: ${course.code});
            courseList.appendChild(courseItem);
        });
    }

    // Load attendance data
    function loadAttendance() {
        attendanceList.innerHTML = '';
        attendance.forEach(record => {
            const attendanceItem = document.createElement("div");
            const student = students.find(s => s.id === record.studentId);
            attendanceItem.textContent = ${student.name} - ${record.date}: ${record.status};
            attendanceList.appendChild(attendanceItem);
        });
    }
});