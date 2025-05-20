'use server';

import { HeaderType, updateHeader } from "apps/xv-template1/lib/db";

export async function UpdateHeader(props: HeaderType) {
  const { id, ...rest } = props;
  console.log("called",props)
  const filteredProps = Object.fromEntries(
    Object.entries(rest).filter(([_, value]) => value !== undefined)
  );

  await updateHeader({ id, ...filteredProps });
}
