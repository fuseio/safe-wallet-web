import type { NextPage } from 'next'
import Head from 'next/head'
import AddressBookTable from '@/components/address-book/AddressBookTable'

const AddressBook: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'Fuse Safe – Address book'}</title>
      </Head>

      <AddressBookTable />
    </>
  )
}

export default AddressBook
