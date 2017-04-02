'use strict';

$(document).ready(function() {

    var student = {
        studentID: 'A1407010503',
        name: 'William',
        age: 26,
        currentSemester: 5,
        registerSubject: function() {
            if (this.currentSemester > 4) {
                document.querySelector("#studentID").innerHTML = this.studentID;
            }
        }
    };

    student.registerSubject();

    function showProps(obj, objName) {
        var result = '';
        for (var i in obj) {
            // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
            if (obj.hasOwnProperty(i)) {
                document.querySelector("#firstPara").innerHTML += objName + '.' + i + ' = ' + obj[i] + "<br />";
            }
        }
        return result;
    }

    showProps(student, "student");
});
