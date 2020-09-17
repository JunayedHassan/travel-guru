import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';

const LoginManager = () => {

    export const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email, photoURL } = res.user
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    success: true,
                }
                return signedInUser;


            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }


    return (
        <div>

        </div>
    );
};

export default LoginManager;