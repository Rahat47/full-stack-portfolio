import styles from './footer.module.scss';
import images from '../../constants/images';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';
import Image from 'next/image';
import { useState } from 'react';
import { createContact } from '../../services/mutations';

type Props = {};

const Footer = (props: Props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const { name, email, message } = formData;

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        setLoading(true);

        try {
            await createContact({
                name,
                email,
                message,
            });

            setLoading(false);
            setFormSubmitted(true);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setFormSubmitted(false);
        }
    };

    return (
        <>
            <h2 className='head_text'>
                Take a coffee <span>&</span> chat with me
            </h2>

            <div className={styles.footer_cards}>
                <div className={styles.footer_cards__card}>
                    <Image
                        width={40}
                        height={40}
                        src={images.email}
                        alt='email'
                    />
                    <a href='mailto:djrayhan8@gmail.com' className='p_text'>
                        djrayhan8@gmail.com
                    </a>
                </div>

                <div className={styles.footer_cards__card}>
                    <Image
                        width={40}
                        height={40}
                        src={images.mobile}
                        alt='mobile'
                    />
                    <a href='tel: +1 (123) 456-789' className='p_text'>
                        +1 (123) 456-789
                    </a>
                </div>
            </div>

            {!formSubmitted ? (
                <div className={`${styles.footer_form} app__flex`}>
                    <div className='app__flex'>
                        <input
                            type='text'
                            className='p_text'
                            placeholder='Your Name..'
                            name='name'
                            value={name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='app__flex'>
                        <input
                            type='email'
                            className='p_text'
                            placeholder='Your Email..'
                            name='email'
                            value={email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <textarea
                            className='p_text'
                            placeholder='Your Message...'
                            name='message'
                            id='message'
                            cols={30}
                            rows={10}
                            value={message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button
                        type='button'
                        className='p_text'
                        onClick={handleSubmit}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            ) : (
                <div>
                    <h3 className='head_text'>
                        Thank you for getting in touch
                    </h3>
                </div>
            )}
        </>
    );
};

export default AppWrap<Props>(
    MotionWrap<Props>(Footer, styles.footer),
    6,
    'contact',
    'app__whitebg'
);
