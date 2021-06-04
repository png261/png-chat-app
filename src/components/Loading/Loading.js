import * as SC from './Loading.styles';

const Loading = () => {
    return (
        <SC.Warper>
            <SC.Dots>{Array(6).fill(<SC.Dot></SC.Dot>)}</SC.Dots>
        </SC.Warper>
    );
};

export default Loading;
