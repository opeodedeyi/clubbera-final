'use server';

import MainEditGroup from "@/components/pages/editGroup/MainEditGroup";
import { getGroupEditDetails } from "@/service/group/editGroupService";


const EditGroup = async ({ params, searchParams }) => {
    const result = await getGroupEditDetails(params.uniqueURL);

    if (result.success) {
        return (
            <>
                <MainEditGroup params={params} searchParams={searchParams} group={result.group}/>
            </>
        );
    }

    throw new Error(result.error);
}

export default EditGroup;