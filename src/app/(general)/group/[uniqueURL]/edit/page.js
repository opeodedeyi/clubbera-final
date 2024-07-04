import { notFound } from 'next/navigation';
import MainEditGroup from "./MainEditGroup";
import { getGroupDetailsEdit } from "@/app/actions/getGroupDetails";

const EditGroup = async ({ params }) => {
    const result = await getGroupDetailsEdit(params.uniqueURL);

    if (!result.success) {
        notFound();
    }

    return <MainEditGroup group={result.group} />;
}

export default EditGroup;