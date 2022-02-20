import type { NextPage } from 'next';
import { Navbar } from '../components';
import {
    About,
    Footer,
    Header,
    Skills,
    Testimonial,
    Work,
} from '../containers';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <div className={styles.app}>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;
