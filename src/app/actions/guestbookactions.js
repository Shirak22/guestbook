

export const signGuestbook = (post) => ({
    type: "SIGN_GUESTBOOK", 
    payload: post
})

export const removePost = (post) => ({
    type: "REMOVE_POST",                          
    payload: post
})

export const updatePost = (post) => ({
    type: "UPDATE_POST", 
    payload: post
})

export const loggedIn = (username) => ({
    type: "LOGGED_IN",
    payload:username

})


export const fillStore = (posts) => ({
    type: "FILL_STORE",
    payload:posts
})