'use server';


import Header from "@/components/header/header";
import MainFooter from "@/components/footer/mainfooter";
import MainEditGroup from "@/components/pages/editGroup/MainEditGroup";
import { getGroupEditDetails } from "@/service/group/editGroupService";

const EditGroup = async ({ params, searchParams }) => {
    const result = await getGroupEditDetails(params.uniqueURL);
    console.log(result);

    if (result.success) {
        return (
            <>
                <Header />
                <MainEditGroup params={params} searchParams={searchParams} group={result.group}/>
                <MainFooter/>
            </>
        );
    }

    throw new Error(result.error);
}

export default EditGroup;