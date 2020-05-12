import axios from 'axios'
import {setCurrentUser, getCurrentUser} from "../reduxController/actions/userActions";
import {
    getOneTestUrl, getOneUserTestSubjectUrl, getOneUserTestWithSubjectUrl, getQuestionForSubjectUrl, getTestForExamUrl,
    getTestSubjectUrl,
    getTestUrl,
    getUserTestUrl,
    getUserUrl, logUserAnswerUrl, registerUserForTestUrl,
    registerUserUrl, updateOneUserSubjectUrl, updateOneUserTestUrl, updateUserProfileUrl,
    userLoginUrl
} from "./urls";
import config from '../config'

export function setAuthorisationToken(token) {
    //setup interceptors for 401 errors
    axios.interceptors.response.use(function (response) {
        // Do something with response data
        return response;
    }, function (error) {
        //check the response status
        if (error.response && error.response.status === 401) {
            //clear the local storage
            localStorage.clear();
            //redirect to the login page
            window.location.href = "/login";
        }
        // Do something with response error
        return Promise.reject(error);
    });
    if (token) {
        //setting authorization header
        axios.defaults.headers.common['token'] = token;
        //axios.defaults.withCredentials = true;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}


/**
 * Function to handle user login a user
 * */
export function userAuth(type, params, callback) {

    let url;
    if(type === "register" || type === "sponsor"){
        url = registerUserUrl
    }else{
        url = userLoginUrl
    }

    return axios.post(url, params, {headers: {"Accept": "application/json", "accessKey": config.access}}).then(
            res => {
                const token = res.data.data.token;
                //save token to local storage
                localStorage.setItem('af_tk', token);
                localStorage.setItem('af_user', JSON.stringify(res.data.data.user));
                //add token to request header
                setAuthorisationToken(token);
                //trigger the callback
                callback(true, res.data.data);
            }
        ).catch(
            err => {
                callback(false, err)
            }
        );

}

/**
 * Function to get
 * authenticated user data
 * */
export function getAuthUser() {
    return dispatch => {
        //dispatch the get user action
        dispatch(getCurrentUser());

        return axios.get(getUserUrl).then(
            res => {
                //dispatch the user into the store
                if(res.data.data !== null){
                    dispatch(setCurrentUser({...res.data.data}));
                }
            }
        ).catch(
            err => {
                //log out if error is 404
            }
        );
    }
}

/**
 * Function to get
 * authenticated user tests
 * */
export function getUserTests(callback) {
    return axios.get(getUserTestUrl).then(
        res => {
            callback(true, res.data.data);
        }
    ).catch(
        err => {
            callback(false, err)
        }
    );
}

/**
 * Function to get tests
 * */
export function getTests(callback) {
    return axios.get(getTestUrl).then(
        res => {
            callback(true, res.data.data);
        }
    ).catch(
        err => {
            callback(false, err)
        }
    );
}
/**
 * Function to get tests for an exam body
 * */
export function getTestForExam(param, callback) {
    return axios.get(getTestForExamUrl(param.examBodyId)).then(
        res => {
            callback(true, res.data.data);
        }
    ).catch(
        err => {
            callback(false, err)
        }
    );
}
/**
 * Function to get
 * authenticated user tests
 * */
export function getOneTest(param, callback) {
    return axios.get(getOneTestUrl(param.testId)).then(
        res => {
            callback(true, res.data.data);
        }
    ).catch(
        err => {
            callback(false, err)
        }
    );
}
/**
 * Function to get
 * authenticated tests subjects
 * */
export function getTestSubjects(param, callback) {
    return axios.get(getTestSubjectUrl(param.examBodyId)).then(
        res => {
            callback(true, res.data.data);
        }
    ).catch(
        err => {
            callback(false, err)
        }
    );
}

/**
 * Function to get
 * authenticated tests subjects
 * */
export function registerTestAndSubjects(param, callback) {
    return axios.post(registerUserForTestUrl, param).then(
        res => {
            callback(true, res.data.data);
        }
    ).catch(
        err => {
            callback(false, err)
        }
    );
}

/**
 * Function to get
 *  tests subjects
 * */
export function getOneUserTestWithSubjects(param, callback) {
    return axios.get(getOneUserTestWithSubjectUrl(param.userTestId)).then(
        res => {
            callback(true, res.data.data);
        }
    ).catch(
        err => {
            callback(false, err)
        }
    );
}

/**
 * Function to update user test
 * */
export function updateOneUserTest(param, callback) {
    return axios.put(updateOneUserTestUrl, param).then(
        res => {
            callback(true, res.data.data);
        }
    ).catch(
        err => {
            callback(false, err)
        }
    );
}

/**
 * Function to get
 *  tests subjects
 * */
export function getOneUserTestSubjects(param, callback) {
    return axios.get(getOneUserTestSubjectUrl(param.userTestSubjectId)).then(
        res => {
            callback(true, res.data.data);
        }
    ).catch(
        err => {
            callback(false, err)
        }
    );
}

/**
 * Function to get
 *  tests subjects
 * */
export function getQuestionsForSubject(param, callback) {
    return axios.post(getQuestionForSubjectUrl, param).then(
        res => {
            callback(true, res.data.data);
        }
    ).catch(
        err => {
            callback(false, err)
        }
    );
}

/**
 * Function to save user answer
 * */
export function saveAnswerForSubject(param, callback) {
    return axios.post(logUserAnswerUrl, param).then(
        res => {
            callback(true, res.data.data);
        }
    ).catch(
        err => {
            callback(false, err)
        }
    );
}

/**
 * Function to update
 * user test
 * */
export function updateOneUserTestSubject(param, callback) {
    return axios.put(updateOneUserSubjectUrl, param).then(
        res => {
            callback(true, res.data.data);
        }
    ).catch(
        err => {
            callback(false, err)
        }
    );
}

/**
 * Function to update user profile
 * */
export function updateUserProfile(param, callback) {
    return axios.put(updateUserProfileUrl, param).then(
        res => {
            callback(true, res.data.data);
        }
    ).catch(
        err => {
            callback(false, err)
        }
    );
}