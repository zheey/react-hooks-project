let BASE_URL = "https://afriedu-dev.herokuapp.com/";

export const registerUserUrl = `${BASE_URL}users/register`;
export const userLoginUrl = `${BASE_URL}users/login`;
export const getUserUrl = `${BASE_URL}user`;
export const getUserTestUrl = `${BASE_URL}user-tests/all`;
export const getTestUrl = `${BASE_URL}scholarship/all`;
export const getTestForExamUrl =(examBodyId)=> `${BASE_URL}tests/all?examBodyId=${examBodyId}`;
export const registerUserForTestUrl = `${BASE_URL}user-tests/enroll-subject`;
export const getOneTestUrl = (testId) => `${BASE_URL}tests/one?id=${testId}`;
export const getTestSubjectUrl = (examBodyId) => `${BASE_URL}test-subject/all?examBodyId=${examBodyId}`;
export const getOneUserTestWithSubjectUrl = (userTestId) => `${BASE_URL}user-tests/test?id=${userTestId}`;
export const getOneUserTestSubjectUrl = (userTestSubjectId) => `${BASE_URL}user-test-subject/subject?id=${userTestSubjectId}`;
export const updateOneUserTestUrl = `${BASE_URL}user-tests/one`;
export const getQuestionForSubjectUrl = `${BASE_URL}questions/all`;
export const logUserAnswerUrl = `${BASE_URL}test-log/create`;
export const updateOneUserSubjectUrl = `${BASE_URL}user-test-subject/one`;
export const updateUserProfileUrl = `${BASE_URL}users/update`;
