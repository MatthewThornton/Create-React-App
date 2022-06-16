import React from "react";
import axios from "axios";

const Profile = () => {
    const [isLoadingUser, setLoadingUser] = React.useState(true);
    const [user, setUser] = React.useState(null);
    const URL = 'https://api.github.com/users/MatthewThornton';

    React.useEffect(() => {
        axios.get(URL)
            .then(response => {
                setUser(response.data);
                setLoadingUser(false);
            })
            .catch(error => {
                console.log("error getting user: ", error);
            });
    }, []);

    if (isLoadingUser) {
        return (<span data-testid="WAIT-FOR-USER">...</span>);

    } else {
        console.log("user: ", user);
        return (
            <span>
                <img src={user.avatar_url} width="200px" /> <br />
                <span data-testid='USER-NAME'>{user.name}</span>
            </span>
        );
    }
}
export default Profile;