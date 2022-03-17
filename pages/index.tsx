import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../components';
import {
    About,
    Footer,
    Header,
    Skills,
    Testimonial,
    Work,
} from '../containers';
import type {
    Abouts,
    Brands,
    Experiences,
    Skill,
    Testimonials,
    Works,
} from '../models/models';
import {
    getAbouts,
    getBrands,
    getExperiences,
    getSkills,
    getTestimonials,
    getWorks,
} from '../services/queries';

import styles from '../styles/Home.module.scss';

type Props = {
    abouts: Abouts[];
    works: Works[];
    skills: Skill[];
    experiences: Experiences[];
    brands: Brands[];
    testimonials: Testimonials[];
};

const Home: NextPage<Props> = ({
    abouts,
    works,
    skills,
    experiences,
    brands,
    testimonials,
}) => {
    return (
        <>
            <Head>
                <title>Creative Portfolio</title>
                <meta
                    name='description'
                    content='A creative portfolio template, made with Next.js, SCSS, GraphCMS and framer motion'
                />
            </Head>
            <main className={styles.app}>
                <Navbar />
                <Header />
                <About abouts={abouts} />
                <Work works={works} />
                <Skills skills={skills} experiences={experiences} />
                <Testimonial brands={brands} testimonials={testimonials} />
                <Footer />
            </main>
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const abouts = getAbouts();
    const works = getWorks();
    const skills = getSkills();
    const experiences = getExperiences();
    const brands = getBrands();
    const testimonials = getTestimonials();

    const responses = await Promise.all([
        abouts,
        works,
        skills,
        experiences,
        brands,
        testimonials,
    ]);

    return {
        props: {
            abouts: responses[0],
            works: responses[1],
            skills: responses[2],
            experiences: responses[3],
            brands: responses[4],
            testimonials: responses[5],
        },
    };
};
