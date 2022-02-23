import styles from './skills.module.scss';
import { motion } from 'framer-motion';
import AppWrap from '../../wrapper/AppWrap';
import ReactTooltip from 'react-tooltip';
import Image from 'next/image';
import type { Experiences, Skill } from '../../models/models';
import React from 'react';
import MotionWrap from '../../wrapper/MotionWrap';

interface Props {
    skills: Skill[];
    experiences: Experiences[];
}

const Skills = ({ skills, experiences }: Props) => {
    return (
        <>
            <h2 className='head_text'>
                Skills <span>&</span> Experience
            </h2>

            <div className={styles.skills}>
                <motion.div className={styles.skills__list}>
                    {skills.map(skill => (
                        <motion.div
                            key={skill.id}
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className={`${styles.skills__item} app__flex`}
                        >
                            <div
                                className='app__flex'
                                style={{
                                    backgroundColor: `rgba(
                                        ${skill.bgColor.rgba.r},
                                        ${skill.bgColor.rgba.g},
                                        ${skill.bgColor.rgba.b},
                                        0.15
                                    )`,
                                }}
                            >
                                <Image
                                    src={skill.icon.url}
                                    alt={`${skill.name} Icon`}
                                    width={skill.icon.width}
                                    height={skill.icon.height}
                                />
                            </div>

                            <p className='p_text'>{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div className={styles.skills__experience}>
                    {experiences.map(expr => (
                        <motion.div
                            className={styles.skills__experience__item}
                            key={expr.id}
                        >
                            <div
                                className={styles.skills__experience__item_year}
                            >
                                <p className='bold_text'>
                                    {new Date(expr.year).getFullYear()}
                                </p>
                            </div>

                            <motion.div
                                className={
                                    styles.skills__experience__item_works
                                }
                            >
                                {expr.works.map(work => (
                                    <React.Fragment key={work.id}>
                                        <motion.div
                                            key={work.id}
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className={
                                                styles.skills__experience__item_works__item
                                            }
                                            data-tip={work.name}
                                            data-for={work.name}
                                        >
                                            <h4 className='bold_text'>
                                                {work.name}
                                            </h4>
                                            <p className='p_text'>
                                                {work.company}
                                            </p>
                                        </motion.div>

                                        <ReactTooltip
                                            id={work.name}
                                            effect='solid'
                                            arrowColor='#fff'
                                            class={styles.tooltip}
                                            key={`work-${work.id}`}
                                        >
                                            {work.description}
                                        </ReactTooltip>
                                    </React.Fragment>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Skills, styles.skill),
    4,
    'skills',
    'app__whitebg'
);
