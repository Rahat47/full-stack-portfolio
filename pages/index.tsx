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
import type { Abouts, Works } from '../models/models';
import { getAbouts, getWorks } from '../services/queries';

import styles from '../styles/Home.module.scss';

type Props = {
    abouts: Abouts[];
    works: Works[];
};

const Home: NextPage<Props> = ({ abouts, works }) => {
    return (
        <div className={styles.app}>
            <Navbar />
            <Header />
            <About abouts={abouts} />
            <Work works={works} />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const abouts = getAbouts();
    const works = getWorks();

    const responses = await Promise.all([abouts, works]);

    return {
        props: {
            abouts: responses[0],
            works: responses[1],
        },
    };
};
