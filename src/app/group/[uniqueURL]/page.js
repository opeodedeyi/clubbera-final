'use server';


import Header from "@/components/header/header";
import MainFooter from "@/components/footer/mainfooter";
import MainGroupDetails from "@/components/pages/groupDetails/groupDetails";
import { getGroupDetails } from "@/service/group/getGroupService";


const GroupDetails = async ({ params, searchParams }) => {
    const result = await getGroupDetails(params.uniqueURL);
    console.log(result);

    if (result.success) {
        return (
            <>
                <Header />
                <MainGroupDetails params={params} searchParams={searchParams} group={result.group} />
                <MainFooter />
            </>
        );
    }

    throw new Error(result.error);
}

export default GroupDetails;