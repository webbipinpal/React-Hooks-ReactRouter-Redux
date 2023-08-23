import { Route } from "react-router"; 
const Welcome = () => {
    return <secton>
        <h1> Welcome Page</h1>
        
        <Route path="/welcome/new-user">
             <h3>Welcome New User!</h3>
        </Route>
       

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </secton>
};

export default Welcome;