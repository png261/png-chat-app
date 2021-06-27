import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from 'src/components/Loading/Loading';
import { siteTitle } from 'src/constants/siteInfo';
import { USER_STORAGE_KEY } from 'src/constants/strorageKey';
import { useStateValue } from 'src/StateProvider';
const Home = lazy(() => import('src/pages/Home/Home'));
const Room = lazy(() => import('src/pages/Room/Room'));
const Login = lazy(() => import('src/pages/Login/Login'));

function App() {
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        const storageUser = localStorage.getItem(USER_STORAGE_KEY);
        if (!storageUser) return;

        dispatch({
            type: 'SET_USER',
            user: JSON.parse(storageUser),
        });
    }, []);

    useEffect(() => {
        document.title = siteTitle;
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    }, [user]);

    return (
        <Router>
            {!user ? (
                <Suspense fallback={<Loading />}>
                    <Login />
                </Suspense>
            ) : (
                <Switch>
                    <Route path="/room/:roomId">
                        <Suspense fallback={<Loading />}>
                            <Room />
                        </Suspense>
                    </Route>
                    <Route path="/">
                        <Suspense fallback={<Loading />}>
                            <Home />
                        </Suspense>
                    </Route>
                </Switch>
            )}
        </Router>
    );
}

export default App;
