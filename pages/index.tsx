import type { GetStaticProps, NextPage } from 'next';
import { Navbar } from '../components';
import {
    About,
    Footer,
    Header,
    Skills,
    Testimonial,
    Work,
} from '../containers';
import { Abouts } from '../models/models';
import { getAbouts } from '../services/queries';

import styles from '../styles/Home.module.scss';

type Props = {
    abouts: Abouts[];
};

const Home: NextPage<Props> = ({ abouts }) => {
    return (
        <div className={styles.app}>
            <Navbar />
            <Header />
            <About abouts={abouts} />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const abouts = getAbouts();

    const responses = await Promise.all([abouts]);

    return {
        props: {
            abouts: responses[0],
        },
    };
};
