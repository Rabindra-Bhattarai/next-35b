//napage
//napage:params

export default async function Page({
    params
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <div>
            Example Test ID: {id}
        </div>
    );
}


//make the following route path
// /practice/users
