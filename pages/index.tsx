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
import type { Abouts, Experiences, Skill, Works } from '../models/models';
import {
    getAbouts,
    getExperiences,
    getSkills,
    getWorks,
} from '../services/queries';

import styles from '../styles/Home.module.scss';

type Props = {
    abouts: Abouts[];
    works: Works[];
    skills: Skill[];
    experiences: Experiences[];
};

const Home: NextPage<Props> = ({ abouts, works, skills, experiences }) => {
    return (
        <main className={styles.app}>
            <Navbar />
            <Header />
            <About abouts={abouts} />
            <Work works={works} />
            <Skills skills={skills} experiences={experiences} />
            <Testimonial />
            <Footer />
        </main>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const abouts = getAbouts();
    const works = getWorks();
    const skills = getSkills();
    const experiences = getExperiences();

    const responses = await Promise.all([abouts, works, skills, experiences]);

    return {
        props: {
            abouts: responses[0],
            works: responses[1],
            skills: responses[2],
            experiences: responses[3],
        },
    };
};
