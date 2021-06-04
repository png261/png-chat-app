import * as SC from './Home.styles';
import { useStateValue } from 'src/StateProvider';
import logo from 'src/logo.png';
import { siteTitle } from 'src/constants/siteInfo';
import MainLayout from 'src/layouts/MainLayout';

const DefaultScreen = () => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <MainLayout>
            <SC.Warper>
                <img alt="Slack" src={logo} height="34"></img>
                <h1>
                    Hi {user.name} ! Welcome to {siteTitle}
                </h1>
                <p>created by PhuongNguyen</p>
            </SC.Warper>
        </MainLayout>
    );
};

export default DefaultScreen;
