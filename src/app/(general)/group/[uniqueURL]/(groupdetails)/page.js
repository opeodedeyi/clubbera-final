'use server';

import MainGroupDetails from "@/components/pages/groupDetails/groupDetails";
import { getGroupDetails } from "@/service/group/getGroupService";


const GroupDetails = async ({ params, searchParams }) => {
    const result = await getGroupDetails(params.uniqueURL);

    if (result.success) {
        return (
            <>
                <MainGroupDetails params={params} searchParams={searchParams} group={result.group} />
            </>
        );
    }

    throw new Error(result.error);
}

export default GroupDetails;