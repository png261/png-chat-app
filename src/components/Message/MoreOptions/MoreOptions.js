import * as SC from './MoreOptions.styles';

const MoreOptions = ({ isEditMode, setIsEditMode, deleteMessage }) => {
    return (
        <SC.Warper>
            <SC.Edit onClick={() => setIsEditMode(!isEditMode)}>Edit</SC.Edit>
            <SC.Delete onClick={deleteMessage}>Delete</SC.Delete>
        </SC.Warper>
    );
};

export default MoreOptions;
