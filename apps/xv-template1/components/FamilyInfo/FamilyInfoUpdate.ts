'use server';

import { PageInfoType, updatePageInfo } from "apps/xv-template1/lib/db";

export async function UpdateFamilyInfo(props: PageInfoType) {
    const { id, ...rest } = props;

    const filteredProps = Object.fromEntries(
        Object.entries(rest).filter(([_, value]) => value !== undefined)
    );

    await updatePageInfo({ id, ...filteredProps });
}
