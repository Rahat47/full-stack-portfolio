import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import styles from './socialmedia.module.scss';

const SocialMedia = () => {
    return (
        <div className={styles.social}>
            <div>
                <BsTwitter />
            </div>

            <div>
                <BsInstagram />
            </div>

            <div>
                <BsGithub />
            </div>

            <div>
                <FaFacebook />
            </div>
        </div>
    );
};

export default SocialMedia;
