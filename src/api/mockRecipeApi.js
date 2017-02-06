import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    name: "Toufu",
    id: 1,
    image: "http://maomaomom.com/wp-content/uploads/2011/04/1113.jpg",
    ingredients: ["one piece Toufu", "green onion", "cilantro"],
    directions: ["wash Toufu", "stir"],
    tags: []

  },

  {
    name: "Chicken",
    id: 2,
    image: "http://cdn0.koreanbapsang.com/wp-content/uploads/2015/06/DSC_0947-e1434373804805.jpg",
    ingredients: ["1 chicken", "soy sauce"],
    directions: ["oil", "fry"],
    tags: []

  }
  
];


//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return "3";
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        // const minCourseTitleLength = 1;
        // if (course.title.length < minCourseTitleLength) {
        //   reject(`Title must be at least ${minCourseTitleLength} characters.`);
        // }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          // course.id = generateId(course);
          course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.id == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;