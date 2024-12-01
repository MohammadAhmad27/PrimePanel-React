import Single from "../../components/single/Single"
import { singleUser } from "../../data"
import "./user.scss"

export default function User() {
    // fetch user and send to single component
  return (
    <div>
        User
        <Single data={singleUser} />
        </div>
  )
}
