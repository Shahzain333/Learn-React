import conf from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client()
    account;

    constructor() {
      this.client.setEndpoint(conf.appWriteUrl)
                 .setProject(conf.appWriteProjectId)
      this.account = new Account(this.client)
    }
    
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call login method if account is created successfully
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error('Error during account creation:', error.message);
            //throw error;
        }
    }

    async login({email, password}) {
        try {
            // return login session
            const session = await this.account.createEmailPasswordSession(email, password);
            return session;
        } catch (error) {
            console.error('Error during login:', error.message);
            // throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            console.log('Appwrite service :: getCurrentUser :: error ', error.message );
            if (error.code === 401) {
                console.warn('Ensure the user is logged in before calling getCurrentUser.');
            }
            //throw error;
        }
        return null;
    } 

    // async function fetchUser() {
    //     try {
    //         await authService.login({ email: "user@example.com", password: "password123" });
    //         const user = await authService.getCurrentUser();
    //         console.log(user);
    //     } catch (error) {
    //         console.error('Error fetching user:', error);
    //     }
    // }

    async logout() {
        try {
            return await this.account.deleteSessions('current');
        } catch (error) {
            console.log('Appwrite service :: logout :: error ', error );
        }
    }
}

const authService = new AuthService();

export default authService;
