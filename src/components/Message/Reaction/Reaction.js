import * as SC from './Reaction.styles';
import { kFormatter } from 'src/helpers/number';

const Reaction = ({ value, emoji, onClick }) => {
    return (
        <>
            {value > 0 && (
                <SC.Warper onClick={onClick}>
                    <span role="img">{emoji}</span>
                    {kFormatter(value)}
                </SC.Warper>
            )}
        </>
    );
};

export default Reaction;
