import { sampleTransactions } from '../../environments'
import MemberTransactions from '../../@views/MemberTransactions'

const Transactions = () => {
  const data = sampleTransactions
  return (
   <><MemberTransactions memberData={data}/></> 
  )
}

export default Transactions