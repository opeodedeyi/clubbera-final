'use client';

import { useCreateGroup } from '@/app/context/CreateGroupContext';
import CustomTag from "@/components/forminput/CustomTag/CustomTag";
import style from "../CreateGroup.module.css";


export default function CreateGroupStepTwo() {
    const { selectedTopics, setSelectedTopics } = useCreateGroup();
    const presetTopics = ["writing", "singing", "guitar lessons", "playstation", "chess", "architecture", "dancing", "new to town", "graphics design"];

    const handleTopicClick = (topic) => {
        if (selectedTopics.includes(topic)) {
            setSelectedTopics(prevTopics => prevTopics.filter(prevTopic => prevTopic !== topic));
        } else {
            setSelectedTopics(prevTopics => [...prevTopics, topic]);
        }
    };

    return (
        <div className={style.authFormContent}>
            <div className={style.authFormContentMain}>
                <div className={style.authFormContentIntro}>
                    <h3>Choose topics for your group</h3>
                    <p className={style.authFormContentIntroText}>Set the topics for your group, select at least 3 topics before moving onto the next step.</p>
                </div>
            </div>
            <div className={style.authFormInputs}>
                <div className={style.authFormTags}>
                    {presetTopics.map((topic, index) => (
                        <CustomTag 
                            key={index} 
                            selected={selectedTopics.includes(topic) ? 'isSelected' : 'isNotSelected'} 
                            onClick={() => handleTopicClick(topic)}
                        >
                            {topic}
                        </CustomTag>
                    ))}
                </div>
            </div>
        </div>
    );
}