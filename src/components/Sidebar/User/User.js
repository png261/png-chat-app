import { useStateValue } from 'src/StateProvider';
import { Avatar } from '@material-ui/core';
import * as SC from './User.styles.js';

const User = () => {
    const [{ user }, dispatch] = useStateValue();

    const logout = () => {
        dispatch({
            type: 'SET_USER',
            user: null,
        });
    };
    return (
        <SC.Warper>
            <div>
                <SC.Avatar>
                    <Avatar variant="rounded" src={user.avt} alt={user.name} />
                    <SC.Status />
                </SC.Avatar>
                <SC.Name>{user.name}</SC.Name>
            </div>
            <SC.Logout onClick={logout}>Logout</SC.Logout>
        </SC.Warper>
    );
};

export default User;
