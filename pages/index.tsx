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
import type { Abouts, Skill, Works } from '../models/models';
import { getAbouts, getSkills, getWorks } from '../services/queries';

import styles from '../styles/Home.module.scss';

type Props = {
    abouts: Abouts[];
    works: Works[];
    skills: Skill[];
};

const Home: NextPage<Props> = ({ abouts, works, skills }) => {
    return (
        <div className={styles.app}>
            <Navbar />
            <Header />
            <About abouts={abouts} />
            <Work works={works} />
            <Skills skills={skills} />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const abouts = getAbouts();
    const works = getWorks();
    const skills = getSkills();

    const responses = await Promise.all([abouts, works, skills]);

    return {
        props: {
            abouts: responses[0],
            works: responses[1],
            skills: responses[2],
        },
    };
};
