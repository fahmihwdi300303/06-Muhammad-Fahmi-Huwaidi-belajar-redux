import { useDispatch, useSelector } from "react-redux";
import { setLogin } from '../redux/auth/authSlice';
import "bootstrap/dist/css/bootstrap.min.css";
import parse from 'html-react-parser';

export default function loginCheck() {
    //const {isLogin} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    function handleAuth(type = 'logout') {
        if (type === 'logout' || type === 'login') {
            dispatch(setLogin({isLogin: type === 'login' ? true : false}));
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-3">
                        <div className="card-header">Status Login</div>
                        <div className="card-body">
                            { isLogin ? 
                                [
                                    parse('<div class="alert alert-success">Yay, berhasil Login!!!</div>'),
                                    <button className="btn btn-md btn-danger" onClick={() => handleAuth('logout')}>Log Out</button>
                                ]
                                :
                                [
                                    parse('<div class="alert alert-dark">Anda telah berhasil Logout!</div>'),
                                    <button className="btn btn-md btn-primary" onClick={() => handleAuth('login')}>Log in</button>
                                ]

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}