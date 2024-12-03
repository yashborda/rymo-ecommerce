import { defineStore } from 'pinia'
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { useNuxtApp } from '#app'; 

const user = JSON.parse(localStorage.getItem('Userdata') ?? '{}');
getAuth().languageCode = 'en';

export const useAuthStore = defineStore('Auth', {
    state: () => {
        return {
            user: user,
            error: null,
            isAuth: false
        }
    },
    getters: {
        isAuthenticated: (state) => !!state.user
    },
    actions: {
        async signIn(email: string, password: string) {
            const { $toast } = useNuxtApp();
            try {
                const { user } = await signInWithEmailAndPassword(getAuth(), email, password)
                localStorage.setItem("Userdata", JSON.stringify(user))
                localStorage.setItem("isAuth", String(true))
                this.user = user
                this.isAuth = true
                $toast.fire({
                    icon: "success",
                    title: this.user.displayName + ", Signed in successfully",
                });
            } catch (error: any) {
                this.error = error.code;
                $toast.fire({
                    icon: "error",
                    title: this.error || 'An error occurred',
                });
            }
        },
        async resetPassword(email: string) {
            const { $toast } = useNuxtApp();
            try {
                await sendPasswordResetEmail(getAuth(), email)
                $toast.fire({
                    icon: "info",
                    title: "please check your email.",
                });
            } catch (error: any) {
                this.error = error.code;
                $toast.fire({
                    icon: "error",
                    title: this.error || 'An error occurred',
                });
            }
        },
        async logout() {
            try {
                this.user = null
                this.isAuth = false
                this.error = null,
                localStorage.clear();
                await signOut(getAuth())
            } catch (error: any) {
                this.error = error.message
            }
        },
        async Registration(username: string, email: string, password: string) {
            const { $toast } = useNuxtApp();
            try {
                await createUserWithEmailAndPassword(getAuth(), email, password)
                    .then((userCredential: any) => {
                        // Signed in 
                        const CredentialUser = userCredential.user;
                        const currentUser = getAuth().currentUser;
                        if (currentUser) {
                            updateProfile(currentUser, { displayName: username })
                                .then(() => {
                                    localStorage.setItem("Userdata", JSON.stringify(CredentialUser))
                                    localStorage.setItem("isAuth", String(true))
                                    this.user = CredentialUser.providerData[0]
                                    this.isAuth = true
                                    $toast.fire({
                                        icon: "success",
                                        title: username + "Signed Up successfully",
                                    });
                                });
                        }
                    })
            } catch (error: any) {
                this.error = error.code;
                $toast.fire({
                    icon: "error",
                    title: this.error || 'An error occurred',
                });
            }
        },
    }
})