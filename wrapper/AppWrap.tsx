import { ComponentType } from 'react';
import { NavigationDots, SocialMedia } from '../components';

export function AppWrap<T>(
    idName: string,
    classNames: string,
    Component: ComponentType<T>,
    sectionId: number
) {
    return function HOC(hocProps: T) {
        return (
            <div id={idName} className={`app__container ${classNames}`}>
                <SocialMedia />

                <div className='app__wrapper app__flex'>
                    <Component {...hocProps} />

                    <div className='copyright'>
                        <p className='p_text'>@2022 Michel</p>
                        <p className='p_text'>All rights reserved.</p>
                    </div>
                </div>

                <NavigationDots active={sectionId} />
            </div>
        );
    };
}

export default AppWrap;
