import { notFound } from 'next/navigation';
import GroupDetailsContent from "./GroupDetailsContent";
import { getGroupDetails } from "@/app/actions/getGroupDetails";


const GroupDetails = async ({ params }) => {
    const result = await getGroupDetails(params.uniqueURL);

    if (!result.success) {
        notFound();
    }

    return <GroupDetailsContent group={result.group} />
}

export default GroupDetails;