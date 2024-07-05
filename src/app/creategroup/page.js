import { CreateGroupProvider } from '@/app/context/CreateGroupContext';
import CreateGroup from './CreateGroup';

export default function CreateGroupPage() {
    return (
        <CreateGroupProvider>
            <CreateGroup />
        </CreateGroupProvider>
    );
}