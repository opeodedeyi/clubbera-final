import CardColumn from '@/components/layout/CardColumn/CardColumn';
import FormedGroups from '../../steps/FormedGroups/FormedGroups';
import JoinedGroups from '../../steps/JoinedGroups/JoinedGroups';
import style from "./ProfileSec.module.css";


export default function ProfileSec({ user }) {
    return (
        <CardColumn
            gap="24px"
            width="100%"
            maxWidth="1000px"
            padding="0 0 32px">
            <JoinedGroups user={user}/>
            <FormedGroups user={user}/>
        </CardColumn>
    )
}