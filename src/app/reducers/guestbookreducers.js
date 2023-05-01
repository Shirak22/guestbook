import { guestbookstore } from "../GuestBookStore/guestbookstore";

const guestbookReducer = (state = guestbookstore, action) => {
    switch (action.type) {
        case "SIGN_GUESTBOOK":
            // Array.some(callbackFN) it returns true or false after testing at least one element pass the test
            //in this case we make sure that the post will be in the store one time based on ID
            let postID = state.posts.length > 0  ? state.posts[state.posts.length - 1].id + 1 : 1; 
                return {
                    ...state,
                    posts: [...state.posts,{id:postID,...action.payload}]
                }
           

        case "REMOVE_POST":
            let postsAfterRemove = state.posts.filter((post) => post.id !== action.payload.id);
            return {
                ...state,
                posts: [...postsAfterRemove]
            }

        case "UPDATE_POST":
            //mapping state posts then update the post that matches with currentPost that will be updated. 
            const updatedPosts = state.posts.map((post) => {
                if (post.id === action.payload.id) {
                    return { ...action.payload }
                }
                return post;
            });

            return {
                ...state,
                posts: [...updatedPosts]
            }

        case "LOGGED_IN" : 
            return {
                ...state,
                currentUser: action.payload
            }

        case "FILL_STORE":
            return {
                ...state,
                posts: [...action.payload]
            }

        default:
            return state;

    }
}


export default guestbookReducer;



