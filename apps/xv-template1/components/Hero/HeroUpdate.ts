'use server';

import { HeroType, updateHero } from "apps/xv-template1/lib/db";

export async function UpdateHero(props: HeroType) {
    const { id, ...rest } = props;

    const filteredProps = Object.fromEntries(
        Object.entries(rest).filter(([_, value]) => value !== undefined)
    );

    await updateHero({ id, ...filteredProps });
}
