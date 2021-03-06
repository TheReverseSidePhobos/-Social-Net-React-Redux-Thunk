import { connect } from 'react-redux';
import {updateMessageActionCreater} from './../../redux/dialogsReducer';
import {sendMessageActionCreater} from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {Redirect} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) =>{

    return{ 
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) =>{

    return{

        sendMessage: (mewMessageBody) =>{
            dispatch(sendMessageActionCreater(mewMessageBody));
        }
    }
}



// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)