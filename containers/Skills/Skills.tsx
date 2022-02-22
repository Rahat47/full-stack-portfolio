import styles from './skills.module.scss';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AppWrap from '../../wrapper/AppWrap';
import ReactTooltip from 'react-tooltip';
import Image from 'next/image';
import type { Skill } from '../../models/models';

type Props = {
    skills: Skill[];
};

const Skills = ({ skills }: Props) => {
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
                                // style={{ backgroundColor: skill.bgColor.css }}
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
            </div>
        </>
    );
};

export default Skills;
