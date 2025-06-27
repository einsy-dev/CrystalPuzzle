import { Metadata } from 'next';

export const metadata: Metadata = {};
export default function Schedule({
  params,
}: Readonly<{ params: { id: string } }>) {
  return (
    <>
      <div>Schedule {params.id}</div>
    </>
  );
}
