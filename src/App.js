import { useDispatch } from 'react-redux';
import React,{useEffect} from 'react';
import FooterLogo from './components/footer/footer_logo';
import FooterCopyr from './components/footer/footer_copyright';
import FooterNav from './components/footer/footer_nav';
import Subscribe from './components/subscribe/subscribe';
import SideNav from './components/sidenav';
import {fetchData, fetchFilterData, fetchReviewData} from './store/action_creatores';


function App(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData())
    },[])

    useEffect(() => {
        dispatch(fetchFilterData())
    },[])

    useEffect (()=>{
        dispatch(fetchReviewData())
    }, [])

    return (
        <>

            <div className="main-content-wrapper d-flex clearfix">
                <SideNav />
                {props.children}
            </div>

            <Subscribe />

            <footer className="footer_area clearfix">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-4">
                            <div className="single_widget_area">
                                <FooterLogo />

                                <FooterCopyr /> 
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="single_widget_area">
                                <div className="footer_menu">         
                                    <FooterNav />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
