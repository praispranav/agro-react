import React, { useEffect } from 'react';
import withRouter from '../Components/Common/withRouter';
//redux
import { useDispatch, useSelector } from "react-redux";
import { changeLayout } from '../store/actions';

const NonAuthLayout = ({ children }) => {
    const {
        layoutModeType, layoutType
    } = useSelector(state => ({
        layoutModeType: state.Layout.layoutModeType,
        layoutType: state.Layout.layoutType
    }));
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(changeLayout('horizontal'))
    },[])

    useEffect(() => {
        if (layoutModeType === "dark") {
            document.body.setAttribute("data-layout-mode", "dark");
        } else {
            document.body.setAttribute("data-layout-mode", "light");
        }
        return () => {
            document.body.removeAttribute("data-layout-mode");
        };
    }, [layoutModeType]);
    return (
        <div>
            {children}
        </div>
    );
};

export default withRouter(NonAuthLayout);