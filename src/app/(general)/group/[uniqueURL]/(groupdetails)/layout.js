import { notFound } from 'next/navigation';
import { GroupProvider } from '@/app/context/GroupContext';
import { getGroupDetails } from "@/app/actions/getGroupDetails";
import GroupKeyDetails from './comp/GroupKeyDetails/GroupKeyDetails';
import SecHeaderBack from '@/components/header/SecHeaderBack/SecHeaderBack';
import GroupNavigation from './comp/GroupNavigation/GroupNavigation';

export default async function GroupDetailsLayout({ params, children }) {
    const result = await getGroupDetails(params.uniqueURL);
    
    return (
        <GroupProvider value={result.group}>
            <div className="centerPage">
                <SecHeaderBack />
                <GroupKeyDetails
                    group={result.group} />
                <GroupNavigation
                    uniqueURL={params.uniqueURL}/>
                {children}
            </div>
        </GroupProvider>
    )
}
