import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (
    idName: string,
    classNames: string,
    Component: any,
    sectionId: number
) =>
    function HOC(props: any) {
        return (
            <div id={idName} className={`app__container ${classNames}`}>
                <SocialMedia />

                <div className='app__wrapper app__flex'>
                    <Component {...props} />

                    <div className='copyright'>
                        <p className='p_text'>@2022 Michel</p>
                        <p className='p_text'>All rights reserved.</p>
                    </div>
                </div>

                <NavigationDots active={sectionId} />
            </div>
        );
    };

export default AppWrap;
